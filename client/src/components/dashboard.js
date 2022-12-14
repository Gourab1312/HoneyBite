import React, { useState } from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import sxprop from './sxStyle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link, Route, Routes } from 'react-router-dom';
// components import 
import Allprojects from './Allprojects';
import AirDrop from './AirDrop';
import ProjectDetails from './ProjectDetails';
import VentureProj from './VentureProj';
import Venturecard from './Venturecard';

const drawerWidth = 300;

const Dashboard = () => {


  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <Typography variant='logosame'>HoneyBite</Typography>
      </Toolbar>
      <Box sx={sxprop.toolboxsx}>
        <Button variant="outlined" sx={sxprop.buttonsx}>Connect Wallet</Button>
        <Typography variant="captionmod" color="grey" gutterBottom>
          Your Honey-Bite Launchpad experience will be limited without connecting.
        </Typography>
      </Box>
      <Stack spacing={1} direction="column" sx={{ margin: "20px 0", marginLeft: "20px" }}>
        <Typography variant="listfont" display="block" gutterBottom>
          <Link to="allprojects" style={{ textDecoration: 'none' }}>All Projects</Link>
        </Typography>
        <Typography variant="listfont" display="block" gutterBottom>
          <Link to='airdrop' style={{ textDecoration: 'none' }}>AirDrop</Link>
        </Typography> 
        <Typography variant="listfont" display="block" gutterBottom>
        <Link to='venture' style={{ textDecoration: 'none' }}>Honey-Bite Venture</Link>
        </Typography>
        <Typography variant="listfont" display="block" gutterBottom>
          Membership
        </Typography>
      </Stack>
    </div>
  );

  const Resource = (

    <Accordion sx={sxprop.sxAccordian}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant='accordianhead'>Resource</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1} direction="column" sx={{ marginTop: "20px", marginLeft: "20px" }}>
          {['FeedBack & Bug Report', 'Governace', 'Help'].map((text, index) => (<Typography variant="listfont" display="block" gutterBottom key={index}>
            {text}
          </Typography>))}
        </Stack>
      </AccordionDetails>
    </Accordion>

  )

  const General = (
    <Accordion sx={sxprop.sxAccordian}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant='accordianhead'>General</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1} direction="column" sx={{ marginTop: "20px", marginLeft: "20px" }}>
          {['Apply to Launch', 'Privacy Policy', 'Terms of use'].map((text, index) => (<Typography variant="listfont" display="block" gutterBottom key={index}>
            {text}
          </Typography>))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  )


  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          backgroundColor: 'white'
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='logosame'>HoneyBite</Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
          {Resource}
          {General}
        </Drawer>
        <Drawer
          variant="permanent"

          sx={sxprop.drawersx}
          open
        >
          {drawer}
          {Resource}
          {General}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginLeft: '29px', margin: { xs: '0 5px' } }}
      >
        <Routes>
          <Route path='/*' element={<Allprojects />}></Route>
          <Route path='/allprojects' element={<Allprojects />}></Route>
          <Route path='/airdrop' element={<AirDrop />}></Route>
          <Route path='/projectdetails/*' element={<ProjectDetails/>}></Route>
          <Route path='/allprojects/*' element={<ProjectDetails/>}></Route>
          <Route path='/venture' element={<VentureProj/>}></Route>
          <Route path='/venture/*' element={<ProjectDetails/>}></Route>
        </Routes>
      </Box>
    </Box>

  )
}

export default Dashboard