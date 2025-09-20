import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl mb-4">Users</h1>
        <Button />
      </main>
    </div>
  );
};

export default UsersPage;
