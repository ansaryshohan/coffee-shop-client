import coffee1 from "../../../../public/images/cups/Rectangle 9.png";
import coffee2 from "../../../../public/images/cups/Rectangle 10.png";
import coffee3 from "../../../../public/images/cups/Rectangle 11.png";
import coffee4 from "../../../../public/images/cups/Rectangle 12.png";
import coffee5 from "../../../../public/images/cups/Rectangle 13.png";
import coffee6 from "../../../../public/images/cups/Rectangle 14.png";
import coffee7 from "../../../../public/images/cups/Rectangle 15.png";
import coffee8 from "../../../../public/images/cups/Rectangle 16.png";

const FollowUs = () => {
  const CoffeImages = [
    coffee1,
    coffee2,
    coffee3,
    coffee4,
    coffee5,
    coffee6,
    coffee7,
    coffee8,
  ];
  return (
    <div className="w-10/12 mx-auto text-center flex flex-col gap-3 mt-16 mb-16">
      <h5 className="text-sm">Follow Us Now</h5>
      <h3 className="text-2xl font-bold text-[#331A15] mb-6">Follow on Instagram</h3>
      <div className="grid grid-cols-4 justify-items-center gap-4 w-10/12 mx-auto ">
        {CoffeImages.map((coffe, idx) => (
          <img key={idx} src={coffe} alt="" />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
