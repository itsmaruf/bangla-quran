import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import { router } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </div>
  );
}

export default App;
