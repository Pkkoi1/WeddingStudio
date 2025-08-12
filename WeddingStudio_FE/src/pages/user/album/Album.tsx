import React from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import ListCover from "../../../components/user/album/ListCover";

const Album: React.FC = () => {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Album" },
  ];

  return (
    <div className="container w-screen">
      <Breadcrumb items={breadcrumbItems} />
      <ListCover />
    </div>
  );
};

export default Album;
