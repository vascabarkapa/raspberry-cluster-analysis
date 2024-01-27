import React, { useState, useEffect } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// scroll bar
import 'simplebar/src/simplebar.css';
import './index.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';

// components
import CloudberryFullLogo from 'components/loading/FullLogo';
import Dots from 'components/loading/Dots';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const MainApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <ReduxProvider store={store}>
        <BrowserRouter>
          {loading ? (
            // Loading screen
            <div className="loading-center">
              <CloudberryFullLogo width={250} />
              <div className="divider-height"></div>
              <Dots />
            </div>
          ) : (
            // Main application
            <>
              <ToastContainer />
              <App />
            </>
          )}
        </BrowserRouter>
      </ReduxProvider>
    </StrictMode>
  );
};

root.render(<MainApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
