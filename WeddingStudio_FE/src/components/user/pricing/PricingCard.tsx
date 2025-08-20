interface Feature {
  title: string;
  description: string;
}

interface PricingCardProps {
  packageName: string;
  price: string;
  features: Feature[];
  isHighlighted?: boolean;
}

export default function PricingCard({
  packageName,
  price,
  features,
}: PricingCardProps) {
  return (
    <div className="lg:px-5">
      <div className="bg-white rounded-lg shadow-md overflow-visible hover:shadow-lg transition-shadow duration-300 group">
        <div className="text-center border-b">
          <h3 className="text-xl font-mono text-gray-800 m-4 group-hover:text-[#c0392b]">
            {packageName}
          </h3>
          <div className="relative overflow-visible">
            <div className="text-white font-bold text-lg py-3 bg-[#808080] group-hover:opacity-0">
              {price}
            </div>
            <div className="absolute z-10 inset-0 bg-[#d44646] text-white text-center -mx-[10px] py-3 text-lg font-bold opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {price}
              <div className="absolute bottom-[-10px] left-0 w-0 h-0 border-t-[10px] border-t-[#000] border-l-[10px] border-l-transparent"></div>
              <div className="absolute bottom-[-10px] right-0 w-0 h-0 border-t-[10px] border-t-[#000] border-r-[10px] border-r-transparent"></div>
            </div>
          </div>
        </div>
        <div className="px-6 pb-6">
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 border-t py-3 border-[#f5f5f5] hover:text-[#c0392b] cursor-pointer"
                title={feature.description}
              >
                {feature.title}
              </li>
            ))}
          </ul>
          <button className="w-full lg:bg-white bg-[#c0392b] group-hover:bg-[#c0392b] cursor-pointer !text-white lg:!text-[#808080]  group-hover:!text-white group-hover:border-white font-light border-[#808080] lg:border py-2 rounded-full">
            XEM CHI TIẾT
          </button>
        </div>
      </div>
    </div>
  );
}
