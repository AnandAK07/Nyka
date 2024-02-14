import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "../style/chart.css";

const Analytics = () => {
  const genderChartRef = useRef(null);
  const categoryChartRef = useRef(null);

  useEffect(() => {
    // Fetch data from the server for gender and category charts
    const genderData = {
      labels: ['Male', 'Female'],
      datasets: [{
        data: [60, 40], // Replace with actual gender data percentages
        backgroundColor: [
          'blue',
          'pink'
        ]
      }]
    };

    const categoryData = {
      labels: ['haircare', 'makeup', 'skincare'],
      datasets: [{
        data: [30, 20, 40], // Replace with actual category data percentages
        backgroundColor: [
          'red',
          'blue',
          'green',
          'orange'
        ]
      }]
    };

    // Render gender chart
    if (genderChartRef.current) {
      const genderCtx = genderChartRef.current.getContext('2d');
      new Chart(genderCtx, {
        type: 'pie',
        data: genderData,
        options: {
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    // Render category chart
    if (categoryChartRef.current) {
      const categoryCtx = categoryChartRef.current.getContext('2d');
      new Chart(categoryCtx, {
        type: 'pie',
        data: categoryData,
        options: {
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className='analytics-container'>
      <h2>Gender Chart</h2>
      <canvas ref={genderChartRef} className='gender-chart'></canvas>
      <h2>Category Chart</h2>
      <canvas ref={categoryChartRef} className='category-chart'></canvas>
    </div>
  );
};

export {Analytics};



