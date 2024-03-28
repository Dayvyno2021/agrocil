import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/headerComp/Header";
import { adminUsersAction, deleteUserAction, profileAction, sendInfoAction } from "../../actions/userActions";
import { allMessageAction, deleteMessageAction } from "../../actions/messsageActions";
import Progress from "../../components/Progress";
import SnackBar from "../../components/Snackbar";
import PhoneIcon from '@mui/icons-material/Phone';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useLocation } from "react-router-dom";
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { theme } from "../../components/Theme";
import InfoPopover from '../../components/InfoPopover'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import { invs } from "./aminInvestorUI";
import TextField from "@mui/material/TextField";
import { ALL_MESSAGE_RESET } from "../../constants/messageContants";
import InvestorSearch from "../../components/InvestorSearch";
import queryString from 'query-string';

const AdminInvestors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [see, setSee] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [assure, setAssure] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(event => event)
  const [id, setId] = useState('');
  const [info, setInfo] = useState('');

  const parsed = queryString.parse(location.search);
  const { username, start, end } = parsed;

  const loginReducer = useSelector((state) => state.loginReducer);
  const { acilDetails } = loginReducer;

  const adminUsersReducer = useSelector((state) => state.adminUsersReducer);
  const { loading, investors, error } = adminUsersReducer;

  const deleteUserReducer = useSelector((state) => state.deleteUserReducer);
  const { loading: loadingD, del, error: errorD } = deleteUserReducer;

  const allMessageReducer = useSelector((state)=>state.allMessageReducer);
  const { loading: loadingM, error: errorM, mes } = allMessageReducer;

  const deleteMessageReducer = useSelector((state)=>state.deleteMessageReducer);
  const { loading: loadingDel, error: errorDel } = deleteMessageReducer;

  const sendInfoReducer = useSelector((state) => state.sendInfoReducer);
  const { loading: loadingSend, error: errorSend, success: successSend } = sendInfoReducer;

  const handleOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover(true);
    setId(id)
  }

  const handleClose = () => {
    setOpenPopover(false);
  }

  const handleInfo = (e) => {
    setInfo(e.target.value);
  }

  const sendInfo = (event) => {
    event.preventDefault();
    dispatch(sendInfoAction({ info, id }));
    handleClose();
  }


  const labels = [
    {label: 'Home', link:'/', acilDetails: false},
    { label:"About", link: '/about', acilDetails: false},
    { label:"Invest", link: "/invest", acilDetails: false},
    { label: "Contact Us", link: "#contactus", acilDetails: false },
    {label: "Profile", link:`/profile`, acilDetails: !acilDetails},
    {label: "Register", link:"/register", acilDetails: acilDetails},
    {label: "Login", link:"/login", acilDetails: acilDetails},
    { label: "Logout", link: "/", acilDetails: !acilDetails },
    {acilDetails: true},
    {acilDetails: true},
    {acilDetails: true},
    {acilDetails: true},
    {acilDetails: true},
    
  ]

  const labels1 = [
    {label: 'Home', link:'/', acilDetails: false},
    { label:"About", link: '/about', acilDetails: false},
    { label:"Invest", link: "/invest", acilDetails: false},
    { label: "Contact Us", link: "#contactus", acilDetails: false },
    {label: "Profile", link:`/profile`, acilDetails: !acilDetails},
  ]

  const makeAdmin = (id) => {
    dispatch(profileAction(id));
    navigate(`/update-profile/${id}`)
  }

  const deleteUser = (id) => {
    if (window.confirm("Do you want to delete investor?")) {
      dispatch(deleteUserAction(id));
    }
  }

  const getDate = (time) => {
    const d = new Date(time);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${day}-${month}-${year}`
  }

  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(allMessageAction({ message, title }));
  }

  const disabled = () => {
    if (!message || !title) return true;
    return false;
  }

  const handleDelete = () => {
    if (window.confirm('Do you want to delete update')) {
      dispatch(deleteMessageAction());
      window.alert('Update has been deleted');
    }
  }

  useEffect(() => {
    if (acilDetails && acilDetails.isAdmin === true) {
      if (mes) {
        setAssure(true);
        setMessage('');
        setTitle('')
        dispatch({ type: ALL_MESSAGE_RESET });
      }
      if (successSend) {
        setInfo('');
      }
      dispatch(adminUsersAction({username, start, end}));
    } else {
      navigate('/')
    }
  }, [dispatch, acilDetails, del, navigate, mes, successSend, username, start, end])

  return (
    <Box sx={{ minHeight: '85vh' }}>
      {(loading || loadingD || loadingM || loadingDel || loadingSend) && <Progress />}
      {(error || errorD || errorM || errorDel || errorSend) && <SnackBar message={error || errorD || errorM || errorDel || errorSend}/>}
      {assure && <SnackBar message='Message Successful' severity={'success'} />}
      <InfoPopover open={openPopover} handleClose={handleClose} anchorEl={anchorEl}
        message={info} sendInfo={sendInfo} handleInfo={handleInfo}
      />
      <Grid item container direction='column' sx={invs}>
        <Grid item xs={12} >
          <Box sx={invs.header}>
            <Header labels={labels} labels1={labels1} />
          </Box>
        </Grid>
        <Grid item xs={12} container justifyContent='center'  sx={invs.heading}>
          <Typography variant="h1">All Investors</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent='end' alignItems='center' sx={invs.excel}>
          <Button variant='outlined' onClick={()=>setSee(!see)}>
            <MessageIcon sx={{fill:theme.palette.primary.main, p:'0', mr: '0.5rem'}} />
            Update All
          </Button>
          <Button variant='outlined' id='delete'
            onClick={handleDelete} 
            sx={{color: 'red !important' , borderColor:'red !important', ml: '0.5rem'}}
          >
            Delete Update
          </Button>
          <ReactHTMLTableToExcel
            className="download-table-xls-button"
            table='investorsTable'
            filename="Investors"
            sheet="investors"
            buttonText="Download xlx"
          />
        </Grid>
        {
          see && 
        <Grid item container component='form' justifyContent='center' onSubmit={sendMessage}>
          <Grid item xs={11} md={6} container alignItems='center'>
            <TextField variant="filled" id='title' label='Enter Title'
              rows={4} sx={invs.input} onChange={(e)=>setTitle(e.target.value)} value={title}
            />
            <TextField variant="filled" id='message' label='Enter Message' multiline
              rows={4} sx={invs.input} onChange={(e)=>setMessage(e.target.value)} value={message}
            />
            <Button type='submit' disabled={disabled()}>
                  <SendIcon className='send' sx={{
                    fill: `${(message && title) ? theme.palette.primary.main : 'grey'}`,
                    '&:hover': {
                      opacity: '0.8'
                    }
                  }}
                  />
            </Button> 
          </Grid>
        </Grid>
        }
        <Grid item container >
          <InvestorSearch/>
        </Grid>
        <Grid item container justifyContent='center' direction='column' sx={invs.mainTable}>
          
          <Box sx={invs.table}>
            <TableContainer component={Paper}>
              <Table sx={{width:'100%'}} id='investorsTable'>
                <TableHead sx={{bgcolor: '#000000'}}>
                  <TableRow >
                    <TableCell>Ind.</TableCell>
                    <TableCell>Usernames</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align="left">RefCode</TableCell>
                    <TableCell align="left"><PhoneIcon color='success' /></TableCell>
                    <TableCell align="left">Admin?</TableCell>
                    <TableCell align="left">Created</TableCell>
                    <TableCell align="left">Updated</TableCell>
                    <TableCell align="left">Edit</TableCell>

                    <TableCell align="left">Mes.</TableCell>

                    <TableCell align="left">Del</TableCell>
                  </TableRow>
                </TableHead>
                {investors && investors.map((investor, i) => (
                  <TableBody key={investor && investor._id} sx={invs.body}>
                    <TableRow>
                      <TableCell align="left">{i+1}</TableCell>
                      <TableCell align="left">{investor && investor.name}</TableCell>
                      <TableCell align="left">{investor && investor.firstname}</TableCell>
                      <TableCell align="left">{investor && investor.lastname}</TableCell>
                      <TableCell align="left">{investor && investor.email}</TableCell>
                      <TableCell align="left">{investor && investor.refCode}</TableCell>
                      <TableCell align="left">{investor && investor.phone}</TableCell>
                      <TableCell align="left">
                        {
                          investor && investor.isAdmin ?
                          (<CheckIcon sx={{ color: 'green' }} />)
                          :
                          (<ClearIcon sx={{color:'red'}}/>)
                        }
                      </TableCell>
                      <TableCell align="left">{getDate(investor && investor.createdAt)}</TableCell>
                      <TableCell align="left">{getDate(investor && investor.updatedAt)}</TableCell>
                      <TableCell align="left" sx={{cursor:'pointer'}}>
                        <EditIcon sx={{ color: '#808080' }}
                          onClick={() => makeAdmin(investor && investor._id)}
                        />
                      </TableCell>
                      <TableCell align="left" sx={{cursor:'pointer'}}>
                        <RateReviewIcon sx={{ color: '#808080' }}
                          onClick={(e)=>handleOpen(e, investor && investor._id)}
                        />
                      </TableCell>
                      <TableCell align="left" sx={{cursor:'pointer'}}>
                        <DeleteIcon sx={{ color: '#ff6666' }}
                          onClick={()=>deleteUser(investor && investor._id)}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))
                }
                </Table>
              </TableContainer>
          </Box>

        </Grid>
      </Grid>
    </Box>
  )
}

export default AdminInvestors;