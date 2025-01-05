import React, { useState} from 'react'
import Logo from '../assets/coffeeLogo.png'
import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }
  
  return (
    <div className="navbar">
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='logo'></img>
        <div className='hiddenLinks'>
          <Link to="/"> Home </Link>
          <Link to="/menue"> Menü </Link>
          <Link to="/ueber-uns"> Über uns </Link>
          <Link to="/kontakt"> Kontakt </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/menue"> Menü </Link>
        <Link to="/ueber-uns"> Über uns </Link>
        <Link to="/kontakt"> Kontakt </Link>
        <button onClick={toggleNavbar}><ReorderIcon></ReorderIcon></button> 
      </div>
    </div>
  )
}

export default Navbar
