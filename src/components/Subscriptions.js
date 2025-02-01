import Typography from '@mui/material/Typography';
import Nav from './Nav';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  styled
} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Pricing() {

  var submit = (evt) => {
    console.log(evt)
  }

  const Item = styled(Typography)(({ theme }) => ({
    color: 'black'
  }));

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  var size = isMobile?"h7":"h5"

  return (
    <>
    <ThemeProvider theme={theme}>
      <Nav />
      <Typography 
        variant="h3" 
        align="center" 
        style={{
          "color": "#98abc4", 
          marginTop:"5vh", 
          fontWeight: "bold"
        }} 
      >
        Subscriptions
      </Typography>
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
            marginTop: 4,
            paddingTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              minWidth: '60%'
            }}
          >
            <Paper style={{padding: "2%", maxWidth: "25%", textAlign: "center"}} elevation={4} >
              <Typography style={{backgroundColor: '#98abc4', color: "white"}} variant="h4">Option 1</Typography>
              <br />
              <Divider variant="middle" color="black" style={{height:'2px'}} />
              <br />
              <Grid container>
                <Grid item xs={5}>
                  <Item variant={size}><b> 2 </b></Item>
                </Grid>
                <Grid item xs={5} style={{textAlign: "left"}}>
                  <Item variant={size}>Linkedin</Item>
                </Grid>
                <Grid item xs={5}>
                  <Item variant={size}><b> 2 </b></Item>
                </Grid>
                <Grid item xs={5} style={{textAlign: "left"}}>
                  <Item variant={size}>Quora</Item>
                </Grid>
                <Grid item xs={5}>
                  <Item variant={size}><b> 1 </b></Item>
                </Grid>
                <Grid item xs={5} style={{textAlign: "left"}}>
                  <Item variant={size}>Medium</Item>
                </Grid>
              </Grid>
              <br />
              <Divider variant="middle" color="black" style={{height:'2px'}} />
              <br />
              <Typography variant={size}><b>₹2000/month</b></Typography>
              <Button
                variant="contained"
                sx={{ 
                  mt: 2, 
                }}
                style={{backgroundColor: "#98abc4"}}
              >
                Sign Up
              </Button>
            </Paper>
            <Paper style={{padding: "2%", maxWidth: "25%", textAlign: "center"}} elevation={4} >
              <Typography style={{backgroundColor: '#98abc4', color: "white"}} variant="h4">Option 2</Typography>
              <br />
              <Divider variant="middle" color="black" style={{height:'2px'}} />
              <br />
              <Grid container>
                <Grid item xs={5}>
                  <Item variant={size}><b> 2 </b></Item>
                </Grid>
                <Grid item xs={5} style={{textAlign: "left"}}>
                  <Item variant={size}>Linkedin</Item>
                </Grid>
                <Grid item xs={5}>
                  <Item variant={size}><b> 3 </b></Item>
                </Grid>
                <Grid item xs={5} style={{textAlign: "left"}}>
                  <Item variant={size}>Quora</Item>
                </Grid>
                <Grid item xs={5}>
                  <Item variant={size}><b> 1 </b></Item>
                </Grid>
                <Grid item xs={5} style={{textAlign: "left"}}>
                  <Item variant={size}>Medium</Item>
                </Grid>
              </Grid>
              <br />
              <Divider variant="middle" color="black" style={{height:'2px'}} />
              <br />
              <Typography variant={size}><b>₹4000/month</b></Typography>
              <Button
                variant="contained"
                sx={{ 
                  mt: 2, 
                }}
                style={{backgroundColor: "#98abc4"}}
              >
                Sign Up
              </Button>
            </Paper>
            <Paper style={{padding: "2%", maxWidth: "25%", textAlign: "center"}} elevation={4} >
              <Typography style={{backgroundColor: '#98abc4', color: "white"}} variant="h4">Option 3</Typography>
              <br />
              <Divider variant="middle" color="black" style={{height:'2px'}} />
              <br />
              <Grid container>
                <Grid item xs={5}>
                  <Item variant={size}><b> 2 </b></Item>
                </Grid>
                <Grid item xs={5} style={{textAlign: "left"}}>
                  <Item variant={size}>Linkedin</Item>
                </Grid>
                <Grid item xs={5}>
                  <Item variant={size}><b> 4 </b></Item>
                </Grid>
                <Grid item xs={5} style={{textAlign: "left"}}>
                  <Item variant={size}>Quora</Item>
                </Grid>
                <Grid item xs={5}>
                  <Item variant={size}><b> 1 </b></Item>
                </Grid>
                <Grid item xs={5} style={{textAlign: "left"}}>
                  <Item variant={size}>Medium</Item>
                </Grid>
              </Grid>
              <br />
              <Divider variant="middle" color="black" style={{height:'2px'}} />
              <br />
              <Typography variant={size}><b>₹6000/month</b></Typography>
              <Button
                variant="contained"
                sx={{ 
                  mt: 2, 
                }}
                style={{backgroundColor: "#98abc4"}}
              >
                Sign Up
              </Button>
            </Paper>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default Pricing;
