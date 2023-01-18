import React from "react";
import Chart from "react-apexcharts";
import classes from "../../../Styles/Charts.module.scss";

const Charts = () => {
  const options = {
    series: [
      {
        name: "Orders",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Earnings",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "Balance",
        data: [10, 120, 30, 90, 40, 50, 67],
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <div className={classes.chart}>
      <div className={classes.title}>OVERVIEW OF THE INCOME</div>
      <div className={classes.chartContainerArea}>
        <Chart options={options.options} series={options.series} type="area" />
      </div>
    </div>
  );
};

export default Charts;
