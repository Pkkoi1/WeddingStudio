import React from "react";
import Banner from "../../../components/user/banner/Banner";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 ">
      <Banner></Banner>
      <h1 className="text-4xl font-bold text-center mb-8">
        Chào mừng đến với Wedding Studio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">ALBUM</h3>
          <p>Khám phá bộ sưu tập ảnh cưới đẹp nhất</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">DỊCH VỤ</h3>
          <p>Dịch vụ chụp ảnh cưới chuyên nghiệp</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">BẢNG GIÁ</h3>
          <p>Bảng giá chi tiết các gói dịch vụ</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
