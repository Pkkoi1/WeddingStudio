import * as React from "react";

interface ServiceItemProps {
  icon: string; // Changed to string for image source
  title: string;
  slogan: string;
  className?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  slogan,
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center p-6 bg-white cursor-pointer hover:shadow-lg transition-shadow duration-300 ${
        className || ""
      }`}
    >
      <div className="mb-4">
        <img src={icon} alt={title} className="h-11" /> {/* Changed to img */}
      </div>
      <h3 className="text-xl font-sans text-[#848484] mb-2">{title}</h3>
      <p className="text-[#848484] leading-relaxed font-sans">{slogan}</p>
    </div>
  );
};
export default ServiceItem;
