import Typography from '@mui/material/Typography';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Carousel from "./Carousel";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Landing() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
    <ThemeProvider theme={theme}>
      <Nav />
      {/* { isMobile ? ( */}
      {/*   <> */}
      {/*   <> */}
      {/*     <Box */}
      {/*       component="img" */}
      {/*       src="/mobileheader.jpeg" */}
      {/*       style={{ */}
      {/*         zIndex: '-1', */}
      {/*         width: '100%', */}
      {/*         height: '100%', */}
      {/*         top: '0', */}
      {/*         bottom: '0' */}
      {/*       }} */}
      {/*     > */}
      {/*     </Box> */}
      {/*   </> */}
      {/*   </> */}
      {/*   ):( */}
      {/*   <> */}
      {/*     <Box */}
      {/*       component="img" */}
      {/*       src="/header.jpeg" */}
      {/*       style={{ */}
      {/*         zIndex: '-1', */}
      {/*         width: '100%', */}
      {/*         height: '100%', */}
      {/*       }} */}
      {/*     > */}
      {/*     </Box> */}
      {/*   </> */}
      {/*   ) */}
      {/* } */}
    <Carousel />
    <Contact />
    <br/>
    </ThemeProvider>
    </>
  );
}

export default Landing;
