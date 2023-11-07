import { Helmet } from "react-helmet-async";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard/ServiceCard";
import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import slider4 from "../../assets/slider-4.jpg";
import Marquee from "react-fast-marquee";
import { FaAward, FaRegLightbulb } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const services = useLoaderData().data;
  return (
    <>
      <Helmet>
        <title>GoTravel | Home</title>
      </Helmet>
      {/* banner slider */}
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={banner1} className="w-full h-72 lg:h-96" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={banner2} className="w-full h-72 lg:h-96" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={banner3} className="w-full h-72 lg:h-96" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
      {/* slider */}
      <div className="text-center my-10">
        <h3 className="text-2xl md:text-3xl text-pink-500 font-bold">
          SPOTLIGHT DESTINATIONS
        </h3>
        <div className="w-1/2 md:w-1/4 mx-auto">
          <hr />
        </div>
        <br />
        <p>
          Looking for your next great adventure? We can help. Here is a sampling
          of our most <br /> popular destinations. Experience private tours with
          authentic local flavour.
        </p>
        <br />
        <Marquee>
          <div className="flex gap-3 w-16 md:w-40 lg:w-64">
            <img src={slider1} alt="" />
            <img src={slider2} alt="" />
            <img src={slider3} alt="" />
            <img src={slider4} alt="" />
          </div>
        </Marquee>
      </div>
      <hr className="hidden md:flex" />
      {/* Services card */}
      <div className="my-10">
        <h3 className="text-2xl md:text-3xl text-pink-500 font-bold text-center">
          POPULAR SERVICES
        </h3>
        <div className="w-1/2 md:w-1/4 mx-auto">
          <hr />
        </div>
        <div className="grid grid-cols-1 gap-6 p-6">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services" className="btn btn-sm btn-outline">
            Show All Services
          </Link>
        </div>
      </div>
      <hr className="hidden md:flex" />
      <div className="text-center my-10">
        <h3 className="text-2xl md:text-3xl text-pink-500 font-bold">
          FROM THE BLOG
        </h3>
        <div className="w-1/2 md:w-1/4 mx-auto">
          <hr />
        </div>
        <br />
        <p>
          On our blog you’ll get a chance to learn a bit more about the people
          and ideas behind <br /> ToursByLocals. More importantly, you’ll get a
          chance to meet the local guides, as they <br /> pop in frequently to
          offer travel tips for their cities and towns. Want to know the Top{" "}
          <br /> 5 things to do in Kyoto, according to a local? Or where to eat
          in Rome? The real people <br /> in the know are here to provide you
          with up-to-the-minute suggestions.
        </p>
      </div>
      <hr className="hidden md:flex" />
      <div className="w-3/4 mx-auto grid grid-cols-1 gap-5 shadow-2xl rounded-lg md:grid-cols-4 my-10 py-5">
        <div>
          <FaAward className="w-1/2 mx-auto text-5xl text-pink-500"></FaAward>
          <p className="text-center font-semibold">HAND PICK GUIDES</p>
        </div>
        <div>
          <MdSupportAgent className="w-1/2 mx-auto text-5xl text-pink-500"></MdSupportAgent>
          <p className="text-center font-semibold">24/7 CUSTOMER SUPPORT</p>
        </div>
        <div>
          <FaRegLightbulb className="w-1/2 mx-auto text-5xl text-pink-500"></FaRegLightbulb>
          <p className="text-center font-semibold">
            EVERY TOUR PRIVATE AND CUSTOMIZABLE
          </p>
        </div>
        <div>
          <AiFillLike className="w-1/2 mx-auto text-5xl text-pink-500"></AiFillLike>
          <p className="text-center font-semibold">FLEXIBLE CANCELLATION</p>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Home;
