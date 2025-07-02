import React from 'react'
import SidebarEconomia from '../components/SidebarEconomia'
import Navbar_Honey from '../components/Navbar_Honey'
import FooterHonetComponent from '../components/FooterHoneyComponent'
import'../style/EconomiaPage.css'
function Economia_page() {
  return (
    <div>
        <Navbar_Honey/>
        <SidebarEconomia/>
       <div className='FooterECopage'>
        <FooterHonetComponent/>
       </div>
        
    </div>
  )
}

export default Economia_page