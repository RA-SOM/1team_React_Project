import React, { useState, useMemo } from 'react';  // ✅ useMemo 추가
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ValueTrendChart() {
  const [period, setPeriod] = useState('week');
  
  // ✅ useMemo로 data/options 메모이제이션 (ESLint 해결)
  const chartData = useMemo(() => {
    const dataByPeriod = {
      week: { labels: ['3일전', '어제', '오늘', '내일'], values: [3000000, 5230000, 4230000] },
      month: { labels: ['1/1', '1/8', '1/15', '1/21'], values: [500000, 2800000, 5230000, 1000000] },
      year: { labels: ['1월', '4월', '7월', '11월'], values: [200000, 900000, 5230000, 9000000] }
    };

    return {
      labels: dataByPeriod[period].labels,
      datasets: [{
        label: '총 가치',
        data: dataByPeriod[period].values,
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
        fill: true
      }]
    };
  }, [period]);  // period 바뀔 때만 재계산

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { top: 10, bottom: 20 } },
    plugins: {
      title: { display: true, text: `${period} 총 하루 가치`, font: { size: 16 } },
      legend: { display: true, position: 'top' }
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        ticks: { callback: (v) => `₩${(v/100000).toLocaleString()}만` }
      }
    }
  }), [period]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '0rem' }}>
        {['week', 'month', 'year'].map(p => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              background: period === p ? '#8B5CF6' : '#f1f5f9',
              color: period === p ? 'white' : '#64748b',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {p}
          </button>
        ))}
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
}



