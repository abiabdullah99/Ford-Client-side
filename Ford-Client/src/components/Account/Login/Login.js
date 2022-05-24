import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import UseToken from "../../../Hooks/UseToken";
import Loading from "../../Shared/Loading/Loading";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //   Pass Reset
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  // Google Singing
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    // error handling

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setUserError({ ...userError, email: "" });
    } else {
      setUserError({ ...userError, email: "Please Provide Valid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePassword = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    // error handling

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setUserError({ ...userError, password: "" });
    } else {
      setUserError({ ...userError, password: "Minimum 6 characters! Use" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
    toast.success("Login Succesfull");
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [token] = UseToken(user || guser);

  useEffect(() => {
    if (token) {
      navigate(from);
    }
  }, [token, user, guser]);

  const restPassword = async () => {
    const email = userInfo.email;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent Email");
    } else {
      toast.error("Please Use Your Valid Email");
    }
  };

  useEffect(() => {
    const errors = error || gerror;
    if (errors) {
      switch (errors?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [error, gerror]);

  if (loading || gloading) {
    <Loading></Loading>;
  }
  return (
    <div className="flex items-center justify-center h-full mt-20 ">
      <form className="shadow-primary shadow-md " onSubmit={handleLogin}>
        <div className="px-16 py-10">
          <h2 className="text-3xl text-primary font-semibold text-center mb-10">
            Please Login
          </h2>
          <div>
            <input
              className="input input-bordered border-primary w-full text-lg my-6 "
              onChange={handleEmailChange}
              name="email"
              type="text"
              placeholder="Enter Your E-mail"
              required
            />
          </div>
          {userError?.email && (
            <p className="text-red-500">{userError.email}</p>
          )}
          <div>
            <input
              className="input input-bordered border-primary w-full text-lg mb-4"
              onChange={handlePassword}
              name="password"
              type="password"
              placeholder="Enter Your Password"
              required
            />
            {userError?.password && (
              <p className="text-red-500">{userError.password}</p>
            )}
          </div>
          <button className="btn btn-primary w-full text-lg mt-4 rounded">
            Login
          </button>
          <p className="ml-3 mt-8 text-secondary text-lg">
            New To Ford Ltd.?
            <Link className="ml-2 underline text-primary" to="/signup">
              Sign Up First
            </Link>
          </p>
          <div class="divider text-secondary">Or</div>
          <button
            className="btn btn-outline btn-primary rounded text-secondary w-full text-lg"
            onClick={() => signInWithGoogle()}
          >
            Contine With Google
          </button>
          <h1
            className="mt-8 text-secondary link text-center"
            onClick={() => restPassword()}
          >
            Reset Password
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;
