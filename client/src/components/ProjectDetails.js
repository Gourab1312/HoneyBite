// to show detailed info of a particular projects
import React, { useState, useContext } from "react";
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
import UserContext from '../context/appContext';
import InvestModal from "./InvestModal";
import { TransactionContext } from "../context/TransactionContext";

const ProjectDetails = () => {
  const {
    currentAccount,
  } = useContext(TransactionContext);
  const context = useContext(UserContext);
  const { projectdetails } = context;
  const [isventure, setventure] = useState(true)
  const [open, setOpen] = useState(false)


  const handleModal = () => {
    if (currentAccount === '') {
      alert('Connect Wallet First')
    }
    else {
      setOpen(true)
    }

  }

  var investInfo = {
    id: projectdetails._id,
    totalToken: projectdetails.total_token,
    totalFund: projectdetails.total_fund,
    Name: projectdetails.name,
    tokenName: projectdetails.token_name
  }
  return (
    <Box sx={sxprop.headingboxsx}>
      {open && <InvestModal mod={{ open, setOpen, investInfo }} />}
      <Stack direction={'column'} spacing={4} sx={{
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>

        <Card sx={sxprop.headercardsx}>
          <CardContent>
            <Grid container spacing={1} sx={{ alignItems: 'center', marginBottom: '10px' }}>
              <Grid item xs={10}>
                <Typography variant="headingcon">{projectdetails.name}</Typography>
                <Stack direction={'column'}>
                  <Typography variant='captionmod'>${projectdetails.token_name}</Typography>
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
                {projectdetails.img_url == 'NONE' ? <Avatar sx={{ bgcolor: '#838588' }}>NO</Avatar> : <Avatar sx={{ bgcolor: '#838588' }} src={projectdetails.img_url} />}
              </Typography></Grid>
            </Grid>
            <Typography variant="body2" sx={{ margin: '10px', whiteSpace: 'pre-line' }} >
              {projectdetails.writeup}
            </Typography>
          </CardContent>
        </Card>
        <Box sx={sxprop.loadbox}><Button variant="outlined" sx={sxprop.buttonsx} onClick={handleModal}>Invest Now</Button></Box>

      </Stack>
      <Stack direction={'row'} spacing={4} sx={{ margin: '20px' }}>
        <Typography><Link to="info" style={{ textDecoration: 'none' }}>Project Details</Link></Typography>
        <Typography><Link to="metrics" style={{ textDecoration: 'none' }}>Metrics</Link ></Typography>
        <Typography><Link to="allocation" style={{ textDecoration: 'none' }}>Your Allocation</Link ></Typography>
      </Stack>
      <Divider variant="middle" sx={{ margin: '20px' }} />
      <Routes>
        <Route path='info' element={<ProjectInfo projectdetails={projectdetails} />}></Route>
        <Route path='metrics' element={<Metrics />}></Route>
        <Route path='allocation' element={<Allocation proj={{ tkn_name: projectdetails.token_name, pdt_id: projectdetails._id }} />}></Route>
        <Route path='bid' element={<YourBid />}></Route>

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