
import CardsModelosHoney from '../components/CardsModelosHoney'
import FooterHoneyComponent from '../components/FooterHoneyComponent'
import GraficoHome from '../components/GraficoHome'
import Header_Component from '../components/Header_Component'
import HoneyAsistente from '../components/HoneyAsistente'
import NavbarHomecomponent from '../components/NavbarHomecomponent'
import QuienEsHoney from '../components/QuienEsHoney'
import TextBodyHoneyComponent from '../components/TextBodyHoneyComponent'

function Home_Page() {
    return (
        <div>
            <NavbarHomecomponent/>
            <Header_Component/>
            <QuienEsHoney/>
            <TextBodyHoneyComponent/>
            <GraficoHome/>
            <HoneyAsistente/>
            <CardsModelosHoney/>
            <FooterHoneyComponent/>
        </div>
    )
}

export default Home_Page