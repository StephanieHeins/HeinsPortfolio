import React, { useState } from 'react';
import '../styles/PortfolioContainer.css';
import NavTabs from './NavTabs';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export default function PortfolioContainer() {

    const [currentPage, setCurrentPage] = useState('Portfolio');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        return <Contact />;
      };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <div id="maincontainer">
            {renderPage()}
            </div>
            <Footer />
        </div>
    )
}