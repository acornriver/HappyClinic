import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Features from './components/Features';
import Hours from './components/Hours';
import Location from './components/Location';
import Footer from './components/Footer';
import NoticePopup from './components/NoticePopup';
import MobileStickyBar from './components/MobileStickyBar';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <NoticePopup />
      <Header />
      <main>
        <div className="fade-in-section"><Hero /></div>
        <div className="fade-in-section"><Features /></div>
        <div className="fade-in-section"><Profile /></div>
        <div className="fade-in-section"><Hours /></div>
        <div className="fade-in-section"><Location /></div>
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
