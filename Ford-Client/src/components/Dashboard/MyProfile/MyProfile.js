import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  return (
    <div class="hero mt-40">
      <div class="hero-content text-justify">
        <div class="max-w-md">
          <h1 class="text-5xl pb-10 font-bold text-secondary text-center">
            My Profile
          </h1>
          <p class="py-2 text-primary text-xl font-bold">
            Your Name: {user.displayName}
          </p>
          <p className="text-xl font-bold text-primary">
            Your Email: {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
