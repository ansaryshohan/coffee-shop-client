import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import AddProduct from "../../Pages/AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/add-product",
        element: <AddProduct/>,
      },
    ],
  },
]);

export default router;
