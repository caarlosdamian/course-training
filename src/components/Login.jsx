import "./login.css";
import gmail from "../assets/gmail01.png";
const Login = () => {
  return (
    <div className="container">
      <div className="left">
        <img
          src="https://mobirise.com/bootstrap-carousel/assets2/images/thomas-smith-399133-1707x2560.jpg"
          alt="mountain"
        />
      </div>
      <div className="right">
        <form className="right-form">
          <div className="form-container">
            <div className="form-container-headers">
              <h6 className="form-container-subheader">Welcome back</h6>
              <h2 className="form-container-header">Login to your account</h2>
            </div>
            <span className="form-container-span">Email</span>
            <input
              className="form-container-input"
              type="text"
              placeholder="dapecarlos
            @gmail.com"
            />
            <span className="form-container-span">Password</span>
            <input
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
