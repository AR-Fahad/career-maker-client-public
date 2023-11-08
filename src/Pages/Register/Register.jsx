import { Link, useNavigate } from "react-router-dom";
import reg from "../../assets/create.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const [error, setError] = useState(null);
  const { createAccount } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.img.value;
    console.log(name, email, password.length, img);
    setError(null);

    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)
    ) {
      setError("password need to strong and more then 5 characters");
      return;
    }

    createAccount(email, password)
      .then((data) => {
        console.log(data.user);
        updateProfile(data.user, {
          displayName: name,
          photoURL: img,
        })
          .then(() => {
            toast("Successfully registered");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setError("Already have an account with this email");
      });
  };
  return (
    <>
      <Helmet>
        <title>GoTravel | Register</title>
      </Helmet>
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
              {error && <p className="text-red-600">{error}</p>}
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
    </>
  );
};

export default Register;
