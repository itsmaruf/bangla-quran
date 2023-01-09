import React from "react";
import { useLoaderData } from "react-router-dom";
// import SearchSurah from "../../components/SearchSurah/SearchSurah";
import SurahCard from "../../components/SurahCard/SurahCard";

const AllSurah = () => {
  const surah = useLoaderData();
  console.log(surah.length, surah);
  return (
    <div className="py-16 lg:w-1/3 w-full lg:px-0 px-4 mx-auto">
      {/* <SearchSurah /> */}
      {surah.map((sura) => (
        <SurahCard key={sura.id} sura={sura} />
      ))}
    </div>
  );
};

export default AllSurah;
