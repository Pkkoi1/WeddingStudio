import { Heart } from "lucide-react";
import TeamMember from "../member/TeamMember";
import type React from "react";

const AboutStudio: React.FC = () => {
  const teamMembers = [
    {
      name: "Phạm Thu Hương",
      role: "Nhiếp ảnh gia",
      imageUrl: "/team-photographer.png",
      imageAlt: "Phạm Thu Hương - Nhiếp ảnh gia",
    },
    {
      name: "Phan Nha Trang",
      role: "Chuyên gia trang điểm",
      imageAlt: "Phan Nha Trang - Chuyên gia trang điểm",
      imageUrl: "/team-makeup-artist.png",
    },
    {
      name: "Trần Anh Đức",
      role: "CEO",
      imageUrl: "/team-ceo.png",
      imageAlt: "Trần Anh Đức - CEO",
    },
  ];

  return (
    <section className="container mx-auto pt-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-amatic">
          VỀ WEDDING STUDIO
        </h2>
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-px bg-gray-300"></div>
          <Heart className="h-6 w-6 text-[#e74c3c] mx-2" />
          <div className="w-20 h-px bg-gray-300"></div>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Chúng tôi rất vui khi được gặp gỡ và hợp tác với quý khách
        </p>
      </div>

      {/* Team Members */}
      <div className="flex justify-center space-x-16 mb-16">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            imageAlt={member.imageAlt}
          />
        ))}
      </div>

      {/* About Content */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{
          background: "url('public/bg-about.png') no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative h-[450px] rounded-lg overflow-hidden"></div>
        <div className="space-y-4 pr-[30%] pt-28 text-left">
          <p className="text-white leading-relaxed">
            Wedding Studio luôn được khẳng định là một thương hiệu về dịch vụ
            ảnh cưới và chụp ảnh cưới trọn gói chuyên nghiệp cùng với đội ngũ
            thợ chụp ảnh và chuyên gia trang điểm và nhân viên trẻ, năng động,
            sáng tạo, tận tình, chu đáo.
          </p>
          <p className="text-white leading-relaxed">
            Đặc biệt sự đa dạng trong phong cách chụp ảnh và lối trang điểm, tạo
            hình mang đậm nét đẹp hoàn mỹ cho từng cặp đôi uyên ương đã khiến
            cho ảnh viện áo cưới Wedding Studio trở thành địa chỉ tin cậy cho
            nhiều bạn trẻ mỗi khi chuẩn bị cưới vợ.
          </p>
          <button
            className="cursor-pointer mt-6 px-6 py-3 border-2 border-[#e74c3c] bg-[#e74c3c] !text-white rounded-full font-bold hover:bg-[#fff] hover:!text-[#e74c3c] hover:border-[#e74c3c] hover:border-2 transition"
            onClick={() => window.open("/about", "_self")}
          >
            TÌM HIỂU THÊM
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutStudio;
