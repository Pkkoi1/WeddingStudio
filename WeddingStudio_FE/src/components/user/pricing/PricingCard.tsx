interface PricingCardProps {
  packageName: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
}

export default function PricingCard({
  packageName,
  price,
  features,
  isHighlighted = false,
}: PricingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
      <div className="text-center border-b">
        <h3 className="text-xl font-mono text-gray-800 m-4">{packageName}</h3>
        <div className={"text-white font-bold text-lg py-3  bg-[#808080]"}>
          {price}
        </div>
      </div>
      <div className="px-6 pb-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li
              key={index}
              className={"text-sm text-gray-700 border-t py-3 border-[#f5f5f5]"}
            >
              {feature}
            </li>
          ))}
        </ul>
        <button
          className={`w-full bg-white hover:bg-[#c0392b] hover:text-white hover:border-white text-[#808080] font-light border-[#808080] border-1 py-2 rounded-full`}
        >
          XEM CHI TIẾT
        </button>
      </div>
    </div>
  );
}
