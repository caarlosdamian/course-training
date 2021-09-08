import "./App.css";
import Clients from "./components/Clients/Clients";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [isAuth, setIsAuth] = useState(window.localStorage.getItem("isAuth"));

  useEffect(() => {
    setIsAuth(window.localStorage.getItem("isAuth"));
  }, [isAuth]);

  console.log(isAuth);
  return (
    <Router>
      <div className="App">
        <Header isAuth={isAuth} />
        <Switch>
          <Route path="/" exact>
            <Login setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>
          <PrivateRoute isAuth={isAuth} path="/home">
            <Home setIsAuth={setIsAuth} isAuth={isAuth} />
          </PrivateRoute>
          <PrivateRoute
            isAuth={isAuth}
            path="/clients"
            component={Clients}
          ></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
