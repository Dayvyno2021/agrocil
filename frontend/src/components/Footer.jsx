import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { theme } from './Theme';
import { Link } from 'react-router-dom';

const footerDown = {
  backgroundColor: "#000014",
  pl: '1rem',
  pr: '1rem',
  color: theme.palette.common.white,
  '& p': {
    [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
    },
  },
  '&>div': {
    backgroundColor: "#000014",
    p: '1rem 10rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      p: '1rem 2rem'
    },
    [theme.breakpoints.down('sm')]: {
      p: '1rem 0.5rem'
    },
    '&>p, & a': {
      color: theme.palette.common.white,
      textDecoration: 'none',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem'
      },
    },
    '& img': {
      width: '7rem',
      [theme.breakpoints.down('sm')]: {
        width: '4rem'
      },
    }
  }
}

const Footer = () => {

  return (
    <Box >
      <Grid item container sx={footerDown} direction='column'>
        <Grid item xs={12} container>
          <Box component={Link} to='/'>
            <Box component='img' src='/image/logo.png'></Box>
          </Box>
          <Typography variant='body1'>
            <Link to='/terms'>Terms & Conditions</Link>
          </Typography>
          <Typography variant='body1'>
            <Link to='/policy'>Privacy Policy</Link>
          </Typography>
        </Grid>
        <Typography variant='body1' align='center'>
          ACIL - Copyright &#169; 2022 - {new Date().getFullYear()} all rights reserved.
        </Typography>
      </Grid>
    </Box>
  )
}

export default React.memo(Footer)