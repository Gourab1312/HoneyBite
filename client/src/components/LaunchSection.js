import React, { useState } from 'react'
import { TextField, InputLabel, Grid, Button, Box, FormLabel } from '@mui/material'
import sxprop from './sxStyle';
import axios from "axios";

const LaunchSection = () => {
  const [pics, Setpics] = useState(null)
  const handledate = (e) => {
    var dateEntered = new Date(e.target.value);
    console.log(dateEntered.toISOString());
    return dateEntered.toISOString()
  }
  const [project, setProject] = useState({
    name: '',
    swap_rate: 0.0,
    token_name: '',
    total_fund: '',
    total_token: '',
    start_date: '',
    end_date: '',
    linkedln_url: '',
    website_url: '',
    telegram_url: '',
    writeup: '',
    img_url: 'NONE'
  })
  const uploadPhoto = (pics) => {
    if (pics === undefined) {
      console.log("please upload an image");
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Cryptic");
      data.append("cloud_name", "db1grdyly");
      return fetch("https://api.cloudinary.com/v1_1/db1grdyly/image/upload", {
        method: "post",
        body: data,
      }).then((res) => res.json())
        .then((data) => {


          console.log(data.url.toString());
          return data.url.toString();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      console.log('error occured');
      return;
    }
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    let uri = await uploadPhoto(pics)
    console.log(uri);
    project.img_url = uri;
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
          <Grid item sm={12}>
            <TextField name='title' multiline={true} required label="Project Details " InputLabelProps={{ shrink: true }} fullWidth onChange={(e) => { setProject({ ...project, writeup: e.target.value }) }} />
          </Grid>
          <Grid item sm={6}>
            <FormLabel>Upload Logo Of Company</FormLabel>
            <input type='file' accept='image/**' onChange={(e) => { Setpics(e.target.files[0]) }} ></input>
          </Grid>

        </Grid>

        <Box sx={sxprop.loadbox}>
          <Button variant='outlined' type='submit'>Launch IDO</Button>
        </Box>

      </form>
    </div>
  )
}

export default LaunchSection