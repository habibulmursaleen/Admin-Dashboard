import React from "react";
import Charts from "../Components/MainDashboard/Charts/Charts";
import Featured from "../Components/MainDashboard/Charts/Featured";
import PolarAreaChart from "../Components/MainDashboard/Charts/PolarAreaChart";
import TableList from "../Components/MainDashboard/TableList";
import Widgets from "../Components/MainDashboard/Widgets";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
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
        <div className={classes.charts}>
          <Featured />
          <Charts />
          <PolarAreaChart />
        </div>
        <div className={classes.listContainer}>
          <div className={classes.listTitle}>LATEST TRANSECTIONS</div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;
