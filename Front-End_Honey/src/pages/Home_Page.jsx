
import CardsModelosHoney from '../components/CardsModelosHoney'
import EconomiaBodyComponent from '../components/EconomiaBodyComponent'
import FeedbackComponent from '../components/FeedbackComponent'
import FooterHoneyComponent from '../components/FooterHoneyComponent'
import GraficoHome from '../components/GraficoHome'
import Header_Component from '../components/Header_Component'
import HoneyAsistente from '../components/HoneyAsistente'
import Navbar_Honey from '../components/Navbar_Honey'
import QuienEsHoney from '../components/QuienEsHoney'
import TextBodyHoneyComponent from '../components/TextBodyHoneyComponent'

function Home_Page() {
    return (
        <div>
            <Navbar_Honey/>
            <Header_Component/>
            <QuienEsHoney/>
            <TextBodyHoneyComponent/>
            <GraficoHome/>
            <HoneyAsistente/>
            <EconomiaBodyComponent/>
            <CardsModelosHoney/>
            <FeedbackComponent/>
            <FooterHoneyComponent/>
        </div>
    )
}

export default Home_Page