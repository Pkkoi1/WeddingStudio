import { Heart } from "lucide-react";
import ServiceItem from "./ServiceItem";
import { useEffect, useState } from "react";
import { fetchServices } from "../../../utils/Service";
import type { Service } from "../../../data/Service";
import service1 from "../../../../public/service_4.webp";
import service2 from "../../../../public/service_5.webp";
import service3 from "../../../../public/service_6.webp";

const MainServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const icons = [service1, service2, service3];

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        const response = await fetchServices();
        setServices(response.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const handleDotClick = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedServices = services.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="flex flex-col items-center justify-center w-screen px-[10%] bg-white py-16">
      <div className="container mx-auto px-4">
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

        {loading ? (
          <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-transform duration-500 ease-in-out">
            {paginatedServices.map((service, index) => (
              <ServiceItem
                key={service._id}
                icon={icons[index % icons.length]} // Cycle through the icons
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12 space-x-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentPage === index ? "bg-orange-500 w-6" : "bg-gray-300 w-3"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
