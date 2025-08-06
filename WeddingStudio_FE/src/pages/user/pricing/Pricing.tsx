import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">BẢNG GIÁ</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">GÓI CƠ BẢN</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">
            5,000,000₫
          </div>
          <ul className="text-left list-disc list-inside text-gray-600">
            <li>20 ảnh đã qua xử lý</li>
            <li>1 bộ trang phục</li>
            <li>Makeup cơ bản</li>
            <li>Chụp tại studio</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-blue-500">
          <h3 className="text-xl font-semibold mb-4">GÓI TIÊU CHUẨN</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">
            8,000,000₫
          </div>
          <ul className="text-left list-disc list-inside text-gray-600">
            <li>40 ảnh đã qua xử lý</li>
            <li>2 bộ trang phục</li>
            <li>Makeup chuyên nghiệp</li>
            <li>Chụp tại studio + ngoại cảnh</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">GÓI PREMIUM</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">
            12,000,000₫
          </div>
          <ul className="text-left list-disc list-inside text-gray-600">
            <li>60 ảnh đã qua xử lý</li>
            <li>3 bộ trang phục</li>
            <li>Makeup + làm tóc</li>
            <li>Chụp đa địa điểm</li>
            <li>Album ảnh cao cấp</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
