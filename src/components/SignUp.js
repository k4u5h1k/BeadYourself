import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';
import Nav from './Nav';

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

function SignUp(props) {
  var handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Container 
        component="main" 
        maxWidth="xs" 
        style={{
          top: '50%',
          right: '50%',
          transform: 'translate(50%, -50%)',
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)', 
          paddingBottom: '1%', 
          backgroundColor: "white", 
          borderRadius: "10px",
          position: 'absolute',
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
          <Typography component="h1" variant="h5">
            Signup
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <LoginTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <LoginTextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone Number"
              type="number"
              id="phone"
              autoComplete="phone"
            />
            <LoginTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <LoginTextField
              margin="normal"
              required
              fullWidth
              name="confirm password"
              label="Confirm Password"
              type="password"
              id="Confirm password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              style={{backgroundColor: "#98abc4"}}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
