import * as React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { theme } from '../components/Theme';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Notification from '../components/notification/Notification';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Authenticated from '../components/navbutton/Authenticated';

const pt = {
    px: '5rem',
  [theme.breakpoints.down('md')]: {
    px: '1rem'
  },
  mt: '2rem',
  minHeight: '85vh',
  direct: {
    mb: '4rem',
    px: '10rem',

    [theme.breakpoints.down('lg')]: {
      px: '5rem'
    },
    [theme.breakpoints.down('md')]: {
      px: '5rem'
    },
    [theme.breakpoints.down('sm')]: {
      px: '1rem'
    },
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    fontFamily: "Lato",
    [theme.breakpoints.down('md')]: {
      fontSize: '1.8rem'
    },
  },
  list: {
    '& a': {
      color: theme.palette.primary.dark,
      textDecoration: 'none',
      fontWeight: '400'
    }
  },
  pIcon: {
    color: theme.palette.primary.dark,
    pr: '2rem'
  },
}

const PayType = () => {
  const params = useParams();

  const loginReducer = useSelector((state) => state.loginReducer);
  const { acilDetails } = loginReducer;

  return (
    <Authenticated>
      <Box sx={{minHeight: '85vh'}}>
        <Grid container direction='column' sx={pt}>
          <Grid item container justifyContent='space-between' sx={pt.direct}>
            <Box component={Link} to={`/invest/${params && params.id}`}>
              <ArrowBackIcon sx={{color: '#000000'}} />
            </Box>
            <Typography variant='h1' align='center'>{pt.name}</Typography>
            { acilDetails && acilDetails && <Notification/> }
          </Grid>
          <Typography sx={pt.heading} align='center'>Select Payment Method</Typography>
          <List sx={pt.list}>
            <ListItem>
              <AccountBalanceWalletIcon sx={pt.pIcon} />
              <Link to={`/fincra/${params.id}`} sx={pt.link}>Fincra</Link>
            </ListItem>
            <ListItem>
              <AccountBalanceWalletIcon sx={{pr: '2rem', fill: 'grey'}} />
              <Typography sx={{color: 'lightgrey'}}>Paystack</Typography>
            </ListItem>
          </List>
        </Grid>
        <script src="https://unpkg.com/@fincra-engineering/checkout@2.2.0/dist/inline.min.js"></script>
      </Box>
    </Authenticated>
  )
}

export default PayType