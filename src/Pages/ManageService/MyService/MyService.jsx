import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import axiosInstance from "../../../AxiosInstance/instance";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const MyService = ({ service }) => {
  const { _id, img, service_name, price, description, area } = service;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const service_name = form.name.value;
    const img = form.img.value;
    const area = form.area.value;
    const description = form.description.value;
    const price = form.price.value;
    const updateService = { service_name, img, area, description, price };
    console.log(updateService);
    axiosInstance.patch(`services/${_id}`, updateService).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount === 1) {
        toast("Updated successfully");
        window.location.reload(false);
      }
    });
  };

  return (
    <div className="card shadow-xl">
      <figure>
        <img src={img} className="" alt="Movie" />
      </figure>
      <div className="card-body py-5">
        <h2 className="card-title">{service_name}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-square btn-outline btn-secondary mr-5"
            onClick={() =>
              document.getElementById(`my_modal_${_id}`).showModal()
            }
          >
            <AiTwotoneEdit></AiTwotoneEdit>
          </button>
          <dialog
            id={`my_modal_${_id}`}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 gap-3">
                  <div className="md:pl-20 form-control w-full">
                    <label className="label">
                      <span className="label-text">Service Name:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Service name"
                      defaultValue={service_name}
                      name="name"
                      className="input input-bordered input-md max-w-xs"
                    />
                  </div>
                  <div className="md:pl-20 form-control w-full">
                    <label className="label">
                      <span className="label-text">Picture URL:</span>
                    </label>
                    <input
                      type="url"
                      placeholder="Picture URL"
                      defaultValue={img}
                      name="img"
                      className="input input-bordered input-md max-w-xs"
                    />
                  </div>
                  <div className="md:pl-20 form-control w-full">
                    <label className="label">
                      <span className="label-text">Description:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Description"
                      defaultValue={description}
                      name="description"
                      className="input input-bordered input-md max-w-xs"
                    />
                  </div>
                  <div className="md:pl-20 form-control w-full">
                    <label className="label">
                      <span className="label-text">Area:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Service area"
                      defaultValue={area}
                      name="area"
                      className="input input-bordered input-md max-w-xs"
                    />
                  </div>
                  <div className="md:pl-20 form-control w-full">
                    <label className="label">
                      <span className="label-text">Price:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Price"
                      defaultValue={price}
                      name="price"
                      className="input input-bordered input-md max-w-xs"
                    />
                  </div>
                </div>

                <div className="my-5 text-center">
                  <button className="btn btn-sm btn-outline btn-secondary">
                    Update
                  </button>
                </div>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-outline btn-sm">close</button>
                </form>
              </div>
            </div>
          </dialog>
          <button
            // onClick={() => handleDelete(_id)}
            className="btn btn-square btn-outline btn-secondary"
          >
            <AiFillDelete></AiFillDelete>
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyService;
