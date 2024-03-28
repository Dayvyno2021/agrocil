import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { theme } from '../components/Theme';
import Notification from '../components/notification/Notification';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { placeOrderAction } from '../actions/orderActions';
import Progress from '../components/Progress';
import SnackBar from '../components/Snackbar';
import axios from 'axios';
import { myProfileAction } from '../actions/userActions';
import { CHOOSE_PACKAGE_RESET } from '../constants/packageConstants';
import Authenticated from '../components/navbutton/Authenticated';

const fc = {
  px: '5rem',
  py: '2rem',
  [theme.breakpoints.down('md')]: {
    px: '1rem'
  },
  mt: '2rem',
  minHeight: '85vh',
  direct: {
    mb: '2rem',
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
  arrow: {
    p: '.5rem',
    transition: 'all 0.4s',
    borderRadius: '5px',
    '&:hover': {
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
    }
  } ,
  logo: {
    '& img': {
      height: '5rem', 
      mb: '2rem'
    }
  },
  register2: {
  p: '0 1rem',
  '& .MuiTextField-root': {
    width: '100%',
    mb: '1rem',
  },
  '& .MuiInputBase-root': {
    },
    '& .MuiInputBase-input': {
      
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#6600ff'
      }
    },
    '& .MuiOutlinedInput-input': {
      
  },
    
  },
  btn: {
    textTransform: 'none',
    bgcolor: '#6600ff',
    opacity: '0.9',
    transition: 'all 0.3s',
    '&:hover': {
      bgcolor: '#6600ff',
      opacity: '1'
    }

  },
  invalid: {
    border: `1px solid lightGrey`,
    p: '15px',
    borderRadius: '5px',
    mb: '15px',
    fontWeight: '500'
  }
}

const Fincra = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ready, setReady] = React.useState(false);
  const [fincraKey, setFincraKey] = React.useState('');
  
  const loginReducer = useSelector((state) => state.loginReducer);
  const { acilDetails } = loginReducer;

  const choosePackageReducer = useSelector(state => state.choosePackageReducer);
  const { pack } = choosePackageReducer;

  const placeOrderReducer = useSelector((state) => state.placeOrderReducer);
  const { loading, orderDetails, error, success } = placeOrderReducer;

  const payment = () => {
    window && window.Fincra.initialize({
      key: fincraKey,
      amount: pack && pack.amount,
      currency: "NGN",
      customer: {
          name: `${acilDetails && acilDetails.lastname} ${acilDetails && acilDetails.firstname}`,
          email: acilDetails && acilDetails.email,
          phoneNumber: acilDetails && acilDetails.phone,
        },
    //Kindly chose the bearer of the fees
    feeBearer: "business",

      onClose: function () {
        alert("Transaction was not completed, window closed.");
      },
      onSuccess: function (data) {
        const reference = data.reference;
        dispatch(placeOrderAction({
          pack,
          paymentType: 'Fincra', 
          reference
        }));
      },
    });
  }

  const disablePayment = () => {
    if (!pack?.amount || !acilDetails?.firstname || !acilDetails?.lastname || !acilDetails?.email) return true;
    return false;
  }

  React.useEffect(() => {
    const fincraPay = () => {
      const script = document.createElement('script');
      script.src = "https://unpkg.com/@fincra-engineering/checkout@2.2.0/dist/inline.min.js";
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script)
    }

    setReady(true);
    const reactKey = async() => {
      const {data} = await axios.get('/fincra-key');
      setFincraKey(data);
    }
    reactKey();
    setReady(false);

    if ((orderDetails && orderDetails._id) || success) {
      localStorage.removeItem('pack');
      dispatch(myProfileAction())
      dispatch({type: CHOOSE_PACKAGE_RESET})
      navigate(`/order/${orderDetails && orderDetails._id}`)
    } else {
      if (!success) {
        fincraPay();
      }
    }
  },[dispatch, navigate, orderDetails, pack, success])

  return (
    <Authenticated>
      <Box sx={{ minHeight: '85vh' }}>
        {(loading || ready) && <Progress />}
        {error && <SnackBar error={error} />}
        <Grid container direction='column' sx={fc}>
          <Grid item container justifyContent='space-between' sx={fc.direct}>
            <Box component={Link} sx={fc.arrow} to={`/pay-type/${params && params.id}`}>
              <ArrowBackIcon sx={{color: '#6600ff'}} />
            </Box>
            <Typography variant='h1' align='center'>{fc.name}</Typography>
            { acilDetails && acilDetails && <Notification/> }
          </Grid>
          <Grid item container sx={fc.logo} justifyContent='center'>
            <img src="https://files.readme.io/4176f8b-small-Fincra_Logo.png" alt="fincra"/>
          </Grid>
          <Grid item container direction='column' sx={fc.register2}>
            <Grid item container direction='row' justifyContent='center' >
              <Grid item container xs={12} md={8} sx={fc.invalid} >
                <Grid sx={{mr: '1rem'}}>
                  <strong><i>{`First Name:`}</i></strong>
                </Grid>
                <Grid >
                  {acilDetails && acilDetails.firstname}
                </Grid>
              </Grid>
            </Grid>
            <Grid item container direction='row' justifyContent='center' >
              <Grid item container xs={12} md={8} sx={fc.invalid} >
                <Grid sx={{mr: '1rem'}}>
                  <strong><i>{`Last Name:`}</i></strong>
                </Grid>
                <Grid >
                  {acilDetails && acilDetails.lastname}
                </Grid>
              </Grid>
            </Grid>
            <Grid item container direction='row' justifyContent='center' >
              <Grid item container xs={12} md={8} sx={fc.invalid} >
                <Grid sx={{mr: '1rem'}}>
                  <strong><i>{`Email:`}</i></strong>
                </Grid>
                <Grid >
                  {acilDetails && acilDetails.email}
                </Grid>
              </Grid>
            </Grid>
            <Grid item container direction='row' justifyContent='center' >
              <Grid item container xs={12} md={8} sx={fc.invalid} >
                <Grid sx={{mr: '1rem'}}>
                  <strong><i>{`Mobile:`}</i></strong>
                </Grid>
                <Grid >
                  {acilDetails && acilDetails.phone}
                </Grid>
              </Grid>
            </Grid>
            <Grid item container direction='row' justifyContent='center' >
              <Grid item container xs={12} md={8} sx={fc.invalid} >
                <Grid sx={{mr: '1rem'}}>
                  <strong><i>{`Amount:`}</i></strong>
                </Grid>
                <Grid >
                  &#8358;{pack && pack.amount && pack.amount.toLocaleString()}
                </Grid>
              </Grid>
            </Grid>
            <Grid item container  justifyContent='center'>
              <Grid item container justifyContent='end' xs={12} md={8}>
                <Button variant='contained' disabled={disablePayment()}
                  sx={fc.btn} onClick={payment}
                >
                  Complete Payment
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Authenticated>
  )
}

export default Fincra