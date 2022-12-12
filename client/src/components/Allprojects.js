import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid } from '@mui/material';
import sxprop from './sxStyle';
import Cards from './card';

const Allprojects = () => {
    
  return (
    <div>
        <Stack direction="row" spacing={2} sx={sxprop.buttongrpsx}>
            <Button variant='outlined' sx={sxprop.buttonsx}>Upcoming IDO</Button>
            <Button variant='outlined' sx={sxprop.greybtnsx}>Ended IDO</Button>
            <Button variant='outlined' sx={sxprop.greybtnsx}>Insured Projects</Button>
          </Stack>

          <Box sx={sxprop.headingboxsx}>
            <Typography variant='headingcon'>Upcoming Projects</Typography>
          </Box>
          <Grid container spacing={3}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => {
                return <Grid item xs={12} sm={4} key={key}>
                  <Cards />
                </Grid>
              })
            }

          </Grid>
    </div>
  )
}

export default Allprojects