import React from 'react'
import { Grid } from '@mui/material';
import AirdropCards from './AirdropCards';
import Box from '@mui/material/Box';
import sxprop from './sxStyle';
import Typography from '@mui/material/Typography';

const AirDrop = () => {
  var dummyjson = [
    {
      name: 'Skillet Verse',
      token_name: 'SKV'
    },
    {
      name: 'WeWay',
      token_name: 'WEW'
    },
    {
      name: 'Axes Metaverse',
      token_name: 'AXM'
    }
  ]
  return (
    <div>
      <Box sx={sxprop.headingboxsx}>
        <Typography variant='headingcon'>AirDrop Projects</Typography>
        <Typography variant="captionmod" color="grey" gutterBottom>
          Participate in Our Exclusive Airdrops
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{marginTop:'40px'}}>
        {
          dummyjson.map((value, index) => {
            return <Grid item xs={12} sm={4} key={index}>
              <AirdropCards ido={value} />
            </Grid>
          })
        }

      </Grid>
    </div>

  )
}

export default AirDrop