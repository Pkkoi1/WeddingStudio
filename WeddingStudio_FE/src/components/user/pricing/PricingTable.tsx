import { Heart } from "lucide-react";
import PricingCard from "./PricingCard";

const PricingTable: React.FC = () => {
  const pricingPackages = [
    {
      packageName: "GÓI VIP 1",
      price: "3.850.000 VND",
      features: [
        "Tặng Vest cưới",
        "Tặng vé phim trường",
        "2 Ảnh phóng 50x75",
        "1 Ảnh để bàn",
        "1 Album khổ (20×20)",
        "1 váy cưới",
        "Trang điểm tại nhà cô dâu",
      ],
      isHighlighted: false,
    },
    {
      packageName: "GÓI VIP 2",
      price: "5.200.000 VND",
      features: [
        "Tặng Vest cưới",
        "Tặng vé phim trường",
        "2 Ảnh phóng 60x90",
        "1 Album 25x25cm",
        "1 ảnh để bàn",
        "1 váy cưới",
        "Trang điểm tại nhà cô dâu",
      ],
      isHighlighted: true,
    },
    {
      packageName: "GÓI VIP 3",
      price: "6.800.000 VND",
      features: [
        "Tặng Vest cưới",
        "Tặng vé phim trường",
        "2 Ảnh phóng 60x90",
        "1 Album 25x25cm",
        "1 ảnh để bàn",
        "1 váy cưới",
        "Trang điểm tại nhà cô dâu",
      ],
      isHighlighted: false,
    },
    {
      packageName: "GÓI VIP 4",
      price: "12.800.000 VND",
      features: [
        "Tặng Vest cưới",
        "Tặng vé phim trường",
        "2 Ảnh phóng 60x90",
        "1 Album 25x25cm",
        "1 ảnh để bàn",
        "1 váy cưới",
        "Trang điểm tại nhà cô dâu",
      ],
      isHighlighted: false,
    },
  ];

  return (
    <section className="container mx-auto px-4 lg:px-[10%] py-16 bg-[#f5f5f5] ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-amatic">
          BẢNG GIÁ
        </h2>
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-px bg-gray-300"></div>
          <Heart className="h-6 w-6 text-[#e74c3c] mx-2" />
          <div className="w-20 h-px bg-gray-300"></div>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Chúng tôi cung cấp nhiều gói dịch vụ cho quý khách lựa chọn
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPackages.map((pkg, index) => (
          <PricingCard
            key={index}
            packageName={pkg.packageName}
            price={pkg.price}
            features={pkg.features}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
