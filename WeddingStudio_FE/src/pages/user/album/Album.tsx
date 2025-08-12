import React from "react";
import Breadcrumb from "../../../components/common/Breadcrumb";
import MainAlbum from "../../../components/user/album/MainAlbum";

const Album: React.FC = () => {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tất cả sản phẩm" },
  ];

  return (
    <div className="container w-screen">
      <Breadcrumb items={breadcrumbItems} />
      <MainAlbum />
    </div>
  );
};

export default Album;
