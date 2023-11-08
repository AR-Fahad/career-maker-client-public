import { createBrowserRouter } from "react-router-dom";
import Shared from "../Pages/Shared/Shared";
import Home from "../Pages/Home/Home";
import axiosInstance from "../AxiosInstance/instance";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllServices from "../Pages/AllServices/AllServices";
import AddService from "../Pages/AddService/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shared></Shared>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => axiosInstance.get("/services"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => axiosInstance.get("/services"),
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default router;
