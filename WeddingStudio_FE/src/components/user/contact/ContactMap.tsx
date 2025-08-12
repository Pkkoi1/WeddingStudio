"use client";

import { MapPin, Phone, Mail } from "lucide-react";

const ContactMap: React.FC = () => {
  return (
    <section className="relative h-[500px] w-full bg-white">
      {/* Map Container */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904274586084!2d105.81330277503172!3d21.036515880614814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2bddedd8ff%3A0xde7c4fb8e272fabc!2zQ8O0bmcgdHkgQVZBIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1754968656277!5m2!1svi!2s"
          width="100%"
          height="70%"
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Overlay */}
      <div className="absolute top-50 left-0 right-0 h-[50%] mx-[10%] rounded-lg">
        <div
          className="relative h-full w-full bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url('public/hoa-hong-trang.jpg')`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 rounded-lg" />

          {/* Contact Information */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-white">
              {/* Address */}
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-8 w-8 mb-2 text-white" />
                <p className="text-sm md:text-base font-medium">
                  Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center">
                <Phone className="h-8 w-8 mb-2 text-white" />
                <p className="text-sm md:text-base font-medium">1900 6750</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <Mail className="h-8 w-8 mb-2 text-white" />
                <p className="text-sm md:text-base font-medium">
                  support@sapo.vn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
