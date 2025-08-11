import React from "react";
import Banner from "../../../components/user/banner/Banner";
import MainServices from "../../../components/user/service/MainService";
import MainAlbum from "../../../components/user/album/MainAlbum";
import VideoGraphic from "../../../components/user/video_graphic/VideoGraphic";
import AboutStudio from "../../../components/user/about/AboutStudio";
import PricingTable from "../../../components/user/pricing/PricingTable";

const Home: React.FC = () => {
  return (
    <div className="container ">
      <Banner></Banner>
      <MainServices></MainServices>
      <MainAlbum></MainAlbum>
      <VideoGraphic></VideoGraphic>
      <PricingTable></PricingTable>
      <AboutStudio></AboutStudio>
    </div>
  );
};

export default Home;
