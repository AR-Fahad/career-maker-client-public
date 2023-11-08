import { Link } from "react-router-dom";
import profile from "../../../assets/profile.jpg";
const ServiceCard = ({ service }) => {
  const {
    _id,
    img,
    service_name,
    provider_name,
    provider_img,
    description,
    price,
  } = service;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="card md:card-side bg-base-100 shadow-xl rounded-lg"
    >
      <figure>
        <img className="rounded-lg" src={img} alt="" />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">{service_name}</h2>
        <div className="flex gap-2 items-center">
          <img
            className="w-8 rounded-full"
            src={provider_img ? provider_img : profile}
            alt=""
          />
          <p>{provider_name}</p>
        </div>
        <p>{description}</p>
        <p> Price: {price}</p>

        <div className="card-actions justify-start">
          <Link
            to={`/services/${_id}`}
            className="btn btn-secondary btn-sm btn-outline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
