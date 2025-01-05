import React from 'react'
import CoffeeBeans from '../assets/coffeeBeans.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${CoffeeBeans})` }}></div>
      <div className='aboutBottom'>
        <h1>Über uns</h1>
        <p>Herzlich willkommen bei Cafe Vintage, einem charmanten Rückzugsort für Genießer und Liebhaber zeitloser Eleganz. 
            Bei uns verschmilzt das Flair vergangener Epochen mit modernem Komfort zu einer einladenden Oase für alle, die das Besondere suchen. 
            Unser Café ist mehr als nur ein Ort, um köstlichen Kaffee zu genießen – es ist eine Hommage an die nostalgische Ästhetik vergangener Jahrzehnte. 
            Inspiriert von den gemütlichen Cafés vergangener Zeiten, legen wir besonderen Wert auf eine warme Atmosphäre, in der sich Gäste wie in einem zweiten Zuhause fühlen können. 
            Unser engagiertes Team, bestehend aus leidenschaftlichen Baristas und freundlichem Servicepersonal, freut sich darauf, Ihnen unvergessliche Momente in einem Ambiente voller Vintage-Charme zu bereiten. 
            Tauchen Sie ein in die Geschichte und den Geschmack bei Cafe Vintage – wo Tradition und Zeitlosigkeit aufeinandertreffen.</p>
      </div>
    </div>
  )
}

export default About 