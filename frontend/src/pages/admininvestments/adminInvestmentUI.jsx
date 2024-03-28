import { theme } from "../../components/Theme";
export const adminIUI = {
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
    width: '90%',
    mx: 'auto',
    // m: 'rem 1rem',
    mb: '2rem',
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
    overflow: 'scroll',
  },
  '& .MuiTableHead-root': {
    '& th': {
      textAlign: 'center',
    }
  },
  create: {
    mb: '1rem',
    bgcolor: theme.palette.primary.main,
    textTransform: 'none',
    transition: '0.5s',
    '&:hover': {
      bgcolor: theme.palette.primary.dark
    }
  },
  excel: {
    pr: '5rem',
    mb: '1rem',
    '& a': {
      cursor: 'pointer',
      bgcolor: theme.palette.primary.light,
      borderColor: theme.palette.primary.main,
      borderRadius: '5px',
      p: '.5rem 1rem',
      mt: '1.5rem',
      color: '#FFF',
      textDecoration: 'none',
      transition: 'all 0.4s',
      '&:hover': {
        bgcolor: theme.palette.primary.dark
      }
    }
  }
}