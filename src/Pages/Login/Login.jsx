import { Link } from "react-router-dom";
import login from "../../assets/login.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-2">
      <div className="hero-content flex-col gap-5 lg:flex-row">
        <div className="lg:w-1/2">
          <img className="w-full mx-auto" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full py-5 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl font-semibold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
                id="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn btn-outline btn-secondary"
              />
            </div>
          </form>
          <div className="text-center mb-5">
            <p>
              Do not have an account?{" "}
              <Link className="text-pink-500 hover:underline" to="/register">
                Register
              </Link>
            </p>
            <br />
            <p className="text-pink-500 text-xl font-bold">Or</p>
            <br />
            <button className="btn btn-outline">
              <FcGoogle></FcGoogle> Google Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
