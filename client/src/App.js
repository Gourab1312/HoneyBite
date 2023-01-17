import './App.css';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import customTheme from './components/dashStyle';
import { BrowserRouter } from 'react-router-dom'
import AppState from './context/UserContext';

function App() {
  const theme = createTheme(customTheme)
  return (
    <AppState>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </ThemeProvider>
    </AppState>
  );
}

export default App;

