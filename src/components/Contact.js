import { useState } from "react";
import Typography from '@mui/material/Typography';
import Nav from './Nav';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faQuora, faInstagram, faPinterest, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import useMediaQuery from '@mui/material/useMediaQuery';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Contact() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const icon_box_width = isMobile? '80vw':'60vw';
  var sizes = isMobile? {marginLeft: '5vw', marginRight: '5vw', textAlign: "justify"}:{marginLeft: '15vw', marginRight: '15vw', textAlign: "justify"}

  return (
    <>
    <ThemeProvider theme={theme}>
      {/* <Typography variant="h3" align="center" style={{"color": "#98abc4", marginTop:"5vh", marginBottom: "2vh", fontWeight: "bold"}} ></Typography> */}
      <br/>
      <Container 
        component="main" 
        maxWidth="xl" 
        style={{
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)', 
          paddingBottom: '1%', 
          backgroundColor: "white", 
          borderRadius: "10px"
        }}
      >
        <Box
          sx={{
            paddingTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          {/* <Typography variant="subtitle1" style={sizes}>
            <b>Mindspace Matters Foundation.<br/></b>

            <b>Address</b> : Wing - B, 2nd Floor, CoWrks, Birla Centurion, Pandurang Budhkar Marg, Century Mills, Worli, Mumbai, Maharashtra 400030 <br/>

            <b>Enquiry</b> : <a href="mailto:info@mindspacematters.com">info@mindspacematters.com</a> <br/>
          </Typography>
          <br/> */}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: icon_box_width
            }}
          >
            <a href="https://www.instagram.com/braceyourselves.co/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="#98abc4"/>
            </a>
            {/* <a href="https://www.quora.com/profile/Mira-Jadhav-1" target="_blank">
              <FontAwesomeIcon icon={faQuora} size="2x" color="#98abc4"/>
            </a>
            <a href="https://www.facebook.com/mindspace.matter/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#98abc4"/>
            </a>
            <a href="https://www.linkedin.com/in/mira-jadhav-5a3899163" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#98abc4"/>
            </a>
            <a href="https://pin.it/7L6NX8b" target="_blank">
              <FontAwesomeIcon icon={faPinterest} size="2x" color="#98abc4"/>
            </a>
            <a href="https://twitter.com/mindspace_matrs?t=HomoWqbIE6_X02ERY76OJg&s=09" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="#98abc4"/>
            </a> */}
        </Box>
      </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default Contact;
