import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import { Link } from "react-router-dom";
import classes from "../../Styles/Widgets.module.scss";

const Widgets = ({ props }) => {
  let data;

  //temporary
  const amount = 115.865;
  const diff = 20;

  switch (props) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className={classes.icon}
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              "border-radius": "0.4rem",
              padding: "0.1rem",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className={classes.icon}
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              "border-radius": "0.4rem",
              padding: "0.1rem",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className={classes.icon}
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
              "border-radius": "0.4rem",
              padding: "0.1rem",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className={classes.icon}
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              "border-radius": "0.4rem",
              padding: "0.1rem",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className={classes.widget}>
      <div className={classes.left}>
        <span className={classes.title}>{data.title}</span>
        <span className={classes.counter}>
          {data.isMoney && "$"} {amount}
        </span>
        <Link to="/users" style={{ textDecoration: "none" }}>
          <span className={classes.link}>{data.link}</span>
        </Link>
      </div>
      <div className={classes.right}>
        <div className={`${classes.percentage} ${classes.positive}`}>
          <KeyboardArrowUpIcon />
          <span>{diff}%</span>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
