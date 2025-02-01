import { useSelector, useDispatch } from 'react-redux';
import { loggedIn, loggedOut } from './slices/LoginSlice';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Nav from './Nav';
import Typography from '@mui/material/Typography';

export default function Logout(){  
  const dispatch = useDispatch()
  dispatch(loggedOut())

  return (
    <>
      <Nav />
      <Typography variant="h3" align="center" style={{"color": "#98abc4", marginTop:"5vh", fontWeight: "bold"}} >You have been logged out successfully</Typography>
    </>
  )

  return <></>
}

