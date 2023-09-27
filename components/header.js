// import React from 'react'

// const header = () => {
//   return (
//     <div>header</div>
//   )
// }

// export default header

'use client'
// import '../styles/headerst.css'
import Image from 'next/image'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import logo from "../public/next.svg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { ForkLeft } from '@mui/icons-material';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const pages = ['Home', 'Data Factory Control Tower', 'User Guide','Feedback','Support','Admin','KPI_Dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function header() {

//   let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const pageLink =(event) =>{
    
    // event.target.innerText==='Home'?<Link key={"/"} href={"/"} to="/" /> : (event.target.innerText==='Impress'?<Link key={"/Impress"} href={"/Impress"} to={"/Impress"}/>:<Link key={"/About"} href={"/About"} to={"/About"} />)
    // if (event.target.innerText==='Home'||event.target.innerText==='HOME'){
    //   navigate("/")
    //   console.log(event.target.innerText)
    // }
    // else{
    //   navigate("/"+event.target.innerText)
    //   console.log("ok  ",event.target.innerText)
    // }

  }

  return (
   
    <AppBar position="static">
      <Container maxWidth="xl" style={{backgroundColor:'white',width:'100%'}}>
        <Toolbar disableGutters style={{width:'',}}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: 'none', ms:'none', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           {/* <img style={{ flexGrow: '1',maxWidth:'130px' }} src={logo} alt="logo" href="/" /> */}
           <Image   
             src="/Logo.svg"
              alt="Maruti Logo"
              className="dark:invert"
              width={198}
              height={50}
              style={{borderRight:'1px solid black',paddingRight:'20px'}}
              priority
           />
            <Image   
             src="/datalake.svg"
              alt="Maruti Logo"
              className="dark:invert"
              width={150}
              height={27}
              style={{paddingLeft:'20px'}}
              priority
           />

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:'black'}}/>
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
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={pageLink} value={page} name={page}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', lg: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            
          >
           <Image   
             src="/Logo.svg"
              alt="Maruti Logo"
              className="dark:invert"
              width={198}
              height={50}
              style={{borderRight:'1px solid black',paddingRight:'20px'}}
              priority
           />
            <Image   
             src="/datalake.svg"
              alt="Maruti Logo"
              className="dark:invert"
              width={150}
              height={27}
              style={{paddingLeft:'20px'}}
              priority
           />
            {/* <img style={{ width:'100px' }} src={logo} alt="logo" href="/" /> */}
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } ,justifyContent:'flex-end'}}>
            {pages.map((page) => (
             <a className='anch1'  href={page}> <button
                key={page}
                onClick={pageLink}
                value = {page}
                name={page}
                
                sx={{ my: 3, color: 'black', display: 'block'}}
                style={{borderLeft:'1px solid black',borderRight:'1px solid white',fontWeight:'400',fontSize:'12px',padding:'0px 10px 0px 10px'}}
              >
                {page}
              </button></a>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 ,marginLeft:'1rem'}}>
            <Tooltip title="Open settings" style={{display:'flex'}} onClick={handleOpenUserMenu}>
              <IconButton  sx={{ p: 0 }} >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  />
              </IconButton>

              <p style={{margin:'.5rem 0rem 0rem .5rem', color:'black'}}>  Remy Sharp</p>  
              <ArrowDropDownIcon style={{marginTop:'.5rem'}} sx={{ p: 0 }} />
              {/* <button type="button" onClick={handleOpenUserMenu} sx={{p:0}} class="btn btn-default">
               <span class="glyphicon glyphicon-triangle-bottom"></span>
                  </button> */}
                  
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default header;
