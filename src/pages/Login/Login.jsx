import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
  const { login, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    login(email, password)
      .then((curUser) => {
        console.log("curUser", curUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.error(err));
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("signed with google ", result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleGoogleSignIn} className="btn btn-outline">
                Continue with google
              </button>
            </div>
          </form>
          <p className="text-center mb-6">
            New to Wellness Blueprint?{" "}
            <Link className="text-purple-400" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
