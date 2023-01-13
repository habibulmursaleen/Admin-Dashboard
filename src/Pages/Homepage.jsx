import React from "react";
import Sidebar from "../Components/Sidebar";
import classes from "../Styles/Homepage.module.scss";

const Home = () => {
  return (
    <div className={classes.home}>
      <Sidebar />
    </div>
  );
};

export default Home;
