import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const StatisticsContainer = styled.div`
  background-color: #000;
  height: 100vh;
  padding: 100px;
  canvas {
    background-color: #fff;
  }
  @media (max-width: 576px) {
    padding: 48px 16px;
    height: 100vh;
  }
`;

const EmptyList = styled.div`
  font-size: 48px;
  text-align:center;
  color:#fff;
`;
const Statistics = () => {
  const { expenseList } = useContext(GlobalContext);
  const dates = expenseList.map((expense) => expense.selectedDate);
  const amountList = expenseList.map((expense) => expense.amount);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Amount",
        data: amountList,

        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {},
    elements: {
      line: {
        tension: 0.4,
      },
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };
  return (
    <StatisticsContainer>
      {expenseList.length > 0 ? (
        <Line data={data} height={600} options={options} />
      ) : (
        <EmptyList>Please Enter a Expense!</EmptyList>
      )}
    </StatisticsContainer>
  );
};

export default Statistics;
