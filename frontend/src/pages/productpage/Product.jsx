import React, {useEffect, useState, /*useMemo*/} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { prod } from './productUI';
import { useDispatch, useSelector } from 'react-redux';
import { singleProductAction } from '../../actions/productActions';
import Progress from '../../components/Progress';
import SnackBar from '../../components/Snackbar';
import { allPackagesAction, choosePackageAction } from '../../actions/packageActions';
import { theme } from '../../components/Theme';
import {cloneDeep} from 'lodash'
import Notification from '../../components/notification/Notification';
import Authenticated from '../../components/navbutton/Authenticated';

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [item, setItem ] = useState({});
  const [dd, setDd] = useState('');

  const singleProductReducer = useSelector(state => state.singleProductReducer);
  const { loading, product, error } = singleProductReducer
  
  const loginReducer = useSelector((state) => state.loginReducer)
  const { acilDetails } = loginReducer;

  const allPackagesReducer = useSelector((state) => state.allPackagesReducer);
  const { loading: loadingPK, packages, error:errorPK} = allPackagesReducer;

  const [packs, setPacks] = useState([])

  const params = useParams();

  const investmentType = (type, id) => {
    dispatch(choosePackageAction(type, id));

    navigate(`/pay-type/${id}`)
  }

  const selectItem = (type, id, i) => {
    setItem(type);
    setDd(id);
    const newPacks = cloneDeep(packs);
    const selectedPack = newPacks.filter((pack) => pack.selected)[0];
    const newSelected = newPacks[i];
    
    if (selectedPack) {
      selectedPack.selected = !selectedPack.selected;
    }
    
    newSelected.selected = !newSelected.selected;
    setPacks(newPacks);
  }

  const disableButton = (items) => {
    const active = items.filter((item) => item.selected === true);
    if (active.length) return false;
    return true;
  }
  
  useEffect(() => {
    if (packages.length <= 0) {
      dispatch(allPackagesAction())
    } else {
      setPacks(packages)
    }
    if (!product || (product._id !== params.id)) {
      dispatch(singleProductAction(params.id))
    }
  },[dispatch, params, product, packages])

  return (
    <Authenticated>
      <Box>
        {(loading || loadingPK) && <Progress />}
        {error && <SnackBar message={error} />}
        {errorPK && <SnackBar message={errorPK}/>}
        <Grid container direction='column' sx={prod}>
          <Grid item container justifyContent='space-between' sx={prod.direct}>
            <Box component={Link} to='/invest'>
              <ArrowBackIcon sx={{color: '#000000'}} />
            </Box>
            <Typography variant='h1' align='center'>{product.name}</Typography>
            { acilDetails && acilDetails && <Notification/> }
          </Grid>
          <Grid item container justifyContent='center' sx={{mb:'2rem'}} >
            <Grid item container xs={8} sm={5} md={3}>
              <Box component='img' src={product.img} width='100%'/>
            </Grid>
          </Grid>
          <Typography variant='h4' align='center'>Choose Package</Typography>
          <Grid item container sx={prod.packages}>
            {
              packs && packs.map((pack, index) => (
                <Grid item container direction='column' key={`${pack.packageType}`}
                  sx={{p: '1rem 2rem', borderRadius: '3px'}}
                  xs={6} md={4} className="portion"
                  onClick={() => {selectItem(pack, params.id, index)}}
                >
                  <Box sx={{fontSize:'1.8rem', fontWeight: '500', backgroundColor: pack.selected ? theme.palette.primary.light : null}}>&#8358;{pack && pack.amount && pack.amount.toLocaleString()}</Box>
                  <Typography variant='body1' sx={{fontSize: '1.8rem', fontWeight:'500'}}>
                    {pack.packageType}
                  </Typography>
                </Grid>
              ))
            }
            <Grid item container sx={prod.proceed} justifyContent='center'>
              <Button variant='contained' 
                onClick={() => investmentType(item, dd)}
                disabled={disableButton(packs)}
              >
                Proceed
              </Button>
            </Grid>
          </Grid>
          {
            acilDetails && acilDetails.isAdmin && (
            <Grid item container justifyContent='center' sx={prod.update}>
              <Grid component={Link} to='/admin-update-package'>
                Update Packages
              </Grid>
            </Grid>
            )
          }
        </Grid>
      </Box>
    </Authenticated>
  )
}

export default Product