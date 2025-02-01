import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
          // <ListItem onClick={() => setOpenDrawer(false)}>
          //   <ListItemText>
          //     <Button component={Link} to="/subscriptions" style={{borderRadius:'20px', color:'white'}}>Subscriptions</Button>
          //   </ListItemText>
          // </ListItem>
  return (
    <>
      <Drawer
        open={openDrawer}
        anchor="top"
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#98abc4",
          }
        }}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button component={Link} to="/" style={{borderRadius:'20px', color:'white'}}>Home</Button>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button component={Link} to="/blog" style={{borderRadius:'20px', color:'white'}}>Bookclub Blog</Button>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button component={Link} to="/newsletter" style={{borderRadius:'20px', color:'white'}}>Newsletter</Button>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button component={Link} to="/faqs" style={{borderRadius:'20px', color:'white'}}>FAQs</Button>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button component={Link} to="/workshops" style={{borderRadius:'20px', color:'white'}}>Workshops</Button>
            </ListItemText>
          </ListItem>
    {/*
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button component={Link} to="/signup" style={{borderRadius:'20px', color:'white'}}>Sign Up</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button component={Link} to="/login" style={{borderRadius:'20px', color:'white'}}>Login</Button>
            </ListItemText>
          </ListItem>
          */}
        </List>
      </Drawer>
      <IconButton sx={{color:'white'}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
