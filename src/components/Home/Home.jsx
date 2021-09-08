import React from "react";
import { Link, } from "react-router-dom";

const Home = ({ setIsAuth,isAuth ,}) => {
  const handleClick = () => {
    window.localStorage.setItem("isAuth", '');
    setIsAuth(false)
  };
  return (
    <div>
      <h1>Home content</h1>
      <Link to="/">
        <button>go to login</button>
      </Link>
      <button onClick={handleClick}>Logo out</button>
    </div>
  );
};

export default Home;
