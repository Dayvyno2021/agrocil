import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
// import CheckIcon from '@mui/icons-material/Check';
import { upd } from './updateUserUI';
import Progress from '../../components/Progress';
import SnackBar from '../../components/Snackbar';
import { updateUserAction } from '../../actions/userActions';
import { RESET_USER_UPDATE } from '../../constants/userConstants';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UpdateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const registerReducer = useSelector((state) => state.registerReducer);
  const { loading, acilDetails, error } = registerReducer;

  const updateUserReducer = useSelector(state => state.updateUserReducer);

  const {loading:loadingU, success, error: errorU} = updateUserReducer

  const [psw, setPsw] = useState('');
  const [pswValid, setPswValid] = useState('');

  const [cpassword, setCpassword] = useState('');
  const [cpValid, setCpValid] = useState('');

  const [phone, setPhone] = useState('');
  // const [fullname, setFullname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [account, setAccount] = useState('');
  const [bank, setBank] = useState('');
  
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

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({
      firstname,
      lastname,
      account,
      bank,
      psw, 
      phone, 
      id:acilDetails && acilDetails.id}))
  }

  useEffect(() => {
    if (success) {
      navigate(`/profile`);
      dispatch({type:RESET_USER_UPDATE})
    } else {
      setFirstname(acilDetails && acilDetails.firstname? acilDetails.firstname: '');
      setLastname(acilDetails && acilDetails.lastname? acilDetails.lastname: '');
      setAccount(acilDetails && acilDetails.account? acilDetails.account:'');
      setBank(acilDetails && acilDetails.bank? acilDetails.bank: '');
      setPhone(acilDetails && acilDetails.phone)
    }
  }, [navigate, success, dispatch, acilDetails])
  

  return (
    <Box sx={{minHeight: '85vh'}}>
      {(loading || loadingU) && <Progress />}
      {(error || errorU) && <SnackBar message={error || errorU}/>}
          <Grid item sx={upd.register1} justifyContent='center' container>
            <Box component={Link} to='/'>
              <Box component='img' src='/image/logo.png'/> 
            </Box>
          </Grid>
          <Grid item sx={upd.register1} justifyContent='center' container>
            <Typography variant='h2' sx={upd.update}>Update Profile</Typography>
          </Grid>
      <Grid sx={upd} container>
        <Grid md={6} item sx={upd.register} container direction='column'>
          <Grid item container direction='column' sx={upd.register2} component='form'
            onSubmit={handleUpdate}
          >
            <Grid item container direction='row' >
              <Grid item container xs={12} justifyContent='center'>
                <PersonIcon sx={{mr: '1.5rem'}} />
                <Box >{acilDetails && acilDetails.username} </Box>
              </Grid>
            </Grid>

            <Grid item container alignItems='center'>
              <Grid item container xs={12}>
                <PersonIcon sx={upd.icon}/>
                <TextField variant="outlined" type='text' name='firstname' id='firstname'
                  label="First Name" autoComplete='true' value={firstname}
                  onChange={(e)=>setFirstname(e.target.value)}
                />   
              </Grid>
            </Grid>
            <Grid item container alignItems='center'>
              <Grid item container xs={12}>
                <PersonIcon sx={upd.icon}/>
                <TextField variant="outlined" type='text' name='lastname' id='lastname'
                  label="Last Name" autoComplete='true' value={lastname}
                  onChange={(e)=>setLastname(e.target.value)}
                />   
              </Grid>
            </Grid>
            <Grid item container alignItems='center'>
              <Grid item container xs={12}>
                <TextField variant="outlined" type='number' name='account' id='account'
                  label="Account Number" autoComplete='true' value={account}
                  onChange={(e)=>setAccount(e.target.value)}
                />   
              </Grid>
            </Grid>

            <Grid item container alignItems='center'>
              <Grid item container xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Bank</InputLabel>
                  <Select className="form-control " id="bank"
                    onChange={(e) => setBank(e.target.value)} label="Bank"
                  >
                    <MenuItem selected>Choose</MenuItem>
                    <MenuItem value="access">Access Bank</MenuItem>
                    <MenuItem value="citibank">Citibank</MenuItem>
                    <MenuItem value="diamond">Diamond Bank</MenuItem>
                    <MenuItem value="ecobank">Ecobank</MenuItem>
                    <MenuItem value="fidelity">Fidelity Bank</MenuItem>
                    <MenuItem value="firstbank">First Bank</MenuItem>
                    <MenuItem value="fcmb">First City Monument Bank (FCMB)</MenuItem>
                    <MenuItem value="gtb">Guaranty Trust Bank (GTB)</MenuItem>
                    <MenuItem value="heritage">Heritage Bank</MenuItem>
                    <MenuItem value="keystone">Keystone Bank</MenuItem>
                    <MenuItem value="polaris">Polaris Bank</MenuItem>
                    <MenuItem value="providus">Providus Bank</MenuItem>
                    <MenuItem value="stanbic">Stanbic IBTC Bank</MenuItem>
                    <MenuItem value="standard">Standard Chartered Bank</MenuItem>
                    <MenuItem value="sterling">Sterling Bank</MenuItem>
                    <MenuItem value="suntrust">Suntrust Bank</MenuItem>
                    <MenuItem value="union">Union Bank</MenuItem>
                    <MenuItem value="uba">United Bank for Africa (UBA)</MenuItem>
                    <MenuItem value="unity">Unity Bank</MenuItem>
                    <MenuItem value="wema">Wema Bank</MenuItem>
                    <MenuItem value="zenith">Zenith Bank</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>



            <Grid item container alignItems='center'>
              <Grid item container xs={12}>
                <Typography align='center' color='#FF6666' fontSize='0.9rem'>
                <LockOutlinedIcon sx={upd.icon}/>
                  Disregard if you don't want to change password
                </Typography>

                <TextField variant="outlined" type='password' name='password' id='password'
                  label="Password" autoComplete='true' value={psw}
                  onChange={validate} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  error={Boolean(pswValid)}
                  helperText= {pswValid}
                />   
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container xs={12}>
                <LockOutlinedIcon sx={upd.icon}/>
                <TextField variant="outlined" type='password' name='cpassword' id='cpassword'
                  label="Confirm Password" autoComplete='true' value={cpassword}
                  onChange={validate} error={Boolean(cpValid)}
                  helperText={cpValid}
                />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container xs={12}>
                <PhoneIcon sx={upd.icon} />
                <TextField variant="outlined" type='tel' name='phone' id='phone'
                  label="Phone Number" autoComplete='true' value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item container sx={{ mb: '1rem' }} >
              <Grid item container direction='column' xs={12}>
                <Button variant='contained' sx={upd.btn} type='submit'
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid md={6} item sx={upd.image} alignContent='center' container>
          <Box component='img' src='/image/login.jpg'/>
        </Grid>
      </Grid>
    </Box>
  )
}


export default UpdateUser;