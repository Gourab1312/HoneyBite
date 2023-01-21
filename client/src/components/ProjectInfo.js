import React from 'react'
import {Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

const ProjectInfo = ({projectdetails}) => {
  return (
    <div><Grid container spacing={5} sx={{margin:'2px'}}>
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
            <Typography variant="body2">{projectdetails.start_date}</Typography>
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="body2">Early Access</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">dates</Typography>
          </Grid> */}
          <Grid item xs={6}>
            <Typography variant="body2">FCFS closes</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{projectdetails.end_date}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Swap Rates</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">1HL = 0.02BUSD</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Total Raises</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">${projectdetails.total_fund}</Typography>
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
            <Typography variant="body2">{projectdetails.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Token Symbol</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{projectdetails.token_name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Total Supply</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{projectdetails.total_token}</Typography>
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
  </Grid></div>
  )
}

export default ProjectInfo