import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Nav from './Nav';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';

var theme = createTheme();
theme = responsiveFontSizes(theme);

const LoginTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#98abc4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#98abc4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#98abc4',
    },
  },
});

export default function Newsletter() {
  var handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const top = isMobile? '40%':'60%';

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
  var sizes = isMobile? {marginLeft: '5vw', marginRight: '5vw', textAlign: "justify"}:{marginLeft: '15vw', marginRight: '15vw', textAlign: "justify"}

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Typography variant="h3" align="center" style={{"color": "#98abc4", marginTop:"5vh", fontWeight: "bold"}} >Our Newsletter</Typography>
      <Container 
        component="main" 
        maxWidth="xl" 
        style={containerStyle}
      >
        <Box
          sx={boxStyle}
        >
        <Box
          component="img"
          src="/newsletter_banner.jpeg"
          style={{
            zIndex: '1',
            width: '100%',
            height: '100%',
          }}
        >
        </Box>

          <Box
            sx={{
              paddingTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

          <Typography variant="subtitle1" style={sizes}>
            At Mindspace Matters Foundation we conduct Socio-Legal Studies : <b>Gender Studies</b> and present it in our newsletter every quarter.
            It is our aim to stay updated on matters that impact the society and their legal aspects.
            We hope to establish credence among our funding stakeholders as Subject Matter Experts in the arena the NGO services.<br/>
            The insights gained during the process of preparing the newsletter enables us to provide better exposure to the high school students while conducting workshops that empowers them to build critical thinking skills while debating civic and constitutional concepts .
            We endeavor to co create conscious citizens of the future thereby.
          </Typography>
        </Box>
      </Box>
      </Container>
      <Container 
        component="main" 
        maxWidth="xs" 
        style={{
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)', 
          paddingBottom: '1%', 
          backgroundColor: "white", 
          borderRadius: "10px",
          marginTop: '2%',
        }}
    >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, mt:2, bgcolor: "#98abc4" }}>
            <AssignmentIcon />
          </Avatar>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <LoginTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              style={{backgroundColor: "#98abc4"}}
            >
              Sign Up For Our Newsletter
            </Button>
          </Box>
        </Box>
      </Container>
      <Box style={{height: '10px'}}></Box>
    </ThemeProvider>
  );
}
