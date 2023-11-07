import { Link } from "react-router-dom";
import reg from "../../assets/create.png";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.img.value;
    console.log(name, email, password, img);
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-2">
      <div className="hero-content flex-col gap-5 lg:flex-row">
        <div className="lg:w-1/2">
          <img className="w-full mx-auto" src={reg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full py-5 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-semibold text-center">Register</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Name<span className="text-2xl text-pink-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Email<span className="text-2xl text-pink-500">*</span>
                </span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                name="img"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Confirm Password
                  <span className="text-2xl text-pink-500">*</span>
                </span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn btn-secondary btn-outline"
              />
            </div>
          </form>
          <p className="text-center my-4">
            Already have an account?{" "}
            <Link className="text-pink-500 hover:underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
