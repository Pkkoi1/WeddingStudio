import { Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../../public/logo.webp";
import { useState, useEffect } from "react";
import { fetchServices } from "../../../utils/Service";
import type { Service } from "../../../data/Service";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetchServices();
        setServices(response.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    loadServices();
  }, []);

  const handlePricingClick = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/#pricing";
    } else {
      window.scrollToPricing?.();
    }
  };

  const handleContactClick = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/#contact";
    } else {
      window.scrollToContact?.();
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 px-[10%]">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        {/* Left menu */}
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <Link to="/album" className="hover:text-gray-900">
              ALBUM
            </Link>
          </li>
          <li>
            <span className="mx-1">/</span>
          </li>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="#" className="hover:text-gray-900 flex items-center">
              DỊCH VỤ <span className="text-xs ml-1">▼</span>
            </Link>

            {isDropdownOpen && (
              <div className="absolute left-0 top-full w-48 bg-white border border-gray-200 rounded-sm shadow-lg z-50 text-left">
                {/* buffer để tránh mất hover */}
                <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                <ul className="py-2">
                  {services.map((service) => (
                    <li key={service._id}>
                      <Link
                        to={`/services/${service._id}`}
                        className=" block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#d44646]"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <li>
            <span className="mx-1">/</span>
          </li>
          <li>
            <Link
              to="#"
              onClick={handlePricingClick}
              className="hover:text-gray-900"
            >
              BẢNG GIÁ
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="Wedding Studio Logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Right menu */}
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <Link to="/about" className="hover:text-gray-900">
              GIỚI THIỆU
            </Link>
          </li>
          <li>
            <span className="mx-1">/</span>
          </li>
          <li>
            <Link
              to="#"
              onClick={handleContactClick}
              className="hover:text-gray-900"
            >
              LIÊN HỆ
            </Link>
          </li>
          <li className="flex space-x-2 ml-4">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} className="text-blue-600" />
            </a>
            <a href="#" aria-label="Youtube">
              <Youtube size={20} className="text-red-600" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
