import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Widgets from "../Components/Widgets";
import classes from "../Styles/Homepage.module.scss";

const Home = () => {
  return (
    <div className={classes.home}>
      <Sidebar />
      <div className={classes.homeContainer}>
        <Navbar />
        <div className={classes.widgets}>
          <Widgets props="user" />
          <Widgets props="order" />
          <Widgets props="earning" />
          <Widgets props="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
