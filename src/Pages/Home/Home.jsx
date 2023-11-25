import Branding from "./Branding/Branding";
import Coffees from "./Coffees/Coffees";
import ContactUs from "./ContactUs/ContactUs";
import FollowUs from "./FollowUs/FollowUs";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Branding></Branding>
      <Coffees></Coffees>
      <FollowUs></FollowUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;