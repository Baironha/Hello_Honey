import React from 'react'
import SidebarEconomia from '../components/SidebarEconomia'
import Navbar_Honey from '../components/Navbar_Honey'
import GF_Valores_Economia from '../components/GF_Valores_Economia'

function Economia_page() {
  return (
    <div>
        <Navbar_Honey/>
        <SidebarEconomia/>
        <GF_Valores_Economia/>
    </div>
  )
}

export default Economia_page