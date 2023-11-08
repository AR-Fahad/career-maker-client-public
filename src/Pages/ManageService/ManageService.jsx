import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../AxiosInstance/instance";
import MyService from "./MyService/MyService";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axiosInstance.get(`/services?email=${user?.email}`).then((res) => {
      setServices(res.data);
      setLoader(false);
    });
  }, [user]);

  if (loader) {
    return (
      <div className="my-28 text-center">
        <span className="loading loading-spinner text-secondary loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>GoTravel | My-Services</title>
      </Helmet>
      <div className="my-10">
        <h3 className="text-center text-2xl font-bold text-pink-500">
          Your Total Services: {services.length}
        </h3>
        <div className="grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-16">
          {services.map((service) => (
            <MyService key={service._id} service={service}></MyService>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageService;
