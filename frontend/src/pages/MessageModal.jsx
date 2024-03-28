import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { theme } from '../components/Theme';
import CloseIcon from '@mui/icons-material/Close';
import AlbumIcon from '@mui/icons-material/Album';
// import { GET_MESSAGE_RESET } from '../constants/messageContants';
// import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: `2px solid ${theme.palette.primary.light}`,
  borderRadius: '5px',
  boxShadow: 24,
  width: 400,
  [theme.breakpoints.down('sm')]: {
    width: '80vw'
  },
  p: 3,
  title: {
    fontFamily: 'Lato',
    fontSize: '2rem',
    fontWeight: '600',
  },
  cover: {
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: '-1.5rem',
    right: '-1.5rem',
    cursor: 'pointer',
    color: 'red',
    borderRadius: '2px',
    bgcolor: 'rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s',
    '&:hover': {
      bgcolor: 'rgba(0, 0, 0, 0.6)',
    }
  },
  dot: {
    fill: theme.palette.primary.main
  },
};

export default function MessageModal({ message, open, handleOpen, handleClose }) {
  
  // const [modal, setModal] = React.useState(true);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const dispatch = useDispatch();
  
  const handleModal = () => {
    handleClose();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={style.cover}>
            <CloseIcon sx={style.close} onClick={handleModal} />
          </Box>
          <Grid item container  justifyContent='center'>
            <Typography  align='center' variant="6" sx={style.title}>
              {message && message.title}
            </Typography>
          </Grid>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AlbumIcon sx={style.dot} /> {' '} {message && message.message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}