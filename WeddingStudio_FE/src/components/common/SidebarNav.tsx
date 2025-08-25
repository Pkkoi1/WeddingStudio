"use client";

import { useEffect, useState } from "react";
import { fetchServices } from "../../utils/Service";
import type { Service } from "../../data/Service";
import { Link } from "react-router-dom";

interface SidebarNavProps {
  title: string;
}

export default function SidebarNav({ title }: SidebarNavProps) {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    if (title === "DỊCH VỤ") {
      const loadServices = async () => {
        try {
          const response = await fetchServices();
          setServices(response.services);
        } catch (error) {
          setServices([]);
          console.error("Error fetching services:", error);
        }
      };
      loadServices();
    }
  }, [title]);

  if (title === "DỊCH VỤ") {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 text-left">
        <div className="bg-[#d44646] text-white px-4 py-3 font-semibold">
          {title}
        </div>
        <div className="py-2">
          <div className="bg-gray-50 px-8 py-2 rounded">
            {services.length > 0 ? (
              services.map((service) => (
                <Link
                  key={service._id}
                  to={`/services/${service._id}`}
                  className="block py-2 text-sm text-gray-600 hover:text-[#d44646] cursor-pointer"
                >
                  {service.title}
                </Link>
              ))
            ) : (
              <div className="py-2 text-sm text-gray-400">Không có dịch vụ</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
