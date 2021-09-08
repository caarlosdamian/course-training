import "./header.css";


const Header = ({ isAuth }) => {
  if (isAuth) {
    return (
      <div className="header">
        <div className="header-container">
          <div className="header-left">Home</div>
          <div className="header-right">IconMenu</div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default Header;
