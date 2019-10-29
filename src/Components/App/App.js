import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import './App.scss';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div className="app-content">
          <Dashboard />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
