import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <div
        className="fixed bottom-8 right-8 z-20 bg-[#e74c3c] text-white p-3 rounded-full shadow-lg hover:bg-[#c0392b] transition-colors duration-300 cursor-pointer"
        onClick={scrollToTop}
      >
        <Heart className="h-6 w-6 fill-current" />
      </div>
    )
  );
}
