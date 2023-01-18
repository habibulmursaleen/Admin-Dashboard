import React from "react";
import DataTable from "../Components/DataTable/DataTable";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import classes from "../Styles/List.module.scss";

const List = () => {
  return (
    <div className={classes.list}>
      <Sidebar />
      <div className={classes.listContainer}>
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
