import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from '../Context/ProjContext'
import { Avatar, Divider, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import sxprop from './sxStyle';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, Route, Routes } from "react-router-dom";
import Metrics from "./Metrics";
import ProjectInfo from "./ProjectInfo";
import Allocation from "./Allocation";
import YourBid from "./YourBid";
import TeamPartners from "./TeamPartners";


const ProjectDetails = () => {
  const { projectdtls, setprojectdtls } = useContext(ProjectContext)
  const [isventure, setventure] = useState(true)
  useEffect(() => {
    if (Object.keys(projectdtls).length === 0) {
      setprojectdtls(JSON.parse(localStorage.getItem('projdtls')))
    }
  })


  console.log(projectdtls);
  return (
    <Box sx={sxprop.headingboxsx}>
      <Stack direction={'row'} spacing={4} sx={{
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>

        <Card sx={sxprop.headercardsx}>
          <CardContent>
            <Grid container spacing={1} sx={{ alignItems: 'center', marginBottom: '10px' }}>
              <Grid item xs={10}>
                <Typography variant="headingcon">{projectdtls.name}</Typography>
                <Stack direction={'column'}>
                  <Typography variant='captionmod'>${projectdtls.token_name}</Typography>
                  <Stack direction={'row'} spacing={1}>
                    <LanguageIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                    <TelegramIcon />
                    <TwitterIcon />
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={2}><Typography variant='cardhrdtxt'>
                <Avatar sx={{ bgcolor: '#838588' }}>H</Avatar>
              </Typography></Grid>
            </Grid>
            <Typography variant="body2" sx={{ margin: '10px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, doloremque exercitationem ab libero excepturi eligendi rerum aliquid iste, sapiente, laboriosam quis magni reiciendis quia harum aliquam placeat laudantium natus? Dicta!
            </Typography>
          </CardContent>
        </Card>
        <Button variant="outlined" sx={sxprop.buttonsx}>Invest Now</Button>
      </Stack>
      <Stack direction={'row'} spacing={4} sx={{ margin: '20px' }}>
        <Typography><Link to="info" style={{ textDecoration: 'none' }}>Project Details</Link></Typography>
        <Typography><Link to="teampartners" style={{ textDecoration: 'none' }}>Team & Partners</Link ></Typography>
        <Typography>Metrics</Typography>
        <Typography>Your Allocation</Typography>
        {isventure && <Typography><Link to="bid" style={{ textDecoration: 'none' }}>Your Bid</Link></Typography>}
      </Stack>
      <Divider variant="middle" sx={{ margin: '20px' }} />
      <Routes>
        <Route path='info' element={<ProjectInfo projectdtls={projectdtls} />}></Route>
        <Route path='/allprojects/projectdetails/metrics' element={<Metrics />}></Route>
        <Route path='/allprojects/projectdetails/allocation' element={<Allocation />}></Route>
        <Route path='bid' element={<YourBid />}></Route>
        <Route path='teampartners' element={<TeamPartners />}></Route>

      </Routes>
      <Accordion sx={sxprop.sxfaq}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='cardhrdtxt'>Project FAQs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1} direction="column" sx={{ marginTop: "20px", marginLeft: "20px" }}>
            <Typography variant="listfont" display="block" gutterBottom>
              What is Muon Network ?
            </Typography>
            <Typography variant="listfont" display="block" gutterBottom>
              What makes Muon Network Unique?
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default ProjectDetails