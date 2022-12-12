import React, { useContext, useEffect } from "react";
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


const ProjectDetails = () => {
  const { projectdtls, setprojectdtls } = useContext(ProjectContext)
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
      <Stack direction={'row'} spacing={4} sx={{margin:'20px'}}>
        <Typography>Project Details</Typography>
        <Typography>Team & Partners</Typography>
        <Typography>Metrics</Typography>
        <Typography>Your Allocation</Typography>
      </Stack>
      <Divider variant="middle" sx={{ margin: '20px' }} />
      <Grid container spacing={5} sx={{margin:'2px'}}>
        <Grid item xs={12} sm={6} >
          <Stack direction={'column'}>
            <Typography variant='cardhrdtxt'>
              IDO INFORMATION
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="body2">FCFS opens</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">dates</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Early Access</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">dates</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">FCFS closes</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Dates</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Swap Rates</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">0.02BUSD</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Total Raises</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">$30000</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Access Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Private</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction={'column'}>
            <Typography variant='cardhrdtxt'>
              TOKEN INFORMATION
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="body2">Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">{projectdtls.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Token Symbol</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">{projectdtls.token_name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Total Supply</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">5000000</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Vesting</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">15% TGE, then 17% each month</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
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