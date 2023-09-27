'use client'
import React from 'react'
import Header from '../../components/header'
import '../globals.css'
import Image from 'next/image'
import img1 from '../../public/div1img.png'
import { AppBar, Toolbar } from '@mui/material'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import Box from '@mui/material/Box';

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



const pages = ['Home', 'Data Factory Control Tower', 'User Guide','Feedback'];


const kpidash = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
    <>
    <Header />
      
    <div className='div1dash' ></div>
    <div className='div2dash'>KPI DASHBOARD</div>
    <div className='div2dash' >
    <AppBar>
    <Toolbar>
    
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 200,
                fontFamily:'roboto',
                color:'white',
                letterSpacing: '.2rem',
                textDecoration: 'none',
              }}
            >
              Educative
            </Typography> */}
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
                display: { xs: 'block', lg: 'none' },color:'whitesmoke'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={pageLink} value={page} name={page}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
    </Toolbar>
    </AppBar>
    </div>

      
    </>
    
  )
}

export default kpidash