import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">GIỚI THIỆU</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Về Chúng Tôi</h2>
            <p className="text-gray-600 mb-4">
              Wedding Studio là studio chụp ảnh cưới chuyên nghiệp với hơn 10
              năm kinh nghiệm trong ngành. Chúng tôi cam kết mang đến cho các
              cặp đôi những bức ảnh cưới đẹp nhất, lưu giữ khoảnh khắc hạnh phúc
              nhất trong cuộc đời.
            </p>
            <p className="text-gray-600">
              Với đội ngũ photographer giàu kinh nghiệm và trang thiết bị hiện
              đại, chúng tôi luôn sẵn sàng thực hiện mọi concept ảnh cưới theo ý
              tưởng của khách hàng.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-gray-500">Hình ảnh studio</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Cặp đôi đã tin tưởng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Năm kinh nghiệm</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Địa điểm chụp ảnh</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
