import { Video, Shirt, UserRound, Heart } from "lucide-react";
import ServiceItem from "./ServiceItem";

export default function MainServices() {
  const services = [
    {
      icon: Video,
      title: "Quay phóng sự cưới",
      description:
        "Một bức ảnh hơn ngàn lời nói - 1 đoạn Video hơn ngàn bức ảnh. Xem những Clip cực đẹp với thiết bị đẳng cấp tại Wedding studio.",
    },
    {
      icon: Shirt,
      title: "Thuê trang phục cưới",
      description:
        "Với Wedding studio, các bạn có thể lựa chọn cho mình một chiếc áo cưới lộng lẫy, hợp thời trang, quyến rũ nhất trong ngày cưới.",
    },
    {
      icon: UserRound,
      title: "Trang điểm cô dâu",
      description:
        "Chuyên viên Makeup của chúng tôi có trên 5 năm kinh nghiệm, với phong cách trang điểm đẳng cấp, phong cách tự nhiên, sang trọng...",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4 font-amatic tracking-wide">
          CÁC DỊCH VỤ CHÍNH
        </h2>
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-px bg-gray-300"></div>
          <Heart className="h-6 w-6 text-[#e74c3c] mx-2" />
          <div className="w-20 h-px bg-gray-300"></div>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Dịch vụ chuyên nghiệp với Wedding Studio – hãy liên hệ sớm với chúng
          tôi để nhận được nhiều ưu đãi!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12 space-x-2">
        <div className="h-2 w-8 bg-[#e74c3c] rounded-full"></div>
        <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}
