import { X } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../../../data/Service";

interface MobileMenuProps {
  services: Service[];
  onClose: () => void;
  handlePricingClick: () => void;
  handleContactClick: () => void;
}

export default function MobileMenu({
  services,
  onClose,
  handlePricingClick,
  handleContactClick,
}: MobileMenuProps) {
  return (
    // Menu nằm dưới header, trải ngang, không che header
    <div className="absolute left-0 top-full w-full bg-white shadow-md border-b z-[60] animate-fade-in-down text-left">
      <div className="flex justify-end px-4 pt-4">
        <button onClick={onClose} aria-label="Đóng menu">
          <X size={28} />
        </button>
      </div>
      <nav className="flex flex-col gap-2 px-6 py-4 text-base">
        <Link to="/album" className="py-2" onClick={onClose}>
          ALBUM
        </Link>
        <details>
          <summary className="py-2 cursor-pointer">DỊCH VỤ</summary>
          <ul className="pl-4">
            {services.map((service) => (
              <li key={service._id}>
                <Link
                  to={`/services/${service._id}`}
                  className="block py-1"
                  onClick={onClose}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <button
          className="text-left py-2"
          onClick={() => {
            handlePricingClick();
            onClose();
          }}
        >
          BẢNG GIÁ
        </button>
        <Link to="/about" className="py-2" onClick={onClose}>
          GIỚI THIỆU
        </Link>
        <button
          className="text-left py-2"
          onClick={() => {
            handleContactClick();
            onClose();
          }}
        >
          LIÊN HỆ
        </button>
      </nav>
    </div>
  );
}
