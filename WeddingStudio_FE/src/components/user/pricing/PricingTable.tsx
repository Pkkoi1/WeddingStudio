import { Heart } from "lucide-react";
import PricingCard from "./PricingCard";
import pricingPackages from "../../../data/Pricing";
import { useNavigate } from "react-router-dom";

const PricingTable: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug: string) => {
    navigate(`/pricing/${slug}`);
  };

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
          <div
            key={index}
            onClick={() => handleCardClick(pkg.slug)}
            className="cursor-pointer"
          >
            <PricingCard
              packageName={pkg.packageName}
              price={pkg.price}
              features={pkg.features}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
