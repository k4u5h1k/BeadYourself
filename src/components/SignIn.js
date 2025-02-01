import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';
import Nav from './Nav';
import { loggedIn, loggedOut } from './slices/LoginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

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

function SignIn() {
  const dispatch = useDispatch()
  var isLoggedIn = useSelector(state => state.isLoggedIn)

  useEffect( 
    () => {console.log(isLoggedIn)},
    [isLoggedIn]
  )

  // var handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  //   dispatch(loggedIn());
  //   window.location.href="/#/";
  // };

  var handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    var response = await fetch('http://localhost:4000/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: data.get('email'), password: data.get('password')})
    })
    var response = await response.json()
    if (response["result"] == "success") { 
      dispatch(loggedIn());
      window.location.href="/#/";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Container 
        component="main" 
        maxWidth="xs" 
        style={{
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)', 
          marginTop: '15vh', 
          paddingBottom: '1%', 
          backgroundColor: "white", 
          borderRadius: "10px"
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, mt:2, bgcolor: "#98abc4" }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              style={{backgroundColor: "#98abc4"}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="#98abc4">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" color="#98abc4">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
