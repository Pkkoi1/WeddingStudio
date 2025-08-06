import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/user/layout/Header";

const UserLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
