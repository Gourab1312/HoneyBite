// This components is used along with Airdrop componets for card view 
import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography';
import sxprop from './sxStyle';
import { Avatar, Grid, Stack } from '@mui/material';
import Chip from '@mui/material/Chip';


const AirdropCards = ({ ido }) => {
    return (
        <Card sx={sxprop.customcardsx}>
            <Stack sx={{ alignItems: 'center' }}><Chip label="AIRDROP PROJECT" sx={{ backgroundColor: '#466b59', color: 'white', fontFamily: 'Open Sans' }} /></Stack>

            <CardContent>
                <Grid container spacing={1} sx={{ alignItems: 'center', marginBottom: '10px' }}>
                    <Grid item xs={10}><Typography variant='cardhrdtxt'>
                        {ido.name}
                    </Typography>
                        <Stack direction={'column'}>
                            <Typography variant='captionmod'>${ido.token_name}</Typography>
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
                <Grid container spacing={1}>
                    <Grid item xs={9}><Typography variant='listfont'>
                        Starting Date
                    </Typography></Grid>
                    <Grid item xs={3}><Typography variant='accordianhead'>
                        Dec 12,2022
                    </Typography></Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default AirdropCards