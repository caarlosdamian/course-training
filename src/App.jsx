import "./App.css";
import Clients from "./components/Clients/Clients";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Header/>
      <Home/>
      <Clients/> */}
    </div>
  );
}

export default App;
