import React, { useState } from 'react'
import { TextField, InputLabel, Grid, Button } from '@mui/material'
import axios from "axios";

const LaunchSection = () => {
  const handledate = (e) => {
    var dateEntered = new Date(e.target.value);
    console.log(dateEntered.toISOString());
    return dateEntered.toISOString()
  }
  const [project, setProject] = useState({
    name: '',
    swap_rate: '',
    token_name: '',
    total_fund: '',
    total_token: '',
    start_date: '',
    end_date: '',
    linkedln_url: '',
    website_url: '',
    telegram_url: ''
  })

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/addproject', project).then((res) => {
      console.log(res);
    })
    console.log(project);
  }
  return (

    <div>LaunchSection
      <form onSubmit={handlesubmit}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <TextField name='title' required label="Name" defaultValue="eg:- WeWay" fullWidth onChange={(e) => { setProject({ ...project, name: e.target.value }) }} />
          </Grid>
          <Grid item sm={6}>
            <TextField name='Token Name' required label="Token Name" defaultValue="eg:- WEW" fullWidth onChange={(e) => { setProject({ ...project, token_name: e.target.value }) }} />
          </Grid>
          <Grid item sm={6}>
            <TextField name='Fund' required label="Total Fund in $" fullWidth type={'number'} onChange={(e) => { setProject({ ...project, total_fund: e.target.value }) }} />
          </Grid>
          <Grid item sm={6}>
            <TextField name='Fund' required label="Swap rate in BUSD" fullWidth type={'number'} onChange={(e) => { setProject({ ...project, swap_rate: e.target.value }) }} />
          </Grid>
          <Grid item sm={6}>
            <TextField name='No of Token' required label="No of Token" fullWidth type={'number'} onChange={(e) => { setProject({ ...project, total_token: e.target.value }) }} />
          </Grid>
          <Grid item sm={6}>
            <TextField name='Fund' required InputLabelProps={{ shrink: true }} label="Starting Date" fullWidth type={'date'} onChange={(e) => { setProject({ ...project, start_date: handledate(e) }) }} />
          </Grid>
          <Grid item sm={6}>
            <TextField name='Fund' required InputLabelProps={{ shrink: true }} label="Ending Date" fullWidth type={'date'} onChange={(e) => { setProject({ ...project, end_date: handledate(e) }) }} />
          </Grid>
          <Grid item sm={6}>
            <TextField name='title' required label="LinkedIn Url" InputLabelProps={{ shrink: true }} fullWidth onChange={(e) => { setProject({ ...project, linkedln_url: e.target.value }) }} />
          </Grid>
          <Grid item sm={6}>
            <TextField name='title' required label="Website Url" InputLabelProps={{ shrink: true }} fullWidth onChange={(e) => { setProject({ ...project, website_url: e.target.value }) }} />
          </Grid>
          <Grid item sm={6}>
            <TextField name='title' required label="Telegram Channel" InputLabelProps={{ shrink: true }} fullWidth onChange={(e) => { setProject({ ...project, telegram_url: e.target.value }) }} />
          </Grid>
        </Grid>

        <Button variant='outlined' type='submit'>Launch IDO</Button>
      </form>
    </div>
  )
}

export default LaunchSection