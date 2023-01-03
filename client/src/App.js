import './App.css';
import Dashboard from './components/dashboard';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import customTheme from './components/dashStyle';
import Contextprovider from './Context/userState';
function App() {
  const theme = createTheme(customTheme)
  return (

    <ThemeProvider theme={theme}>
      <Contextprovider>
        <Dashboard />
      </Contextprovider>
    </ThemeProvider>


  );
}

export default App;

