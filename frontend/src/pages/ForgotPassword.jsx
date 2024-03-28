import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { theme } from '../components/Theme';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordAction } from '../actions/userActions';
import Progress from '../components/Progress';
import SnackBar from '../components/Snackbar';
import { FORGOT_PASSWORD_RESET } from '../constants/userConstants';

const fg = {
   register: {
    mb: '2rem',
    justifyContent: 'center'
  },
  px: '10rem',
  [theme.breakpoints.down('sm')]: {
    px:'2rem'
  },
  register1: {
    py: '1rem',
    '& img': {
      width: '9rem',
      maxWidth: '9rem'
    }
  },
  register2: {
    p: '0 1rem',
    // '& div.MuiFormControl-root': {
      //   width: '100%',
      
      // },
      '& .MuiTextField-root': {
        width: '100%',
        mb: '1rem',

      },
    '& .MuiInputBase-root': {
        pl: '2rem',
        
      },
      '& .MuiInputBase-input': {
        
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.common.lemon1
        }
      },
      '& .MuiOutlinedInput-input': {
        
    },
      
      '&>div': {
        position: 'relative',
      },
    },
  icon: {
    position: 'absolute',
    top: '1rem',
    left: '0.5rem',
    color: 'grey.600'
  },
  image: {
      [theme.breakpoints.down('md')]: {
      display: 'none',
      mx: 'auto'
    },

    '& img': {
      width: '100%',
      height: '40rem',
      maxHeight: '40rem',
    }
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    textTransform: 'none',
    py: '0.5rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    }
  }
}

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordAction({email}));
  }
  const disableSubmit = () => {
    if (!email) return true;
    return false;
  }

  const forgotPasswordReducer = useSelector(state=>state.forgotPasswordReducer);
  const { loading, update, error } = forgotPasswordReducer;

  useEffect(() => {
    if (update) {
      setShow(true);
      setEmail('');
      dispatch({ type: FORGOT_PASSWORD_RESET });
    }
  }, [dispatch, update])
  
  return (
    <Box sx={{ minHeight: '85vh', p: '1rem' }}>
      {loading && <Progress />}
      {error && <SnackBar message={error} />}
      {show && <SnackBar message='Password reset token has been sent to your register email address' severity='success'/>}
      <Grid container direction='column'>
        <Grid item component={Link} to='/login'>
          <ArrowBackIcon sx={{color: '#000000'}} />
        </Grid>
      </Grid>
      <Grid sx={fg} container>
        <Grid md={6} item sx={fg.register} container direction='column'>
          <Grid item sx={fg.register1} justifyContent='center' container>
            <Box component={Link} to='/'>
              <Box component='img' src='/image/logo.png'/> 
            </Box>
          </Grid>
          <Grid item container direction='column' sx={fg.register2} component='form'
            onSubmit={handleSubmit}
          >
            <Grid item container direction='row' >
              <PersonIcon sx={fg.icon} />
              <TextField variant="outlined" type='text' name='email' id='email'
                placeholder="Enter email" autoComplete='true' value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item container sx={{mb:'1rem'}} direction='column'>
              <Button variant='contained' sx={fg.btn} type='submit' disabled={disableSubmit()}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid md={6} item sx={fg.image}>
          <Box component='img' src='/image/login.jpg'/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ForgotPassword