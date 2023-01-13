import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import classes from "../Styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <input type="text" placeholder="Searh here.." />
          <SearchIcon className={classes.icon} />
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <LanguageOutlinedIcon />
            <span>English</span>
          </div>
          <div className={classes.item}>
            <DarkModeOutlinedIcon />
          </div>
          <div className={classes.item}>
            <FullscreenExitOutlinedIcon />
          </div>
          <div className={classes.item}>
            <NotificationsNoneOutlinedIcon />
            <div className={classes.counter}>1</div>
          </div>
          <div className={classes.item}>
            <ChatBubbleOutlineOutlinedIcon />
            <div className={classes.counter}>3</div>
          </div>
          <div className={classes.item}>
            <ListOutlinedIcon />
          </div>

          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="avater"
            className={classes.avatar}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
