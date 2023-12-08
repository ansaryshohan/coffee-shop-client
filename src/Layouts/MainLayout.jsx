import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  return (
    <>
      <Header></Header>
      {navigation.state === "loading" ? <LoadingSpinner /> : ""}
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
