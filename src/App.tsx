import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from './apollo/client';
import PaymentTest from './pages/PaymentTest';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/payment-test" element={<PaymentTest />} />
            {/* 其他路由 */}
          </Routes>
        </Router>
        <ToastContainer position="top-right" autoClose={3000} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App; 