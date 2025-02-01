import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Nav from './Nav';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

var theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Workshops() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  var sizes = isMobile? {marginLeft: '5vw', marginRight: '5vw', textAlign: "justify"}:{marginLeft: '15vw', marginRight: '15vw', textAlign: "justify"}

  var containerStyle={
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)', 
    paddingBottom: '1%', 
    backgroundColor: "white",
    borderRadius: "10px"
  }
  var boxStyle={
    marginTop: 4,
    paddingTop: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  return (
    <>
      <Nav/>
      <Typography variant="h3" align="center" style={{"color": "#98abc4", marginTop:"5vh", fontWeight: "bold"}} >Workshops</Typography>
      <Container 
        component="main" 
        maxWidth="xl" 
        style={containerStyle}>
        <Box
          sx={boxStyle}
        >
          <Box
            component="img"
            src="/workshop_banner.png"
            style={{
              zIndex: '1',
              width: '100%',
              height: '50vh',
              objectFit: 'cover',
              objectPosition: '100% 0'
            }}
          >
          </Box>
          <Typography variant="subtitle1" style={sizes}>
            <br/>
            We conduct Workshops to Train High School Students to Research for Debates at Model United Nations as a source of funding our NGO Reseach Projects.<br/>

            <b>Purpose</b><br/>
            Raise Conscious Civic Citizens of the future who have been enabled to engage in constitutional conversations that co-create impact.<br/>

            <b>Why is training necessary?</b><br/>
            Humans beings are not rational and are easily influenced by suggestions or information from friends or authorities.
            In debate training there are two strong opinions and each side tries to persuade the opponent to change his point of view by empowering their own arguments and finding weaknesses and inconsistencies in the arguments put forward by their opponent.<br/>

            Training in debates helps to develop critical thinking if you use it to raise questions to dispel uncertainty or inconsistency in the presented information or solution and look for the creative ideas.<br/>

            <b>What is critical thinking ?</b><br/>
            To put it simply, it is the ability to identify a problem, analyse information using facts, evaluate possible options to solve the problem, make a decision and communicate it out.

            The skill of critical thinking has been listed at the top of necessary skills for the jobs of the future in studies done by World economic forum, Forbes, Harvard business magazine and other business magazines.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
