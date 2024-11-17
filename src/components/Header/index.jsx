import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { Link, NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from 'features/Auth/components/Register';




export default function Header() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


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
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>PL</Link>
          </Typography>
          <NavLink to="/todos" style={{textDecoration: 'none', color: 'inherit'}}>
            <Button color="inherit" >Todo</Button>
          </NavLink>
          <NavLink to="/albums" style={{textDecoration: 'none', color: 'inherit'}}>
            <Button color="inherit">Albums</Button>
          </NavLink>
          <Button color="inherit" onClick={handleClickOpen}>  Register</Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={(event, reason) => {
            if (reason === "backdropClick") {
              return; // Prevent the dialog from closing
            }
            handleClose(); // Close the dialog for other reasons
          }}
        disableEscapeKeyDown
      >
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <Register/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

        </DialogActions>
      </Dialog>
    </Box>
  );
}
