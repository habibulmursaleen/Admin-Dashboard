import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import classes from "../../Styles/TableList.module.scss";

const TableList = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  // const changeColor = (Approved) => {
  //   return Approved ? "Approved" : "Pending";
  // };

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={`${classes.tableCell} ${classes.header}`}>
              Tracking ID
            </TableCell>
            <TableCell className={`${classes.tableCell} ${classes.header}`}>
              Product
            </TableCell>
            <TableCell className={`${classes.tableCell} ${classes.header}`}>
              Customer
            </TableCell>
            <TableCell className={`${classes.tableCell} ${classes.header}`}>
              Date
            </TableCell>
            <TableCell className={`${classes.tableCell} ${classes.header}`}>
              Amount
            </TableCell>
            <TableCell className={`${classes.tableCell} ${classes.header}`}>
              Payment Method
            </TableCell>
            <TableCell className={`${classes.tableCell} ${classes.header}`}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.tableCell}>{row.id}</TableCell>
              <TableCell className={classes.tableCell}>
                <div className={classes.cellWrapper}>
                  <img src={row.img} alt="" className={classes.image} />
                  <span className={`${classes.product}`}>{row.product}</span>
                </div>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {row.customer}
              </TableCell>
              <TableCell className={classes.tableCell}>{row.date}</TableCell>
              <TableCell className={classes.tableCell}>{row.amount}</TableCell>
              <TableCell className={classes.tableCell}>
                <span className={`${classes.method}`}>{row.method}</span>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <span className={`${classes.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
