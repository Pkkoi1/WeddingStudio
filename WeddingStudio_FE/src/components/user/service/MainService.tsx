import { Heart } from "lucide-react";
import ServiceItem from "./ServiceItem";
import { useEffect, useRef, useState } from "react";
import { fetchServices } from "../../../utils/Service";
import type { Service } from "../../../data/Service";
import service1 from "../../../../public/service_4.webp";
import service2 from "../../../../public/service_5.webp";
import service3 from "../../../../public/service_6.webp";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import "antd/dist/reset.css";

const MainServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // responsive items per page
  const carouselRef = useRef<CarouselRef>(null);

  const icons = [service1, service2, service3];

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Group services by itemsPerPage
  const groupedServices = [];
  for (let i = 0; i < services.length; i += itemsPerPage) {
    groupedServices.push(services.slice(i, i + itemsPerPage));
  }

  return (
    <section className="flex flex-col items-center justify-center w-screen lg:px-[10%] bg-white py-16">
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
          <>
            <Carousel
              ref={carouselRef}
              dots={false}
              arrows
              draggable
              className="w-full lg:p-10 h-fit"
              beforeChange={(_, next) => setCurrentSlide(next)}
            >
              {groupedServices.map((group, idx) => (
                <div key={idx}>
                  <div
                    className={`grid ${
                      itemsPerPage === 3 ? "grid-cols-3" : "grid-cols-2 gap-2"
                    }`}
                  >
                    {group.map((service, index) => (
                      <ServiceItem
                        key={service._id}
                        icon={icons[index % icons.length]}
                        title={service.title}
                        slogan={service.slogan}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="flex justify-center mt-8">
              {groupedServices.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => {
                    carouselRef.current?.goTo(idx);
                  }}
                  style={{
                    display: "inline-block",
                    height: "4px",
                    background: currentSlide === idx ? "#e74c3c" : "#e0e0e0",
                    width: currentSlide === idx ? "32px" : "12px",
                    transition: "all 0.3s",
                    margin: "0 4px",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MainServices;
