import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { NavLink } from 'react-router-dom';
export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CodeIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PL
          </Typography>
          <NavLink to="/todos">
            <Button color="inherit">Todo</Button>
          </NavLink>
          <NavLink to="/albums">
            <Button color="inherit">Albums</Button>
          </NavLink>
          <Button color="inherit">  Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
