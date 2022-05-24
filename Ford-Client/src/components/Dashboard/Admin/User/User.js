import UserData from "./UserData";
import Loading from "../../../Shared/Loading/Loading";
import { useQuery } from "react-query";
const User = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://salty-fortress-85484.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <div class="overflow-x-auto mt-20">
          <table class="table mx-auto">
            <thead>
              <tr className="border-2 border-primary">
                <th className="bg-primary"></th>
                <th className="text-lg text-secondary font-semibold bg-primary">
                  Email
                </th>
                <th className="text-lg text-secondary font-semibold bg-primary">
                  Admin
                </th>
                <th className="text-lg text-secondary font-semibold bg-primary">
                  Delete User
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <UserData key={item._id} item={item} refetch={refetch} index={index}></UserData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
