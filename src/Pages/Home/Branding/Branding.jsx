import icon1 from "../../../../public/images/icons/1.png";
import icon2 from "../../../../public/images/icons/2.png";
import icon3 from "../../../../public/images/icons/3.png";
import icon4 from "../../../../public/images/icons/4.png";
import SingleBranding from "./SingleBranding";

const Branding = () => {
  const data = [
    {
      image: icon1,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },

    {
      image: icon2,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },

    {
      image: icon3,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },

    {
      image: icon4,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
  ];
  return (
    <div className="bg-[#ECEAE3] py-10">
      <div className="grid grid-cols-2 gap-8 content-center md:grid-cols-4 w-9/12 mx-auto">
        {data.map((logoData, idx) => (
          <SingleBranding key={idx} logoData={logoData}></SingleBranding>
        ))}
      </div>
    </div>
  );
};

export default Branding;
