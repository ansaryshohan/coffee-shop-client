import { Link } from "react-router-dom";
import logo from "../../../public/images/more/logo1.png";
import ActiveLink from "../../Components/ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="w-full bg-headerBg bg-center bg-cover bg-no-repeat">
      <div className="flex justify-between items-center gap-5  container mx-auto">
        <div className="flex justify-center items-center gap-5">
          <div className="w-[70px] h-[70px]">
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <div>
            <h1 className="text-[#FFFFFF] font-semibold text-xl uppercase">
              Espresso Emporium
            </h1>
          </div>
        </div>
        <div className="flex gap-10 text-[#FFFFFF] font-semibold text-lg uppercase">
          <ActiveLink to="/home">home</ActiveLink>
          <ActiveLink to="/products">Products</ActiveLink>
          <ActiveLink to="/contact">Contact Us</ActiveLink>
          <ActiveLink to="/add-product">Add Product</ActiveLink>
        </div>
        <div>
          {
            <button className="bg-buttonColor text-primaryTextColor px-2 py-2 rounded-lg text-lg uppercase font-bold hover:text-cardBgColor">
              <Link to="/login/login">Login</Link>
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
