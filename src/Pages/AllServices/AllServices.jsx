import { Helmet } from "react-helmet-async";
import search from "../../assets/search.jpg";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import SingleService from "./SngleService/SingleService";
import axiosInstance from "../../AxiosInstance/instance";
const AllServices = () => {
  const loadedServices = useLoaderData().data;
  const [hide, setHide] = useState(false);
  const [services, setServices] = useState(loadedServices.slice(0, 6));
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    if (search.toLowerCase() === "all") {
      setServices(loadedServices);
      setHide(true);
      e.target.reset();
      return;
    }

    if (search === "") {
      setServices(loadedServices.slice(0, 6));
      setHide(false);
      return;
    }

    axiosInstance.get(`/services?search=${search}`).then((res) => {
      setServices(res.data);
      setHide(true);
      e.target.reset();
    });
  };
  return (
    <>
      <Helmet>
        <title>GoTravel | Services</title>
      </Helmet>
      <div className="relative">
        <img src={search} className="w-full h-96" alt="" />
        <div className="absolute w-full bg-gradient-to-r h-96 from-[#151515] to-[#00000000] top-0"></div>
        <div className="form-control absolute top-[40%] md:left-[35%] px-5 z-10 ">
          <form onSubmit={handleSearch}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                name="search"
                className="input input-bordered"
              />
              <button className="btn btn-square btn-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="my-10">
        <div className="px-10 grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2">
          {services.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
        </div>
        {!hide && (
          <div className="text-center mt-5">
            <button
              onClick={() => {
                setServices(loadedServices);
                setHide(true);
              }}
              className="btn btn-sm btn-outline"
            >
              More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AllServices;
