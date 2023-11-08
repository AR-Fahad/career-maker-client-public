import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axiosInstance from "../../AxiosInstance/instance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const buttonRef = React.createRef();
  const {
    _id,
    img,
    service_name,
    area,
    provider_name,
    provider_email,
    provider_img,
    description,
    price,
  } = useLoaderData().data;

  const closeModal = () => {
    buttonRef.current.click();
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;

    const takingDate = form.takingDate.value;
    const address = form.address.value;
    const booking = {
      service: service_name,
      img,
      provider: provider_email,
      user: user?.email,
      price,
      takingDate,
      address,
    };
    console.log(booking);
    axiosInstance.post("/bookings", booking).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast("Successfully purchased a service");
        form.reset();
        closeModal();
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>GoTravel | Service-Details</title>
      </Helmet>
      <div className="my-10">
        <div className="text-center">
          <h3 className="text-pink-500 text-2xl font-bold">
            Service Provider Information:
          </h3>
          <br />
          <div>
            <img
              className="w-20 rounded-full mx-auto"
              src={provider_img ? provider_img : profile}
              alt=""
            />
          </div>
          <h3 className="text-xl font-bold">Provider Name: {provider_name}</h3>
          <p>Location: {area}</p>
        </div>
        <br />
        <div className="text-center">
          <h3 className="text-pink-500 text-2xl font-bold">
            Service Information:
          </h3>
          <br />
          <div className="w-3/4 mx-auto">
            <img className="w-full" src={img} alt="" />
          </div>
          <h3 className="text-2xl font-bold">{service_name}</h3>
          <p>{description}</p>
          <p>Price: {price}</p>
          <br />
          <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-sm btn-outline btn-secondary"
              onClick={() =>
                document.getElementById(`my_modal_${_id}`).showModal()
              }
            >
              BooK Now
            </button>
            <dialog id={`my_modal_${_id}`} className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="card w-full shadow-2xl bg-base-100 lg:p-20">
                  <form onSubmit={handlePurchase} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Service Name:</span>
                        </label>
                        <input
                          type="text"
                          name="service"
                          defaultValue={service_name}
                          className="input"
                          required
                          readOnly
                        />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Service Image:</span>
                        </label>
                        <input
                          type="url"
                          name="img"
                          defaultValue={img}
                          className="input"
                          required
                          readOnly
                        />
                      </div>

                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Provider Email:</span>
                        </label>
                        <input
                          type="email"
                          name="provider"
                          className="input"
                          defaultValue={provider_email}
                          required
                          readOnly
                        />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">User Email:</span>
                        </label>
                        <input
                          type="email"
                          name="user"
                          className="input"
                          defaultValue={user?.email}
                          required
                          readOnly
                        />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Price:</span>
                        </label>
                        <input
                          type="text"
                          name="price"
                          className="input"
                          defaultValue={price}
                          required
                          readOnly
                        />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">
                            Service Taking Date:
                          </span>
                        </label>
                        <input
                          type="date"
                          name="takingDate"
                          className="input input-bordered"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-control w-full mt-6">
                      <label className="label">
                        <span className="label-text">Address:</span>
                      </label>
                      <textarea
                        name="address"
                        className="textarea textarea-bordered"
                        rows={4}
                        placeholder="Your Address"
                        required
                      ></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <input
                        className="btn btn-outline btn-secondary"
                        type="submit"
                        value="Purchase"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button ref={buttonRef} className="btn">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default ServiceDetails;
