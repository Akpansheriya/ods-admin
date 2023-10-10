import React from "react";

import { Button } from "react-bootstrap";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
function PtientesChart() {



  const graphData = [
    { color: "pur", date: "De 5-11", quantity: "45", percentage: "(23%) " },
    { color: "grn", date: "De 11-20", quantity: "42", percentage: "(22%)" },
    { color: "blu", date: "De 21-30", quantity: "42", percentage: "(22%)" },
    { color: "ylw", date: "De 31-45", quantity: "6", percentage: "(22%)" },
    { color: "red", date: "De 46+", quantity: "12", percentage: "(5%)" },

  ];
  const seriesData = [45, 42, 42, 6, 12];


  const [chartData, setChartData] = useState({
    series: seriesData,
    options: {
      chart: {
        width: 380,
        type: 'donut',
        fontFamily: 'Inter'
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,

                fontSize: 20,


              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
      colors: ['#9033FB', '#3AC47D', '#1F87FF', '#F6B824', '#D92550'],
      labels: ['De 5-11', 'De 11-20', 'De 21-30', 'De 31-45', 'De 46+'],
    },
  });

  return (
    <div className="daoughnut">
      <div className="daoughnut-title-box">
        <p className="graph-title">Edad de pacientes</p>
        <div className="daoughnut-btn-group">
          <Button className="anual-btn">Anual</Button>
          <Button className="mensual-btn">Mensual</Button>
        </div>
      </div>
      <div className="d-flex flex-wrap chart align-items-end">
        <div className="position-relative d-flex flex-center h-175px w-200px me-15 mb-7">
          <ReactApexChart
            height={220}
            options={chartData.options}
            series={chartData.series}
            type="donut"
          />
        </div>



        <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5 ">
          <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
            <p className="mb-0 text-gray-400">EDADES</p>
            {" "}
            <p className="mb-0 ms-auto fw-bold  text-gray-400">
              PORCENTAJE
            </p>
          </div>
          {graphData.map((ele, ind) => (
            <>
              <div className="d-flex fs-6 fw-semibold align-items-center mb-4">
                <div className={`color-point ${ele.color}`}></div>{" "}
                <p className="mb-0 text-gray-400">{ele.date}</p>


                {" "}
                <p className="mb-0 ms-auto fw-bold ">
                  {ele.quantity}
                  <span className="ms-2 text-gray-400 fw-bold">{ele.percentage}</span>
                </p>
              </div>
            </>
          ))}

        </div>

      </div>

    </div>
  );
}

export default PtientesChart;