import { useEffect, useState } from "react";
import SingleCoffe from "./SingleCoffe";
import { AiOutlineCoffee } from "react-icons/ai";

const Coffees = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => {
        const sixData = data.slice(0, 6);
        setCoffees(sixData);
      });
  }, []);

  // console.log(coffees);
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-4 mb-12 text-center">
        <h4 className="text-lg">--- Sip & Savor ---</h4>
        <h3 className="text-4xl font-bold text-primaryTextColor my-2">
          Our Popular Products
        </h3>
        <div className="flex justify-center items-center gap-2 bg-buttonColor w-40 text-center px-2 py-4 text-xl font-semibold text-cardBgColor rounded-lg cursor-pointer shadow-md border-r-primaryTextColor/60">
          <button>Add Coffee </button>
          <AiOutlineCoffee size={20} className="text-primaryTextColor" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-y-8 py-8 px-5">
        {coffees?.map((coffee) => (
          <SingleCoffe key={coffee._id} coffee={coffee}></SingleCoffe>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
