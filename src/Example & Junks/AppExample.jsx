import React from 'react';
import ValueTrendChart from '../ValueTrendChart';
import QuantityTrendChart from '../QuantityTrendChart';

function App() {
  return (
    <div style={{ 
      padding: '2rem', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: '3rem', 
        color: '#1e293b' 
      }}>
        🏪 물품 관리 대시보드
      </h1>
      
      <div style={{
        display: 'flex',
        width: '100%',
        height: '600px',
        gap: '1rem',
        margin: '0 auto'
      }}>
        <div style={{
          flex: 1,
          background: 'white',
          borderRadius: '2rem',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          padding: '1rem',
          overflow: 'hidden'
        }}>
          <ValueTrendChart />
        </div>
        <div style={{
          flex: 1,
          background: 'white',
          borderRadius: '2rem',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          padding: '1rem',
          overflow: 'hidden'
        }}>
          <QuantityTrendChart />
        </div>
      </div>
    </div>
  );
}

export default App;





