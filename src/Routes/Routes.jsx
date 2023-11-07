import { createBrowserRouter } from "react-router-dom";
import Shared from "../Pages/Shared/Shared";
import Home from "../Pages/Home/Home";
import axiosInstance from "../AxiosInstance/instance";

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
    ],
  },
]);

export default router;
