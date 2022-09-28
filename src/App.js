import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/PortfolioV2';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import "./App.css";




function App() {

 const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <><div><NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /></div>
    <div><Footer currentPage={currentPage} handlePageChange={handlePageChange} />
     {renderPage()}
    </div></>
  );
}


export default App;
