import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-1/2 mx-auto bg-formBgColor py-6">
      <h1 className="text-4xl text-primaryTextColor font-bold text-center uppercase mb-8">
        register
      </h1>

      <div>
        <form>
          <div className="flex flex-col items-center gap-4 mb-2">
            <label
              htmlFor="name"
              className="text-start w-9/12 text-2xl font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="block w-9/12 p-3 outline-primaryTextColor text-xl mb-3"
            />
          </div>
          <div className="flex flex-col items-center gap-4 mb-2">
            <label
              htmlFor="email"
              className="text-start w-9/12 text-2xl font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="block w-9/12 p-3 outline-primaryTextColor text-xl mb-3"
            />
          </div>
          <div className="flex flex-col items-center gap-4 mb-2">
            <label
              htmlFor="password"
              className="text-start w-9/12 text-2xl font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="block w-9/12 p-3 outline-primaryTextColor text-xl mb-3"
            />
          </div>
          <div className="flex flex-col items-center gap-4 mb-2">
            <label
              htmlFor="confirm-password"
              className="text-start w-9/12 text-2xl font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="Confirm Password"
              className="block w-9/12 p-3 outline-primaryTextColor text-xl mb-3"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-buttonColor p-3 rounded-lg text-2xl font-semibold text-cardBgColor hover:text-primaryTextColor"
            >
              {" "}
              Register
            </button>
          </div>
        </form>
        <p className="text-base w-9/12 mx-auto my-4">
          Already have an account?please{" "}
          <Link to="/login/login" className="text-buttonColor">
            Login
          </Link>
        </p>
      </div>
      <div>
        <h3 className="text-center text-xl font-light mt-6 mb-2">Or Register with</h3>
        {/* divider */}
        <div className="w-1/3 bg-buttonColor h-[2px] mx-auto mb-6"></div>
        {/* Social icons  */}
        <div className="flex justify-center gap-6 w-2/3 mx-auto">
          <div className="w-16 h-16 flex justify-center items-center text-buttonColor cursor-pointer hover:text-buttonColor/60">
            <AiFillGithub size={50} />
          </div>
          <div className="w-16 h-16 flex justify-center items-center text-buttonColor cursor-pointer hover:text-buttonColor/60">
            <AiFillInstagram size={50} />
          </div>
          <div className="w-16 h-16 flex justify-center items-center text-buttonColor cursor-pointer hover:text-buttonColor/60">
            <AiFillFacebook size={50} />
          </div>
          <div className="w-16 h-16 flex justify-center items-center text-buttonColor cursor-pointer hover:text-buttonColor/60">
            <AiFillTwitterCircle size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
