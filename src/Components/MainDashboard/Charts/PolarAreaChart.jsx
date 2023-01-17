import React from "react";
import Chart from "react-apexcharts";
import classes from "../../../Styles/Charts.module.scss";

const PolarAreaChart = () => {
  var options = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      type: "polarArea",
    },
    // labels: ["Users", "Stocks", "Production Costs"],
    stroke: {
      colors: ["#fff"],
      curve: "smooth",
    },
    fill: {
      opacity: 0.9,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className={classes.chart}>
      <div className={classes.title}>OVERVIEW OF THE SALES</div>
      <div className={classes.chartContainerPolarArea}>
        <Chart options={options} series={options.series} type="polarArea" />
      </div>
    </div>
  );
};

export default PolarAreaChart;
