/**
 * BRIDGES UNESCO 3.0 - Main Entry Point
 * Created by: Tarruck Wheeler (tarruck@stanford.edu)
 * Institution: Stanford International Policy & Governance
 * Program: UNESCO Intercultural Leadership Program
 * Focus: South Florida Refugee Community Integration
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

// Performance monitoring (development only)
if (import.meta.env.DEV) {
  console.log('🏛️ BRIDGES UNESCO 3.0 - Created by Tarruck Wheeler');
  console.log('📧 Contact: tarruck@stanford.edu');
  console.log('🌍 UNESCO Intercultural Leadership Program');
  console.log('📍 Focus: South Florida Refugee Communities');
}

// Enhanced Error boundary for UNESCO program
class UNESCOErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('BRIDGES UNESCO Error:', error, errorInfo);
    console.log('Please report issues to: tarruck@stanford.edu');
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #dbeafe, #f3e8ff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                🏛️ BRIDGES UNESCO 3.0
              </h1>
              <p style={{ color: '#2563eb', fontSize: '0.875rem' }}>Created by Tarruck Wheeler</p>
            </div>
            
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              Something went wrong
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              We're sorry, but something unexpected happened with the UNESCO platform.
            </p>
            
            <div style={{
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>📞 Contact Support</h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Project Creator: Tarruck Wheeler</p>
              <p style={{ fontSize: '0.875rem', color: '#2563eb', marginBottom: '0.25rem' }}>📧 tarruck@stanford.edu</p>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Stanford International Policy & Governance</p>
            </div>
            
            <button 
              onClick={() => window.location.reload()} 
              style={{
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              🔄 Reload Platform
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UNESCOErrorBoundary>
      <App />
    </UNESCOErrorBoundary>
  </React.StrictMode>,
)
