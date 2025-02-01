import Typography from '@mui/material/Typography';
import Nav from './Nav';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Dashboard() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Nav />
      <Typography variant="h3" align="center" style={{"color": "#98abc4", marginTop:"5vh", fontWeight: "bold"}} >Dashboard</Typography>
      <Container component="main" maxWidth="xl" style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)', paddingBottom: '1%', backgroundColor: "white", borderRadius: "10px"}}>
        <Box
          sx={{
            marginTop: 4,
            paddingTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Typography>Work in Progress</Typography>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default Dashboard;
