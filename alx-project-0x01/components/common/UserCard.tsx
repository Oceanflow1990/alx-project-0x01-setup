import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = (user) => {
  return (
    <div className="border rounded shadow p-6 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>
      <p className="text-gray-700 mt-2">{user.email}</p>
      <p className="text-gray-700">{user.phone}</p>
      <p className="text-gray-700">{user.website}</p>

      <div className="mt-4">
        <h3 className="font-semibold">Company</h3>
        <p className="text-gray-600">{user.company.name}</p>
        <p className="italic text-gray-500">"{user.company.catchPhrase}"</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Address</h3>
        <p className="text-gray-600">
          {user.address.suite}, {user.address.street}, {user.address.city} - {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
