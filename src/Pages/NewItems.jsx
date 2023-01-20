import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import classes from "../Styles/NewItems.module.scss";

const NewItems = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className={classes.new}>
      <Sidebar />
      <div className={classes.newContainer}>
        <Navbar />
        <div className={classes.top}>
          <h1>{title}</h1>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className={classes.right}>
            <form>
              <div className={classes.formInput}>
                <label htmlFor="file">
                  <DriveFolderUploadIcon className={classes.icon} />
                </label>
                <input
                  type="file"
                  onChange={(event) => setFile(event.target.files[0])}
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className={classes.formInput} key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItems;
