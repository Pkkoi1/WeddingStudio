import { ChevronRight } from "lucide-react";
import type React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="container mx-auto px-[10%] py-4 mt-[3%] bg-[#f5f5f5] ">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            )}
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default Breadcrumb;
