import React from "react";
import NewsSection from "../../../components/user/news/NewsSection";
import SidebarNav from "../../../components/common/SidebarNav";

const serviceItems = [
  { label: "Album", href: "/album" },
  { label: "Dịch vụ", href: "/dich-vu", hasDropdown: true },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
];

const galleryItems = [
  { label: "Album", href: "/album" },
  { label: "Dịch vụ", href: "/dich-vu", hasDropdown: true },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
];

const Services: React.FC = () => {
  return (
    <div className="container w-screen">
      <div className="flex flex-col lg:flex-row gap-8 mt-8 bg-white px-[10%] py-[2%]">
        <div className="lg:w-1/4">
          <SidebarNav title="DỊCH VỤ" items={serviceItems} />
          <SidebarNav title="THƯ VIỆN" items={galleryItems} />
        </div>

        <div className="lg:w-3/4">
          <NewsSection />
        </div>
      </div>
    </div>
  );
};

export default Services;
