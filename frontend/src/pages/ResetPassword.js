import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { theme } from '../components/Theme';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordAction } from '../actions/userActions';
import { Typography } from '@mui/material';
import Progress from '../components/Progress';
import SnackBar from '../components/Snackbar';
import { RESET_PASSWORD_RESET } from '../constants/userConstants';


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

const ResetPassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  
  const [psw, setPsw] = useState('');
  const [pswValid, setPswValid] = useState('');

  const [cpassword, setCpassword] = useState('');
  const [cpValid, setCpValid] = useState('');

  const parsed = queryString.parse(location.search);
  const buf = parsed.buf ? parsed.buf : '';
  const mail = parsed.mail ? parsed.mail : '';

  const resetPasswordReducer = useSelector((state) => state.resetPasswordReducer);
  const { loading, verdict, error } = resetPasswordReducer;

    const validate = (event) => {
    let valid;
    switch (event.target.id) {
      case 'password':
        setPsw(event.target.value);
        valid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(event.target.value);
        if (valid) {
          setPswValid('');
        } else {
          setPswValid("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        }
        break;
      
      case 'cpassword':
        setCpassword(event.target.value);
        if (psw===event.target.value) {
          setCpValid('');
        } else {
          setCpValid('Passwords must match');
        }
        break;
    
      default:
        break;
    }
  }

  const handleReset = (event) => {
    event.preventDefault();
    dispatch(resetPasswordAction({buf, mail, psw}))
    // console.log({buf, mail, psw})
  }

  const disableSubmit = () => {
    if (!psw || !cpassword) return true;
    return false;
  }

  useEffect(() => {
    if (verdict) {
      setShow(true);
      dispatch({ type: RESET_PASSWORD_RESET });
      setPsw('');
      setCpassword('');
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }
  },[dispatch, verdict, navigate])

  return (
    <Box sx={{ minHeight: '85vh', p: '1rem' }}>
      {loading && <Progress />}
      {error && <SnackBar message={error} />}
      {show && <SnackBar severity='success' message='Password reset successful'/>}
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
          <Typography sx={{ fontSize: '1.7rem', textAlign: 'center', color: 'grey.600' }}>
            Reset Password
          </Typography>
          <Grid item container direction='column' sx={fg.register2} component='form'
            onSubmit={handleReset}
          >
            <Grid item container alignItems='center'>
              <Grid item container xs={12}>
                <LockOutlinedIcon sx={fg.icon}/>
                <TextField variant="outlined" type='password' name='password' id='password'
                  placeholder="New Password" autoComplete='true' required value={psw}
                  onChange={validate} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  error={Boolean(pswValid)}
                  helperText= {pswValid}
                />   
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container xs={12}>
                <LockOutlinedIcon sx={fg.icon}/>
                <TextField variant="outlined" type='password' name='cpassword' id='cpassword'
                  placeholder="Confirm New Password" autoComplete='true' value={cpassword}
                  onChange={validate} error={Boolean(cpValid)}
                  helperText={cpValid}
                />
              </Grid>
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

export default ResetPassword