import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/user/layout/Header";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const UserLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-32 w-full">
        <Outlet />
      </main>
      <ScrollToTopButton />
    </>
  );
};

export default UserLayout;
