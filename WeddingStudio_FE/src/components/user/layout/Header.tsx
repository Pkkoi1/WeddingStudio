import { Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../../public/logo.webp";

export default function Header() {
  const handlePricingClick = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/#pricing"; // Reloads the page with the hash
    } else {
      window.scrollToPricing?.();
    }
  };

  const handleContactClick = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/#contact"; // Reloads the page with the hash
    } else {
      window.scrollToContact?.();
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 px-[10%]">
      {/* Main Navigation */}
      <nav className="container mx-auto  py-4 flex justify-between items-center">
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <Link to="/album" className="hover:text-gray-900">
              ALBUM
            </Link>
          </li>
          <li>
            <span className="mx-1">/</span>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-900">
              DỊCH VỤ <span className="text-xs">▼</span>
            </Link>
          </li>
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
