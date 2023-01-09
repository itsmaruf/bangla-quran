import { createBrowserRouter } from "react-router-dom";
import AllSurah from "../containers/AllSurah/AllSurah";
import Home from "../containers/Home/Home";
import SuraDetails from "../containers/SuraDetails/SuraDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all-surah",
    element: <AllSurah />,
    loader: () =>
      fetch("https://alquranbd.com/api/tafheem/sura").then((response) =>
        response.json()
      ),
  },
  {
    path: "/surah/:id",
    element: <SuraDetails />,
  },
  {
    path: "*",
    element: "Undefined",
  },
]);
