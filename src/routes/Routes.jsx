import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

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
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
