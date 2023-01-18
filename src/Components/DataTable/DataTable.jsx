import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
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
            <div className={classes.viewButton}>View</div>
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
