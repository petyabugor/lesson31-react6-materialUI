import React from 'react';
import Order from '../common/Order/Order';
import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { grey } from '@mui/material/colors';

const pages = ['Головна', 'Контакти', 'Відгуки'];

const showOrders = (props) => {
   let summa = 0;
   props.order.forEach((el) => (summa += Number.parseFloat(el.price)));
   return (
      <div>
         {props.order.map((el) => (
            <Order
               onDelete={props.onDelete}
               key={el.title}
               item={el}
            />
         ))}
         <p className="summa">Сумма: {summa.toFixed(2)} $ </p>
      </div>
   );
};
const showNothing = () => {
   return (
      <div className="empty">
         <h3>Корзина пуста!</h3>
      </div>
   );
};

const Header = (props) => {
   let [cartOpen, setCartOpen] = useState(false);

   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar
         position="static"
         sx={{ bgcolor: grey[200] }}
      >
         <Container maxWidth="lg">
            <Toolbar disableGutters>
               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     flexGrow: 1,
                     mr: 2,
                     display: { xs: 'none', md: 'flex' },
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.1rem',
                     color: 'black',
                     textDecoration: 'none',
                  }}
               >
                  Trendshop
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="black"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: 'block', md: 'none' },
                     }}
                  >
                     {pages.map((page) => (
                        <MenuItem
                           key={page}
                           onClick={handleCloseNavMenu}
                        >
                           <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>

               <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                     mr: 2,
                     display: { xs: 'flex', md: 'none' },
                     flexGrow: 1,
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.2rem',
                     color: 'black',
                     textDecoration: 'none',
                  }}
               >
                  Trendshop
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                     <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, mx: 4, color: 'black', display: 'block' }}
                     >
                        {page}
                     </Button>
                  ))}
               </Box>

               <Box sx={{ flexGrow: 0 }}>
                  <Link to="/login">
                     <IconButton color="black">
                        <LoginIcon></LoginIcon>
                     </IconButton>
                  </Link>
                  <IconButton
                     color="black"
                     onClick={() => setCartOpen((cartOpen = !cartOpen))}
                  >
                     <ShoppingCartIcon></ShoppingCartIcon>
                  </IconButton>
                  {cartOpen && (
                     <div className="shop-cart">
                        {props.order.length > 0 ? showOrders(props) : showNothing()}
                     </div>
                  )}

                  <Menu
                     sx={{ mt: '15px' }}
                     id="menu-appbar"
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                  ></Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;


