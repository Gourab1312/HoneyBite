import React, { useState } from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { ThemeProvider } from '@emotion/react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material';
import customTheme from './dashStyle';
import sxprop from './sxStyle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const drawerWidth = 300;

const Dashboard = () => {
  const theme = createTheme(customTheme)
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
          All Projects
        </Typography>
        <Typography variant="listfont" display="block" gutterBottom>
          AirDrop
        </Typography>
        <Typography variant="listfont" display="block" gutterBottom>
          Honey-Bite Venture
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
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
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
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
            sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Dashboard