import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Dealers from "./pages/Dealers";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "dealers", Component: Dealers },
      { path: "blogs", Component: Blogs },
      { path: "blogs/:id", Component: BlogPost },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
     ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
