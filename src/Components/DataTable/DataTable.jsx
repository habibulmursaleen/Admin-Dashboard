import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../assets/Data";
import classes from "../../Styles/DataTable.module.scss";

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={classes.cellAction}>
            <Link to="/users/view" style={{ textDecoration: "none" }}>
              <div className={classes.viewButton}>View</div>
            </Link>
            <div
              className={classes.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className={classes.datatable} style={{ height: "100%", width: "96%" }}>
      <div className={classes.datatableTitle}>
        Add New
        <Link to="/users/newitems" className={classes.link}>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
