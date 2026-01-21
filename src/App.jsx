import React from 'react';
import './App.css';
import ValueTrendChart from './ValueTrendChart';
import QuantityTrendChart from './QuantityTrendChart';
import KPIChart from './KPIChart';

function App() {
  return (
    <div style={{ 
      padding: '2rem', 
      background: '#e2e8f0', 
      minHeight: '100vh' 
    }}>
      <h1 className={"header"}>
        &nbsp; &nbsp; 물품 관리 대시보드
      </h1>

      {/* KPIChart */}
      <div className='kpi-bar'>
        <div className='kpi-item' style={{fontSize:'1.5rem', marginLeft:'-1rem'}}>총 가치
        <KPIChart />
        </div>
        <div className='kpi-item' style={{fontSize:'3.5rem', marginLeft:'-1rem'}}>TotalValue
        </div>
      </div>
      
        <div className={"dashboard-container"}>
        <div className={"box"}>
            {/* 가치 그래프 */}
            <div className={"chart-container"}>
                <div className={"chart-style"}>
                    <ValueTrendChart />
                </div>
            </div> 
        </div>       
        <div className={"box"}>
        {/* 수량 그래프 및 차트 */}
            <div className={"chart-container"}>
                <div className={"chart-style"}>
                    <QuantityTrendChart />
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;