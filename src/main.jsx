/**
 * BRIDGES UNESCO 3.0 - Main Entry Point
 * Created by: Tarruck Wheeler (tarruck@stanford.edu)
 * Institution: Stanford International Policy & Governance
 * Program: UNESCO Intercultural Leadership Program
 * Focus: South Florida Refugee Community Integration
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Performance monitoring (development only)
if (import.meta.env.DEV) {
  console.log('🏛️ BRIDGES UNESCO 3.0 - Created by Tarruck Wheeler');
  console.log('📧 Contact: tarruck@stanford.edu');
  console.log('🌍 UNESCO Intercultural Leadership Program');
  console.log('📍 Focus: South Florida Refugee Communities');
  
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  }).catch(() => {
    // web-vitals not available, continue without monitoring
  });
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
    // In production, send to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">🏛️ BRIDGES UNESCO 3.0</h1>
              <p className="text-blue-600 text-sm">Created by Tarruck Wheeler</p>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">We're sorry, but something unexpected happened with the UNESCO platform.</p>
            
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">📞 Contact Support</h3>
              <p className="text-sm text-gray-600 mb-1">Project Creator: Tarruck Wheeler</p>
              <p className="text-sm text-blue-600 mb-1">📧 tarruck@stanford.edu</p>
              <p className="text-xs text-gray-500">Stanford International Policy & Governance</p>
            </div>
            
            <button 
              onClick={() => window.location.reload()} 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
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
