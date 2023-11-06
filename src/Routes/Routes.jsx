import { createBrowserRouter } from "react-router-dom";
import Shared from "../Pages/Shared/Shared";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shared></Shared>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
