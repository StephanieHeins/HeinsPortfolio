import '../styles/PortfolioContainer.css';
import NavTabs from './NavTabs';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';

export default function PortfolioContainer() {
    return (
        <div>
            <NavTabs />
            <div id="maincontainer">
            <Portfolio />
            </div>
            <Footer />
        </div>
    )
}