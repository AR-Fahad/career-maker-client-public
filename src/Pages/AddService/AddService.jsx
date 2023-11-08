import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axiosInstance from "../../AxiosInstance/instance";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const service_name = form.service.value;
    const img = form.img.value;
    const area = form.area.value;
    const provider_name = user?.displayName;
    const provider_email = user?.email;
    const provider_img = user?.photoURL;
    const description = form.description.value;
    const price = form.price.value;
    const addService = {
      service_name,
      img,
      area,
      provider_name,
      provider_email,
      provider_img,
      description,
      price,
    };
    console.log(addService);
    axiosInstance.post("/services", addService).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast("Successfully added a service");
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>GoTravel | Add-Services</title>
      </Helmet>
      <div className="card w-full shadow-2xl bg-base-100 lg:p-20">
        <h3 className="text-center text-3xl font-bold text-pink-500">
          Add a Service
        </h3>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                defaultValue={user?.displayName}
                className="input"
                readOnly
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                defaultValue={user?.email}
                className="input"
                readOnly
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service Name:</span>
              </label>
              <input
                type="tel"
                placeholder="Service name"
                name="service"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service Picture URL:</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                name="img"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service Area:</span>
              </label>
              <input
                type="text"
                placeholder="Area"
                name="area"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price:</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control w-full mt-6">
            <label className="label">
              <span className="label-text">Description:</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered"
              rows={5}
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline btn-secondary"
              type="submit"
              value="Add Service"
            />
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default AddService;
