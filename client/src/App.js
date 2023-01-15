import './App.css';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import customTheme from './components/dashStyle';

function App() {
  const theme = createTheme(customTheme)
  return (
    <ThemeProvider theme={theme}>
    
        <Dashboard />
   
    </ThemeProvider>
  );
}

export default App;

