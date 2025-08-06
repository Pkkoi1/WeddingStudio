import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <>
      {/* Admin Header sẽ được tạo sau */}
      <header className="w-full bg-gray-800 text-white p-4">
        <h1>Admin Dashboard</h1>
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
