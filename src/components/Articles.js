import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Nav from './Nav';

export default function Articles() {
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
    <Container 
      component="main" 
      maxWidth="xl" 
      style={containerStyle}>
      <Box
        sx={boxStyle}
      >
      <Typography>Work in Progress</Typography>
      </Box>
    </Container>
  );
}
