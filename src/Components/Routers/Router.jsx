import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import ProductDetails from "../../Pages/Products/ProductDetails";
import LoginLayout from "../../Layouts/LoginLayout";
import Login from "../Login&Register/Login";
import Register from "../Login&Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader:()=>(fetch("http://localhost:5000/coffeesDataCount"))
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/coffee/${params.id}`);
        },
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path:"*",
    element:<ErrorPage/>
  }
]);

export default router;
