import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import classes from "../../../Styles/FeaturedChart.module.scss";

const progressValue = 75;

const Featured = () => {
  return (
    <div className={classes.featured}>
      <div className={classes.top}>
        <h1 className={classes.title}> TOTAL REVENUE </h1>
        <MoreVertIcon className={classes.icon} />
      </div>
      <div className={classes.bottom}>
        <div className={classes.featuredChart}>
          <CircularProgressbar
            value={progressValue}
            text={`${progressValue}%`}
            styles={{
              root: {
                width: "6rem",
                overflow: "visible",
              },
              path: {
                stroke: "#7451f8",
                "stroke-width": "5px",
                filter: "drop-shadow(2px 4px 6px #b5a3f6)",
              },
              trail: {
                stroke: "#d9cfff",
                "stroke-width": "10",
              },
              text: {
                fill: "#7451f8",
              },
            }}
          />
        </div>
        <p className={classes.title}>Total sales made today</p>
        <p className={classes.amount}>$420</p>
        <p className={classes.desc}>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className={classes.summary}>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Target</div>
            <div className={`${classes.itemResult} ${classes.negative}`}>
              <KeyboardArrowDownIcon fontSize="small" />
              <div className={classes.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Last Week</div>
            <div className={`${classes.itemResult} ${classes.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className={classes.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Last Month</div>
            <div className={`${classes.itemResult} ${classes.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className={classes.resultAmount}>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
