import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import NavDrawer from './NavDrawer';

import { alpha, styled } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const NavButton = styled(Button)({
  '&.active': {
    backgroundColor: "#7b8a9e",
    borderRadius:'10'
  }
});

function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  var isLoggedIn = useSelector(state => state.isLoggedIn)
  const [LogState, setLogState] = useState(isLoggedIn);

  useEffect( 
    () => {setLogState(isLoggedIn)},
    [isLoggedIn]
  )

                // <NavButton sx={{mr:2}} component={NavLink} to="/subscriptions" color="inherit">Subscriptions</NavButton>

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{maxHeight: "50px", fontWeight: "10px", backgroundColor: '#98abc4',color: 'white', alignItems: 'center', justifyContent: 'center'}}>
        { isMobile ? (
            <NavDrawer /> 
          ):(
              <Toolbar sx={{minWidth: '300px'}}>
                <NavButton sx={{mr:2}} component={NavLink} to="/" color="inherit">Home</NavButton>
                <NavButton sx={{mr:2}} component={NavLink} to="/designs" color="inherit">Designs</NavButton>
                <NavButton sx={{mr:2}} component={NavLink} to="/customize" color="inherit">Customise</NavButton>
                <NavButton sx={{mr:2}} component={NavLink} to="/aboutus" color="inherit">About Us</NavButton>
                <Box sx={{ flexGrow: 1 }}>
                </Box>
                { /*LogState ? (
                    <>
                      <NavButton sx={{mr:2}} component={NavLink} to="/dashboard" color="inherit">Dashboard</NavButton>
                      <NavButton sx={{mr:2}} component={NavLink} to="/logout" color="inherit">Logout</NavButton>
                    </>
                  ):(
                    <>
                      <NavButton sx={{mr:2}} component={NavLink} to="/signup" color="inherit">Sign Up</NavButton>
                      <NavButton sx={{mr:2}} component={NavLink} to="/login" color="inherit">Login</NavButton>
                    </>
                  ) */
                }
                {/* <NavButton sx={{mr:2}} component={Link} href="https://medium.com/@mirajadhav.n" color="inherit">Blog</NavButton> */}

              </Toolbar>
          )
        }
      </AppBar>
    </Box>
  );
}

export default Nav;
