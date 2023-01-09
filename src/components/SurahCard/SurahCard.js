import React from "react";
import { Link } from "react-router-dom";
import bismillah from "../../assets/img/bismillah.webp";
import { FaLongArrowAltRight } from "react-icons/fa";

const SurahCard = ({ sura }) => {
  return (
    <div className="card bg-gray-600 my-4 flex items-center flex-row justify-between overflow-hidden">
      <img src={bismillah} className="w-96" alt="" />
      <div className="card-body">
        <h2 className="text-2xl text-white">{sura.name}</h2>
      </div>
      <Link to={`sura-details/${sura.id}`}>
        <FaLongArrowAltRight className="text-3xl mr-8" />
      </Link>
    </div>
  );
};

export default SurahCard;
