"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SidebarNavProps {
  title: string;
  items: Array<{
    label: string;
    href: string;
    hasDropdown?: boolean;
  }>;
}

export default function SidebarNav({ title, items }: SidebarNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
      <div className="bg-[#d44646] text-white px-4 py-3 font-semibold">
        {title}
      </div>
      <div className="py-2">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div
              className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() =>
                item.hasDropdown &&
                setOpenDropdown(openDropdown === item.label ? null : item.label)
              }
            >
              <span className="flex items-center">
                <span className="mr-2">›</span>
                {item.label}
              </span>
              {item.hasDropdown && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
            {item.hasDropdown && openDropdown === item.label && (
              <div className="bg-gray-50 px-8 py-2">
                <div className="py-2 text-sm text-gray-600 hover:text-[#d44646] cursor-pointer">
                  Chụp ảnh cưới
                </div>
                <div className="py-2 text-sm text-gray-600 hover:text-[#d44646] cursor-pointer">
                  Váy cưới cao cấp
                </div>
                <div className="py-2 text-sm text-gray-600 hover:text-[#d44646] cursor-pointer">
                  Thiệp cưới đẹp
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
