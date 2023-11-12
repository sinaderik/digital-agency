import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logoImage from '../../assests/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Features', 'Support'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img style={{margin:"1rem 0rem", width:"150px", margin:"0.5rem auto"}} src={logoImage} alt="logo" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink style={{ width: "100%" }} to={`/${item}`}><ListItemText primary={item}> </ListItemText></NavLink>

              {/* <ListItemText primary={item} /> */}
            </ListItemButton>
          </ListItem>
        ))}
        <NavLink className="main-btn contact-mobile-btn" style={{ flexGrow: 1 }} to={`/contact`}>Contact us</NavLink>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  // const bgColor = "linear-gradient(270.67deg, rgba(246, 247, 255, 0.16) 0.61%, rgba(244, 251, 254, 0.69) 99.49%)"
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "white" }}>
        <Container fixed>
          <Toolbar>
            {/* drawer icon */}
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }}}
            >
              <MenuIcon style={{color:"black",fontSize:"30px"}} />
            </IconButton>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {/* website logo in md < sizes */}
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                <img src={logoImage} alt="logo" style={{ width: "150px" }} />
              </Typography>
              {/* links in in md < sizes */}
              <Box sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block', color: 'black' }, textAlign: "center" }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: 'black' }}>
                    <NavLink to={`/${item}`}>{item}</NavLink>
                  </Button>
                ))}

              </Box>

              <div style={{ flexGrow: 1, textAlign:"center" }} ><NavLink className="main-btn contact-btn" to={`/contact`}>Contact us</NavLink></div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
        <Typography>
        </Typography>
      </Box>
    </Box>
  );
}


export default DrawerAppBar;
