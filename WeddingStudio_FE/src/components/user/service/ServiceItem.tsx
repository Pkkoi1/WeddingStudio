import * as React from "react";

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceItem({
  icon: Icon,
  title,
  description,
  className,
}: ServiceItemProps) {
  return (
    <div
      className={`flex flex-col items-center text-center p-6 bg-white cursor-pointer hover:shadow-lg transition-shadow duration-300 ${
        className || ""
      }`}
    >
      <div className="mb-4">
        <Icon className="h-16 w-16 text-[#e74c3c]" />
      </div>
      <h3 className="text-xl font-sans text-[#848484] mb-2">{title}</h3>
      <p className="text-[#848484] leading-relaxed font-sans">{description}</p>
    </div>
  );
}
