import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const {
    _id,
    img,
    service_name,
    provider_name,
    provider_img,
    description,
    price,
    area,
  } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{description}</p>
        <div className="flex gap-2">
          <img className="w-10 rounded-full" src={provider_img} alt="" />
          <p>{provider_name}</p>
        </div>
        <p>Service Area: {area}</p>
        <p>Price: {price}</p>
        <div className="card-actions justify-start">
          <Link
            to={`/services/${_id}`}
            className="btn btn-outline btn-sm btn-secondary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
