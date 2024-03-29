import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Link, useParams} from 'react-router-dom';
import Typography from "@mui/material/Typography";
import { theme } from '../../components/Theme';
import Notification from "../../components/notification/Notification";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from "react-redux";

const refer = {
  '& p': {
    fontSize: '2.3rem',
    fontFamily: 'Lato',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.8rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    },
  },
  '& a': {
    fontSize: '2rem',
    fontFamily: 'Lato',
    fontWeight: '500',
    color: theme.palette.primary.dark,
    ml: '1.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem'
    },
  },
  logos: {
    px: '10rem',
    mt: '1rem',
    mb: '5rem',
    [theme.breakpoints.down('md')]: {
      px: '5rem'
    },
    [theme.breakpoints.down('sm')]: {
      px: '3rem'
    },
    '& img': {
      width: '9rem',
      maxWidth: '9rem',
      [theme.breakpoints.down('md')]: {
        width: '7rem',
        maxWidth: '7rem',
      },
      [theme.breakpoints.down('sm')]: {
        width: '5rem',
        maxWidth: '5rem',

      }
    }
  },
}

const Referral = () => {
  const params = useParams();
  const loginReducer = useSelector(state => state.loginReducer);
  const { acilDetails } = loginReducer;


  return (
    <Box sx={{minHeight: '85vh'}}>
      <Grid container sx={refer} direction='column'>
        <Grid item sx={refer.logos} container justifyContent='space-between' alignItems='center'>
          <Box component={Link} to='/invest'>
            <ArrowBackIcon sx={{color: '#000000'}} />
          </Box>
          { acilDetails && acilDetails && <Notification/> }
        </Grid>
        <Grid item container justifyContent='center' alignItems='center'>
          <Typography variant='body1'>Your Referral link:</Typography>
          <Typography component='a'>
            {`${process.env.REACT_APP_BASE_URL}/register/?referral=${params.id}`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Referral