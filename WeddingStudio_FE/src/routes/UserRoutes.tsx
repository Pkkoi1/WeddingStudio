import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/home/Home";
import Album from "../pages/user/album/Album";
import AlbumListByCover from "../pages/user/album/AlbumListByCover";
import Services from "../pages/user/services/Services";
import ServiceDetail from "../pages/user/services/ServiceDetail";
import Pricing from "../pages/user/pricing/Pricing";
import About from "../pages/user/about/About";
import Contact from "../pages/user/contact/Contact";

declare global {
  interface Window {
    scrollToPricing?: () => void;
    scrollToContact?: () => void;
  }
}

const UserRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="album" element={<Album />} />
        <Route path="album/cover/:coverId" element={<AlbumListByCover />} />
        <Route path="services/:id?" element={<Services />} />
        <Route path="services/detail/:newsId" element={<ServiceDetail />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
