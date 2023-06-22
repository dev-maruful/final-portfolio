import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
    ],
  },
]);

export default router;
