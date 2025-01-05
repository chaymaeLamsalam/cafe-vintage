import React from 'react'
import { Link } from "react-router-dom"
import BackgroundImage from '../assets/cafe.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className='headerContainer' >
        <h1>Cafe vintage</h1>
        <p>Kaffee für die Seele</p>
        <Link to="/menue">
          <button> Jetzt bestellen</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
