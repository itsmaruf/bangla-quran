/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

const SuraDetails = () => {
  const [sura, setSura] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const suraNumber = window.location.href.split("/")[4];

  console.log(suraNumber);

  useEffect(() => {
    fetch(`https://alquranbd.com/api/tafheem/suraData/${suraNumber}/${page}`)
      .then((response) => response.json())
      .then((data) => setSura(data));
  }, [page, suraNumber]);

  console.log(sura);
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>
          {sura.map((data, index) => {
            <h2 key={index}>{data.ayah_text}</h2>;
          })}
        </div>
      )}
    </>
  );
};

export default SuraDetails;
