import { theme } from "../../components/Theme";
export const invs = {
  header: {
    width: '100%',
    height: '7rem',
    bgcolor: 'rgba(0, 0, 0, 0.9)',
  },
  heading: {
    mt: '1rem',
    '&>h1': {
      fontSize: '3rem',
      fontFamily: 'Lato',
      fontWeight: '700'
    }
  },
  // '&>li:nth-of-type(odd)'
  table: {
    "& th, & td":{p: '0.5rem'},
    '& th': {
      color: '#FFFFFF',
      border: `1px solid #000000`,
    },
    '& td': {
      border: `1px solid ${theme.palette.primary.main}`,
    }
  },
  body: {
    '&:nth-of-type(even)': {
      bgcolor: theme.palette.common.lemon2
      
    }
  },
  container: {
    // bgcolor: theme.palette.common.lemon2
  },
  mainTable: {
    overflowY: 'scroll',
    p: '2rem 10rem',
    [theme.breakpoints.down('lg')]: {
      p: '2rem 8rem'
    },
    [theme.breakpoints.down('md')]: {
      p: '2rem 3rem'
    },
    [theme.breakpoints.down('sm')]: {
      p: '2rem 1rem'
    },
  },
  '& .MuiTableHead-root': {
    '& th': {
      textAlign: 'center'
    }
  },
  excel: {
    pr: '11rem',
    [theme.breakpoints.down('lg')]: {
      pr: '5rem'
    },
    '& .download-table-xls-button': {
      cursor: 'pointer',
      bgcolor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      borderRadius: '5px',
      height: '2.5rem',
      textTransform: 'none',
      p: '.5rem 1rem',
      m: '0.5rem',
      transition: 'all 0.3s',
      color: '#FFF',
      '&:hover': {
        color: '#FFF',
        bgcolor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
      }
    },
    '&>button': {
      borderRadius: '5px',
      height: '2.5rem',
      textTransform: 'none',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      '&:hover': {
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
      }
    },
    // '& #delete': {
    //   color: 'red',
    //   borderColor: 'red',
    //   ml: '0.5rem'
    // }
      
  },
  '.send':{
    ml: '1rem',
    width: '3rem',
    height: '3rem',
    transform: 'rotate(-20deg)'
  },
  input:{
    width: '80%',
    '& .MuiTextField-root': {

    },

    '& .MuiFilledInput-underline:after': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.primary.main,
    },
  }
}