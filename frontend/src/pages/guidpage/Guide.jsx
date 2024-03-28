import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { theme } from '../../components/Theme';

const gui = {
  p: '2rem 2rem',
  nav: {
    mb: '5rem'
  },
  youtube: {
    display: 'flex',
    justifyContent: 'center',
    '& > iframe': {
      width:'820px',
      height: '315px',
      [theme.breakpoints.down('md')]: {
        width: '90%'
      },
    }
  }
}

const Guide = () => {
  return (
    <Box sx = {{minHeight: '85vh'}}>
      <Grid container>
        <Grid item container direction='column' sx={gui}>
            <Grid item sx={gui.nav} container justifyContent='left' alignItems='center'>
              <Box component={Link} to='/invest' sx={{p:'.5rem', transition: 'all .4s', ":hover": {boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}}>
                <ArrowBackIcon sx={{color: theme.palette.common.lemon1}} />
              </Box>
            </Grid>
          <Grid item container sx={gui.youtube}>
            <iframe  src='https://www.youtube.com/embed/HigbxcLmJCE'
              title='ACIL Guide'
              style={{border: 'none', borderRadius: '5px'}}
            >  
            </iframe>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Guide