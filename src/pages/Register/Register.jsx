import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function Register() {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photo)
          .then(() => {
            console.log("Username and photo Url updated");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline">Register with google</button>
            </div>
          </form>
          <p className="text-center mb-6">
            Already have an account?{" "}
            <Link className="text-purple-400" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
