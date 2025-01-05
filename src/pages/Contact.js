import React from 'react'
import CoffeeImage from '../assets/coffeAndCamera.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${CoffeeImage})` }}></div>
      <div className='rightSide'>
        <h1>Kontaktiere uns</h1>
        <form id='contactForm' method='POST'>
            <label htmlFor='name'or>Name</label>
            <input name='name' placeholder='Name eingeben' type='text'/>
            <label htmlFor='email'or>E-Mail</label>
            <input name='email' placeholder='E-Mail eingeben' type='email'/>
            <label htmlFor='message'or>Nachricht</label>
            <textarea rows='6' placeholder='Nachricht schreiben' name='message' required></textarea>
            <button type='submit'>Senden</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
