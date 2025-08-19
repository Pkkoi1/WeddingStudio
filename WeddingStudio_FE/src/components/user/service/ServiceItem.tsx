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
      className={`flex flex-col shadow-[0_4px_24px_0_rgba(0,0,0,0.08),0_1.5px_4px_0_rgba(0,0,0,0.04)] lg:shadow-none items-center text-center p-5 my-2 bg-white cursor-pointer transition-shadow duration-300 max-w-[320px] lg:h-[200px] h-[300px] w-full mx-auto hover:shadow-[0_4px_24px_0_rgba(0,0,0,0.08),0_1.5px_4px_0_rgba(0,0,0,0.04)] ${
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
