import { createBrowserRouter } from "react-router-dom";
import AllSurah from "../containers/AllSurah/AllSurah";
import Home from "../containers/Home/Home";

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
    path: "*",
    element: "Undefined",
  },
]);
