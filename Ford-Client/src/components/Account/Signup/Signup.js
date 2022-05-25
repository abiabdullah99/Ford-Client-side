import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import UseToken from "../../../Hooks/UseToken";
import Loading from "../../Shared/Loading/Loading";
const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // Google Singing
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const [token] = UseToken(user || guser);

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

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.name.value;
    await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    await updateProfile({ displayName: name }, { photoURL: photoURL });
    toast.success("Sign Up Succesfull");
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from);
    }
  }, [token, user]);

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

  if (loading || gloading || updating) {
    <Loading></Loading>;
  }
  return (
    <div className="flex items-center justify-center h-full mt-20 ">
      <form className="shadow-primary shadow-md " onSubmit={handleSignUp}>
        <div className="px-16 py-10">
          <h2 className="text-3xl text-primary font-semibold text-center mb-10">
            Please Sign Up
          </h2>
          <div>
            <input
              className="input input-bordered border-primary w-full text-lg my-4"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <input
              className="input input-bordered border-primary w-full text-lg my-4"
              type="photoURL"
              name="photoURL"
              required
              placeholder="Enter Your PhotoUrl"
            />
          </div>
          <div>
            <input
              className="input input-bordered border-primary w-full text-lg mb-4"
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
            Sign Up
          </button>
          <p className="ml-3 mt-8 text-secondary text-lg">
            All Ready Have Account?
            <Link className="ml-2 underline text-primary" to="/login">
              Login
            </Link>
          </p>
          <div class="divider text-secondary">Or</div>
          <button
            className="btn btn-outline btn-primary rounded text-secondary w-full text-lg"
            onClick={() => signInWithGoogle()}
          >
            Contine With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
