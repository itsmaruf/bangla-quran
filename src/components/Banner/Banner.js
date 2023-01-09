import React from "react";
import bannerImg from "../../assets/img/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={bannerImg}
        className="w-full h-screen object-cover object-center bannerImg relative"
        alt=""
      />
      <div className="overlay">
        <h1 className="bangla3d text-center">
          পড়ো তোমার প্রভুর নামে, <br /> যিনি সৃষ্টি করেছেন
        </h1>
        <p className="text-white text-2xl mt-4 mb-0">—আল-আলাক্ব - ১</p>
      </div>
    </div>
  );
};

export default Banner;
