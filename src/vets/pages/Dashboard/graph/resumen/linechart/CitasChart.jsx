import React, { useState } from "react";
import "../scss/graph.scss";
import ReactApexChart from "react-apexcharts";

function CitasChart() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Net Profit",
        data: [30, 40, 40, 90, 90, 70, 70],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
        colors: ["#f8f5ff"],
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: ["#7139e9"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: "#a2a6b8",
            fontSize: "12px",
          },
        },
        crosshairs: {
          position: "front",
          stroke: {
            color: "#7139e9",
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          marker: {
           Colors:"#fff",
          },
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ["#a2a6b8"],
            fontSize: "12px",
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      color: ["#f8f5ff"],
      grid: {
        borderColor: "#f6f6f6",
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },

      markers: {
        colors: "#fff",
        strokeColors: "#7139e9",
        strokeWidth: 3,
      },
    },
  });

  return (
    <>
    <p className="graph-title">Citas agendadas</p>
    <div className="line-chart-container">
      <div className="line-chart-info text-start">
        <p className="line-main-title">61</p>
        <p className="line-sub-title">Semana actual</p>
      </div>
      <div className="line-chart-info text-end">
      <p className="line-main-title">124</p>
        <p className="line-sub-title">Mes acutal</p>
      </div>
    </div>
    <div id="chart" className="line-chart chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
    </>
  );
}

export default CitasChart;
