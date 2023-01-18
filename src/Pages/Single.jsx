import React from "react";
import Charts from "../Components/MainDashboard/Charts/Charts";
import TableList from "../Components/MainDashboard/TableList";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Sidebar from "../Components/Sidebar";
import classes from "../Styles/Single.module.scss";

const Single = () => {
  return (
    <div className={classes.single}>
      <Sidebar />
      <div className={classes.singleContainer}>
        <Navbar />
        <div className={classes.top}>
          <Profile />
          <div className={classes.right}>
            <Charts />
          </div>
        </div>
        <div className={classes.bottom}>
          <h1 className={classes.title}>LAST TRANSACTIONS</h1>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Single;
