import React from "react";
import { toast } from "react-toastify";

const UserData = ({ item, index, refetch }) => {
  const { email, role } = item;
  const makeAdmin = () => {
    fetch(`https://salty-fortress-85484.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Faild to make an Amin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Succesfully make admin`);
        }
      });
  };
  return (
    <tr className="border-2 border-primary">
      <th className="text-lg text-secondary">{index + 1}</th>
      <td className="text-lg text-secondary">{email}</td>
      <td className="text-lg text-secondary">
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            class="btn btn-outline btn-primary btn-sm text-secondary"
          >
            Make Admin
          </button>
        )}
      </td>
      <td className="text-lg text-secondary">
        <button class="btn btn-outline btn-error btn-sm text-secondary">
          Delet User
        </button>
      </td>
    </tr>
  );
};

export default UserData;
