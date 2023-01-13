import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import StorefrontIcon from "@mui/icons-material/Storefront";
import React from "react";
import logo from "../assets/AdminLogo.png";
import classes from "../Styles/Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <img className={classes.logo} src={logo} alt="logo" />
        <span className={classes.logotitle}>Admin Panel</span>
      </div>
      <div className={classes.center}>
        <ul>
          <p className={classes.title}> MAIN </p>
          <li>
            <DashboardIcon className={classes.icon} />
            <span>Dashboard</span>
          </li>
          <p className={classes.title}> List </p>
          <li>
            <GroupAddIcon className={classes.icon} />
            <span>Users</span>
          </li>
          <li>
            <StorefrontIcon className={classes.icon} />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className={classes.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={classes.icon} />
            <span>Delivery</span>
          </li>
          <p className={classes.title}> LINKS </p>
          <li>
            <QueryStatsIcon className={classes.icon} />
            <span>Statistics</span>
          </li>
          <li>
            <NotificationsActiveIcon className={classes.icon} />
            <span>Notifications</span>
          </li>
          <p className={classes.title}> SERVICES </p>
          <li>
            <SettingsSystemDaydreamIcon className={classes.icon} />
            <span>System</span>
          </li>
          <li>
            <AddToQueueIcon className={classes.icon} />
            <span>Logs</span>
          </li>
          <li>
            <DisplaySettingsIcon className={classes.icon} />
            <span>Settings</span>
          </li>
          <p className={classes.title}> USER </p>
          <li>
            <PersonIcon className={classes.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className={classes.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className={classes.bottom}>
        <div className={classes.colorOption}></div>
        <div className={classes.colorOption}></div>
      </div>
    </div>
  );
};

export default Sidebar;
