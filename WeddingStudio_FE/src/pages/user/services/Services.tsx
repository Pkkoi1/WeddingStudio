import React from "react";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">DỊCH VỤ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Chụp ảnh cưới Studio</h3>
          <p className="text-gray-600 mb-4">
            Chụp ảnh cưới trong studio với nhiều concept đa dạng
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Makeup và trang điểm chuyên nghiệp</li>
            <li>Trang phục cưới cao cấp</li>
            <li>Nhiều bối cảnh đẹp</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Chụp ảnh cưới ngoại cảnh
          </h3>
          <p className="text-gray-600 mb-4">
            Chụp ảnh cưới tại các địa điểm ngoại cảnh đẹp
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Nhiều địa điểm đẹp</li>
            <li>Ekip chuyên nghiệp</li>
            <li>Chất lượng ảnh cao</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
