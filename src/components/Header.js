import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import logo from '../img/humber_logo.png';
import olha from '../img/olha.jpeg';
import {useHistory} from "react-router";

const Header = () => {
  const pages = [{name: 'forecast', url: '/'}, {name: 'contacts', url: 'contacts'}];
  const history = useHistory();

  const handleNavMenu = (url) => {
    history.push(url);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} className="logo" alt="logo" />
        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={() => handleNavMenu(page.url)}
              style={{ color: 'white'}}
            >
              {page.name}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Avatar alt="Olha Holovina" src={olha} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
