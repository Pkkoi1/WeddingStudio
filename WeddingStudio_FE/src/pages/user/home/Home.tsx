import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../../components/user/banner/Banner";
import MainServices from "../../../components/user/service/MainService";
import MainAlbum from "../../../components/user/album/MainAlbum";
import VideoGraphic from "../../../components/user/video_graphic/VideoGraphic";
import AboutStudio from "../../../components/user/about/AboutStudio";
import PricingTable from "../../../components/user/pricing/PricingTable";
import ContactMap from "../../../components/user/contact/ContactMap";

const Home: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.hash === "#pricing") {
      setTimeout(() => {
        scrollToPricing();
      }, 200); // Add a slight delay
    } else if (location.hash === "#contact") {
      setTimeout(() => {
        scrollToContact();
      }, 200); // Add a slight delay
    }
  }, [location]);

  useEffect(() => {
    window.scrollToPricing = scrollToPricing;
    window.scrollToContact = scrollToContact;
    return () => {
      delete window.scrollToPricing;
      delete window.scrollToContact;
    };
  }, []);

  return (
    <div className="container ">
      <Banner></Banner>
      <MainServices></MainServices>
      <MainAlbum></MainAlbum>
      <VideoGraphic></VideoGraphic>
      <div ref={pricingRef}>
        <PricingTable></PricingTable>
      </div>
      <AboutStudio></AboutStudio>
      <div ref={contactRef}>
        <ContactMap></ContactMap>
      </div>
    </div>
  );
};

export default Home;
