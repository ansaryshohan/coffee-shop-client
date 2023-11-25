import logo from "../../../../public/images/more/logo1.png";
import {
  AiFillEnvironment,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiFillTwitterCircle,
} from "react-icons/ai";

const ContactUs = () => {
  return (
    <div className="w-full bg-contactBgColor pt-20">
      <div className="w-5/6 mx-auto">
        <img src={logo} alt="" className="w-[70px] h-[70px]" />
        <div className="w-full flex justify-between">
          {/* Left side part of the section */}
          <div className="flex flex-col gap-4 w-2/5">
            <h3 className="text-2xl text-primaryTextColor font-semibold">
              Espresso Emporium
            </h3>
            <p className="text-sm w-3/5 text-secondaryTextColor font-medium">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-4 text-primaryTextColor">
              <AiFillFacebook size={30} />
              <AiFillTwitterCircle size={30} />
              <AiFillInstagram size={30} />
              <AiFillLinkedin size={30} />
            </div>
            <h3 className="text-primaryTextColor text-xl font-semibold">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4 pb-4">
              <div className="flex gap-4">
                <AiFillPhone size={20} />
                <h4 className="text-sm text-secondaryTextColor">
                  +88 01533 333 333
                </h4>
              </div>
              <div className="flex gap-4">
                <AiFillMail size={20} />
                <h4 className="text-sm text-secondaryTextColor">
                  info@gmail.com
                </h4>
              </div>
              <div className="flex gap-4">
                <AiFillEnvironment size={20} />
                <h4 className="text-sm text-secondaryTextColor">
                  72, Wall street, King Road, Dhaka
                </h4>
              </div>
            </div>
          </div>
          {/* Right side Part of the section Contact form */}
          <div className="flex-grow w-3/5">
            <h3 className="text-xl text-primaryTextColor font-semibold">
              Connect with Us
            </h3>
            {/* Contact form is here for message */}
            <form>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="p-1 m-2 rounded-md w-4/5"
              />
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="info@gmail.com"
                className="p-1 m-2 rounded-md w-4/5"
              />
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="p-1 m-2 rounded-md w-4/5"
              ></textarea>
              <br />
              <button
                type="submit"
                className="text-primaryTextColor text-sm font-semibold border border-primaryTextColor rounded-full px-4 py-2 mt-5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
