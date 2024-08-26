// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomePage;
