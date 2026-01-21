import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement);

export default function QuantityTrendChart() {
  const data = {
    labels: ['1/1', '1/8', '1/15'],
    datasets: [
      { type: 'line', label: '총 수량', data: [120, 125, 127], borderColor: '#10B981', yAxisID: 'y' },
      { type: 'bar', label: '입고', data: [10, 8, 5], backgroundColor: '#F59E0B', yAxisID: 'y1' }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { top: 50, bottom: 20 } },
    plugins: {
      title: { display: true, text: '수량 추이', font: { size: 16 }, padding: { top: 0 } },
      legend: { position: 'top' }
    },
    scales: {
      y: { grid: { drawBorder: false } },
      y1: { position: 'right', grid: { drawBorder: false } }
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Line data={data} options={options} />
    </div>
  );
}


