import React, { useEffect, useState } from "react";
import NewsSection from "../../../components/user/news/NewsSection";
import SidebarNav from "../../../components/common/SidebarNav";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { useParams } from "react-router-dom";
import { fetchServiceById } from "../../../utils/Service";
import type { Service } from "../../../data/Service";

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
  const { id } = useParams<{ id?: string }>();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const serviceData = await fetchServiceById(id);
          setService(serviceData);
        } catch (error) {
          setService(null);
          console.error("Error fetching service by ID:", error);
        }
      } else {
        setService(null);
      }
    };
    fetchData();
  }, [id]);

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Dịch vụ", href: "/services" },
    ...(service ? [{ label: service.title }] : []),
  ];

  return (
    <div className="container w-screen">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col lg:flex-row gap-8 bg-white px-[10%] py-[2%]">
        <div className="lg:w-1/4">
          <SidebarNav title="DỊCH VỤ" items={serviceItems} />
          <SidebarNav title="THƯ VIỆN" items={galleryItems} />
        </div>
        <div className="lg:w-3/4">
          <NewsSection service={service} />
        </div>
      </div>
    </div>
  );
};

export default Services;
