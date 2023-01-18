import React from "react";
import classes from "../Styles/Single.module.scss";

const Profile = () => {
  return (
    <div>
      <div className={classes.left}>
        <div className={classes.editButton}>Edit</div>
        <h1 className={classes.title}>Information</h1>
        <div className={classes.item}>
          <img
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className={classes.itemImg}
          />
          <div className={classes.details}>
            <h1 className={classes.itemTitle}>Jane Doe</h1>
            <div className={classes.detailItem}>
              <span className={classes.itemKey}>Email:</span>
              <span className={classes.itemValue}>janedoe@gmail.com</span>
            </div>
            <div className={classes.detailItem}>
              <span className={classes.itemKey}>Phone:</span>
              <span className={classes.itemValue}>+1 2345 67 89</span>
            </div>
            <div className={classes.detailItem}>
              <span className={classes.itemKey}>Address:</span>
              <span className={classes.itemValue}>
                Elton St. 234 Garden Yd. NewYork
              </span>
            </div>
            <div className={classes.detailItem}>
              <span className={classes.itemKey}>Country:</span>
              <span className={classes.itemValue}>USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
