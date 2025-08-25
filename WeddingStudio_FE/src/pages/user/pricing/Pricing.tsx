import { Heart, Check } from "lucide-react";
import Header from "../../../components/user/layout/Header";
import Breadcrumb from "../../../components/common/Breadcrumb";

import pricingPackages from "../../../data/Pricing";
import { useParams } from "react-router-dom";

export default function Pricing() {
  const params = useParams();
  const currentPackage = pricingPackages.find(
    (pkg) => pkg.slug === params.package
  );

  if (!currentPackage) {
    return <div>Package not found</div>;
  }

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Bảng giá", href: "/#bang-gia" },
    { label: currentPackage.packageName },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 font-amatic">
              {currentPackage.packageName}
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-px bg-gray-300"></div>
              <Heart className="h-6 w-6 text-[#e74c3c] mx-2" />
              <div className="w-20 h-px bg-gray-300"></div>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              {currentPackage.description}
            </p>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl font-bold text-[#e74c3c]">
                  {currentPackage.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  {currentPackage.originalPrice}
                </span>
              </div>
              <div className="inline-block bg-[#e74c3c] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Tiết kiệm{" "}
                {Number.parseInt(
                  currentPackage.originalPrice.replace(/[^\d]/g, "")
                ) -
                  Number.parseInt(
                    currentPackage.price.replace(/[^\d]/g, "")
                  )}{" "}
                VND
              </div>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Điểm nổi bật
                </h3>
                <ul className="space-y-2">
                  {currentPackage.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-[#e74c3c] mr-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-[#e74c3c] cursor-pointer hover:bg-[#c0392b] !text-white px-8 py-3 text-lg font-semibold rounded-full">
                  ĐĂNG KÝ NGAY
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Chi tiết dịch vụ
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentPackage.features.map((feature, index) => (
                <div
                  key={index}
                  className="items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Cần tư vấn thêm?
            </h3>
            <p className="text-gray-600 mb-6">
              Liên hệ với chúng tôi để được tư vấn chi tiết và nhận ưu đãi đặc
              biệt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#e74c3c] cursor-pointer hover:bg-[#c0392b] !text-white px-6 py-2 rounded-full">
                GỌI NGAY: 1900 6750
              </button>
              <button className="!border-[#e74c3c] border-1 !text-[#e74c3c] hover:bg-[#e74c3c] cursor-pointer hover:!text-white px-6 py-2 rounded-full bg-transparent">
                NHẮN TIN TƯ VẤN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
