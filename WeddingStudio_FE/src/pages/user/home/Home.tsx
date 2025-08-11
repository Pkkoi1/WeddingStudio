import React from "react";
import Banner from "../../../components/user/banner/Banner";
import MainServices from "../../../components/user/service/MainService";
import MainAlbum from "../../../components/user/album/MainAlbum";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 ">
      <Banner></Banner>
      <MainServices></MainServices>
      <MainAlbum></MainAlbum>
    </div>
  );
};

export default Home;
