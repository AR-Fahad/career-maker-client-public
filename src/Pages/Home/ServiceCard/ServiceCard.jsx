const ServiceCard = ({ service }) => {
  const { img, service_name, provider_name, provider_img, description, price } =
    service;

  return (
    <div className="card md:card-side bg-base-100 shadow-xl rounded-lg">
      <figure>
        <img className="rounded-lg" src={img} alt="" />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">{service_name}</h2>
        <div className="flex gap-2">
          <img className="w-10 rounded-full" src={provider_img} alt="" />
          <p>{provider_name}</p>
        </div>
        <p>{description}</p>
        <p> Price: {price}</p>

        <div className="card-actions justify-start">
          <button className="btn btn-secondary btn-sm btn-outline">
            show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
