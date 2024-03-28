import * as React from 'react';
import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { theme } from './Theme';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const pop = {
  '& button': {
      borderRadius: '3px',
      // height: '2.5rem',
      textTransform: 'none',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      '&:hover': {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
      }
    },
      
  '.send':{
    ml: '1rem',
    // width: '3rem',
    // height: '3rem',
    transform: 'rotate(-20deg)'
  },
  input:{
    '& .MuiTextField-root': {

    },

    '& .MuiFilledInput-underline:after': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.primary.main,
    },
  },
  cover: {
    bgcolor: 'rgba(0,0,0,0.4)',
  },
  close: {
    color: 'rgba(250,0,0,0.8)',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s',
    '&:hover': {
      color: 'rgba(250,0,0,1)',
      transform: 'translateY(-1px)'
    }
  }
}

export default function InfoPopover({open, handleClose, anchorEl, sendInfo, message, handleInfo}) {
  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;
  // const [message, setMessage] = React.useState('');

  const disabled = () => {
    if (!message) return true;
    return false;
  }

  return (
    <div>

      <Popover
        id={'simple-popover'}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box>
          <Grid container justifyContent='end' sx={pop.cover}>
            <CloseIcon sx={pop.close} onClick={handleClose} />
          </Grid>
          <Grid item container alignItems='center' sx={pop} component='form' onSubmit={sendInfo}>
            <TextField variant="filled" id='message' label='Enter Message'
              sx={pop.input} onChange={handleInfo} value={message}
            />
            <Button type='submit' disabled={disabled()}>
                  <SendIcon className='send' sx={{
                    fill: `${message ? theme.palette.primary.main : 'grey'}`,
                    '&:hover': {
                      opacity: '0.8'
                    }
                  }}
                  />
            </Button> 
          </Grid>
        </Box> 
      </Popover>
    </div>
  );
}