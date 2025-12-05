import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Features from './components/Features';
import Hours from './components/Hours';
import Location from './components/Location';
import Footer from './components/Footer';
import NoticePopup from './components/NoticePopup';
import './App.css'; // Global App styles if needed, but I rely on index.css

function App() {
  return (
    <div className="App">
      <NoticePopup />
      <Header />
      <main>
        <Hero />
        <Features />
        <Profile />
        <Hours />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
