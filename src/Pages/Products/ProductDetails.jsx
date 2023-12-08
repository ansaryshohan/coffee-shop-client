import {  useLoaderData, useLocation, useNavigate} from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const ProductDetails = () => {
  const location= useLocation();
  const navigate = useNavigate();
  const from = location.state.from.pathname|| "/";

  const {
    image,
    coffeeName,
    chefName,
    supplierName,
    taste,
    category,
    detail,
    price,
  } = useLoaderData();

  const handleModalClose=()=>{
    navigate(from);
  }

  return (
    <div className="w-full h-[85vh] bg-slate-200/30 flex justify-center items-center relative">
      <div className="bg-cardBgColor flex justify-around items-center pl-4 pr-8 py-5 rounded-lg shadow-lg w-1/2 mx-auto h-[60vh] mt-10 relative">
        <div
          className="absolute right-16 top-10"
          onClick={handleModalClose}
        >
          <RxCross1 size={30} />
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src={image}
            alt="coffee cup image"
            className="w-3/6 h-3/5 pl-5 drop-shadow-md"
          />
        </div>
        <div className=" text-xl flex-1">
          <h3 className="text-xl md:text-2xl font-semibold">
            Name: {coffeeName}
          </h3>
          <h3>Chef: {chefName}</h3>
          <h3>Price: {price ? price + " taka" : "not available"}</h3>
          <h3>Supplier Name: {supplierName}</h3>
          <h3>Taste: {taste}</h3>
          <h3>Category: {category}</h3>
          <h3>
            details: <span>{detail}</span>
          </h3>
          <button className="text-xl font-bold bg-buttonColor text-primaryTextColor px-3 py-2 rounded-xl mt-4 hover:text-formBgColor uppercase">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
