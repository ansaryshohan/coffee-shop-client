import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";

const SingleCoffe = ({ coffee }) => {
  // console.log(coffee)

  return (
    <div className="bg-cardBgColor flex justify-around items-center pl-4 pr-8 py-5 rounded-lg shadow-lg w-11/12">
      <div className="grow-0">
        <img
          src={coffee.image}
          alt="coffee cup image"
          className="w-2/3 h-2/3 pl-5 drop-shadow-md"
        />
      </div>
      <div className=" text-xl grow-1">
        <h3 className="text-xl md:text-2xl font-semibold">
          Name: {coffee.coffeeName}
        </h3>
        <h3>Chef: {coffee.chefName}</h3>
        <h3>
          Price: {coffee.price ? coffee.price + " taka" : "not available"}
        </h3>
      </div>
      <div className="grow-0 flex flex-col gap-y-2 cursor-pointer">
        <AiFillEye size={25} color="#331A15" />
        <AiFillEdit size={25} color="#E3B577" />
        <AiFillDelete size={25} color="red" />
      </div>
    </div>
  );
};

export default SingleCoffe;
