import "./login.css";
import gmail from "../../assets/gmail01.png";
import { useHistory } from "react-router";
import { useState } from "react";
const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("isAuth", user.email);
    history.push("/home");
  };
  return (
    <div className="container">
      <div className="left">
        <img
          src="https://mobirise.com/bootstrap-carousel/assets2/images/thomas-smith-399133-1707x2560.jpg"
          alt="mountain"
        />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit} className="right-form">
          <div className="form-container">
            <div className="form-container-headers">
              <h6 className="form-container-subheader">Welcome back</h6>
              <h2 className="form-container-header">Login to your account</h2>
            </div>
            <span className="form-container-span">Email</span>
            <input
              required
              onChange={handleOnchange}
              name="email"
              className="form-container-input"
              type="email"
              placeholder="dapecarlos
            @gmail.com"
            />
            <span className="form-container-span">Password</span>
            <input
              required
              onChange={handleOnchange}
              name="password"
              className="form-container-input"
              type="password"
              placeholder="********"
            />
            <div className="form-container-container-radio">
              <div className="form-container-container-radio-left">
                <input
                  className="form-container-radio"
                  type="radio"
                  name=""
                  id=""
                />
                <span>Remember me</span>

                <div className="form-container-container-radio-left-right"></div>
              </div>

              <a href="/home" className="span-anchor">
                {" "}
                Forgot password?
              </a>
            </div>

            <input
              className="form-container-btn green"
              type="submit"
              value="Login"
            />
            <button className="form-container-btn black" type="submit">
              <img className="form-container-icon" src={gmail} alt="" />
              <span>Sign-in with google</span>
            </button>
            <span className="fomr-container-span-register">
              Dont have an account?
              <a href="/">Join free today</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
