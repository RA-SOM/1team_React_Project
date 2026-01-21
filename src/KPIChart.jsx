import React from 'react';
import { Line } from 'react-chartjs-2';
import
{
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Chart
} from 'chart.js';

Chart.register(  
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function KpiChart() {  // 이름 변경
  const data = {
    labels: ['1/1','1/4', '1/8', '1/15','1/22', '1/25', '1/28', '1/29', '1/31'],
    datasets: [{
      data: [450, 510, 420, 573, 450, 510, 420, 573],
      borderColor: 'rgba(92, 128, 246, 0.9)',    // 조금 더 진하게
      backgroundColor: 'rgba(92, 107, 246, 0.15)', // 영역 살짝 진하게
      fill: true,
      pointRadius: 0,
      borderWidth: 2.5,     // 선 두께 살짝
      tension: 0,        // 0일 시 직선
      stepped: false,     // 계단형 (막대처럼) 필요시 true
      borderCapStyle: 'butt' 
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    layout: {
      padding: { 
        left: 2, right: 2, top: 6, bottom: 6  // 좌우 최소 여백
      }
    },

    plugins: { 
      legend: { display: false }
    },

    scales: {
      x: { 
        display: false,
        grid: { display: false },
        ticks: { padding: 0 }
      },
      y: { 
        display: false,
        grid: { display: false },
        ticks: { padding: 0 }
      }
    },

    elements: { 
      point: { radius: 0 },
      line: { tension: 0, borderCapStyle: 'square'}
    }, interaction: { mode: 'index', intersect: false }
  };

  return (
    <div className="mini-chart"style={{ 
      width: '100%', 
      height: '70px',
      padding: '1rem',
      margin: '1rem'
      }}> 
      <Line data={data} options={options} />
    </div>
  );
}
