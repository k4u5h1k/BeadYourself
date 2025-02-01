import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Nav from './Nav';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Faq() {
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

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  var sizes = isMobile? {marginLeft: '5vw', marginRight: '5vw', textAlign: "justify"}:{marginLeft: '15vw', marginRight: '15vw', textAlign: "justify"}

  return (
    <>
      <Nav/>
      <Typography variant="h3" align="center" style={{"color": "#98abc4", marginTop:"5vh", fontWeight: "bold"}} >FAQs</Typography>
      <Container 
        component="main" 
        maxWidth="xl" 
        style={containerStyle}>
        <Box
          sx={boxStyle}
        >
          <Box
            component="img"
            src="/banner.png"
            style={{
              zIndex: '1',
              width: '100%',
              height: '100%',
            }}
          >
          </Box>
          <Typography variant="subtitle1" style={{marginTop: '5vh', ...sizes}}>
            <b>Q1. What is Model United Nations ?</b><br/>

            Model United Nations, also known as Model UN or MUN, is an extra-curricular activity in which students typically roleplay delegates to the United Nations and simulate UN committees. This activity takes place at MUN conferences, which is usually organized by a high school or college MUN club.<br/><br/>

            <b>Q2. What is the purpose of MUN?</b><br/>

            The Model United Nations is a series of programs run throughout the country and the world with the goals of furthering understanding about the United Nations, educating participants about world issues and promoting peace and the work of the United Nations through cooperation and diplomacy.<br/><br/>

            <b>Q3. What are the benefits of MUN?</b><br/>

            There are many benefits you will gain by joining MUN Conference.<br/>

            * Meet new people and new places.<br/>
            * Public Speaking.<br/>
            * Become acquainted with global issues.<br/>
            * Diplomacy and negotiation skill.<br/> 
            * Enhance your leadership skill.<br/> 
            * Help participant get into a college or find a job.<br/><br/>

            <b>Q4. How can the MindspaceMatters Foundation conduct workshops at your High School.</b><br/>

            The entry level at MUN is Grade 8 onwards.<br/>
            The school can identify intrested participants in the Grade 6th itself as the conceptual understanding goes deeper than the social studies syllabus and needs advanced preparation to meet the standards expected at such inter school competition where the participants come from across the state or country.<br/><br/>

            <b>Q5. Where is the workshop conducted ?</b><br/>

            In the school premises, after school hours once a week for a period of 6 months before moving to the next level.
            There are 4 levels in total to reach the intense competitive standards at the entry level of Grade 8th<br/><br/>

            <b>Q6. How does one register?</b><br/>

            There are two types of registration .<br/>
            (1) Individual (online mode)<br/>
            (2) Group (of 5 selected participants)<br/>
            Registration through email at info@mindspacematters.com<br/><br/>

            <b>Q7. What is the workshop fees structure.</b><br/>

            It's Rs.700 per participant per session to be paid in advance for 12 sessions.<br/>

          </Typography>
        </Box>
      </Container>
    </>
  );
}
