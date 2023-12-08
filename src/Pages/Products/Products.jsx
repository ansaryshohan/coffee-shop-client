import { useEffect, useState } from "react";
import SingleCoffee from "../Home/Coffees/SingleCoffe";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const [coffees, setCoffees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPageData, setPerPageData] = useState(5);
  const { count } = useLoaderData();

  const totalPage = Math.ceil(count / perPageData);

  useEffect(() => {
    fetch(
      `http://localhost:5000/coffees?page=${currentPage}&limit=${perPageData}`
    )
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, [currentPage, perPageData]);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold pt-16 pb-8 uppercase text-primaryTextColor">
        All Available Product
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-y-8 py-8 px-5">
        {coffees?.map((coffee) => (
          <SingleCoffee key={coffee._id} coffee={coffee}></SingleCoffee>
        ))}
      </div>

      {/* pagination */}
      <div className="text-center mt-10">
        {[...Array(totalPage).keys()].map((number) => (
          <button
            key={number}
            className={`bg-cardBgColor text-lg font-bold px-5 py-2 mr-4 hover:bg-buttonColor ${
              currentPage === number
                ? "bg-primaryTextColor text-cardBgColor"
                : ""
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number+1}
          </button>
        ))}
        <select
          value={perPageData}
          onChange={(e) => setPerPageData(parseInt(e.target.value))}
          className="bg-buttonColor text-lg font-bold px-1 py-2"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
};

export default Products;
