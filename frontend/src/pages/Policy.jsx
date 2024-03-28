import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { theme } from '../components/Theme';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import Notification from '../components/notification/Notification';


const policy = {
  p: '1rem 2rem',
  heading: {
    color: theme.palette.primary.dark,
    fontSize: '3rem',
    fontFamily: 'Lato',
    fontWeight: '700',
    fontStyle: 'italic',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem'
    }
  },
  subhead: {
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: '2rem',
    fontFamily: 'Lato',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]:{
      fontSize: '1.5rem'
    }
  },
  body: {
    fontStyle: 'italic',
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:visited, &:linked': {
        color: theme.palette.primary.main,
      }
    }
  }
}

const Policy = () => {
  const loginReducer = useSelector(state => state.loginReducer);
  const { acilDetails } = loginReducer;
  return (
    <Box minHeight='85vh' onLoad={window.scrollTo({top: 0, left: 0})}>
      <Grid container direction='column' sx={policy}>
        <Grid item sx={policy.logos} container justifyContent='space-between' alignItems='center'>
          <Box component={Link} to='/'>
            <ArrowBackIcon sx={{color: '#000000'}} />
          </Box>
          {
            acilDetails && acilDetails && <Notification/>
          }
        </Grid><br/>
        <Typography variant='h1' align='center' sx={policy.heading}>
          We are happy you also take Privacy serious
        </Typography><br/>
        <Typography align='center' sx={policy.follow}>
          <i>We are glad that just like us, you also take privacy seriously.</i>
        </Typography><br/>
        <Typography variant='h3' sx={policy.subhead}>Key Details</Typography>
        <Typography variant='body1' sx={policy.body}>
          This website privacy policy describes how ACIL protects and makes use of the
          information you give the company when you use this website. If you are asked
          to provide information when using this website, it will only be used in the
          ways described in this privacy policy. This policy is updated from time to
          time. The latest version is published on this page. This website privacy
          policy was updated on: 25th May, 2022 {'\n'}
          If you have any questions about this policy, please email or write
          to: <a href='mailto:support@agrocil.com'>support@agrocil.com</a> 
        </Typography><br/>
        <Typography variant='h3' sx={policy.subhead}>Introduction</Typography>
        <Typography variant='body1' sx={policy.body}>
          We gather and use certain information about individuals in order to provide
          products and services and to enable certain functions on this website. We
          also collect information to better understand how visitors use this website
          and to present timely, relevant information to them.
        </Typography><br/>
        <Typography variant='h3' sx={policy.subhead}>What data we gather</Typography>
        <Box variant='body1' sx={policy.body}>
          We may collect the following information:
          <ul style={{listStyleType:'square'}}>
            <li>Contact information including email address</li>
            <li>Demographic information, such as postcode, preferences and interests</li>
            <li>Website usage data</li>
            <li>Other information relevant to client enquiries</li>
            <li>Other information pertaining to special offers and surveys</li>
          </ul>
        </Box><br/>
        <Typography variant='h3' sx={policy.subhead}>How we use this data</Typography>
        <Box variant='body1' sx={policy.body}>
          Collecting this data helps us understand what you are looking from the
          company, enabling us to deliver improved products and services.
          Specifically, we may use data:
          <ul style={{listStyleType:'square'}}>
            <li>For our own internal records</li>
            <li>improve the products and services we provide</li>
            <li>To contact you in response to a specific enquiry</li>
            <li>To customise the website for you</li>
            <li>To send you promotional emails about products, services, offers and other things we think might be relevant to you.</li>
            <li>To send you promotional mailings or to call you about products, services, offers and other things we think might be relevant to you.</li>
            <li>To contact you via email, telephone or mail for market research reasons.</li>
          </ul>
        </Box><br/>
        <Typography variant='h3' sx={policy.subhead}>Cookies and how we use them</Typography>
        <Box variant='body1' sx={policy.body}>
          <strong>What is a Cookie?</strong>
          A cookie is a small file placed on your computer's hard drive. It enables our
          website to identify your computer as you view different pages on our website.
          Cookies allow websites and applications to store your preferences in order to
          present content, options or functions that are specific to you. They also enable
          us to see information like how many people use the website and what pages they
          tend to visit.How we use cookies
          We may use cookies to:	

          <ul style={{listStyleType:'square'}}>
            <li><strong>Analyse our web traffic using an analytics package.</strong> Aggregated usage data helps us improve the website structure, design, content and functions.</li>
            <li><strong>Identify whether you are signed in to our website.</strong> A cookie allows us to check whether you are signed in to the site.</li>
            <li><strong>Test content on our website.</strong> For example, 50% of our users might see one piece of content, the other 50% a different piece of content.</li>
            <li><strong>Store information about your preferences.</strong> The website can then present you with information you will find more relevant and interesting.</li>
            <li><strong>To recognise when you return to our website.</strong> We may show your relevant content, or provide functionality you used previously.
Cookies do not provide us with access to your computer or any information about you, other than that which you choose to share with us.</li>
          </ul>
        </Box><br/>
        <Typography variant='h3' sx={policy.subhead}>Controlling Cookies</Typography>
        <Typography variant='body1' sx={policy.body}>
          You can use your web browser’s cookie settings to determine how our website
          uses cookies. If you do not want our website to store cookies on your
          computer or device, you should set your web browser to refuse cookies.
          However, please note that doing this may affect how our website functions.
          Some pages and services may become unavailable to you. Unless you have
          changed your browser to refuse cookies, our website will issue cookies when
          you visit it. To learn more about cookies and how they are used,
          visit <a href="http://allaboutcookies.org" target="_blank" rel="noopener noreferrer">All About Cookies.</a> 
        </Typography><br/>
        <Typography variant='h3' sx={policy.subhead}>Security</Typography>
        <Typography variant='body1' sx={policy.body}>
          We will always hold your information securely. To prevent unauthorized disclosure
          or access to your information, we have implemented strong physical and electronic
          security safeguards. We also follow stringent procedures to ensure we work with
          all personal data in line with the Data Protection Act 1998.
        </Typography><br/>
        <Typography variant='h3' sx={policy.subhead}>Links from our site</Typography>
        <Typography variant='body1' sx={policy.body}>
          Our website may contain links to other websites. Please note that we have no
          control of websites outside the ACIL domain. If you provide information to a
          website to which we link, we are not responsible for its protection and privacy.
          Always be wary when submitting data to websites. Read the site’s data protection
          and privacy policies fully.
        </Typography>
      </Grid>
    </Box>
  )
}

export default Policy