import React from 'react';
import Navbar from './components/navbar'
import Form from './components/Form'
import AddSection from './components/Section1'
import ReccomendationSection from './components/recommendationSection'
import SaveBig from "./components/saveBig"
import HotelnHomes from './Hotel&Homes'
import HotelChain from './components/HotelChain'
import Introducing from './components/introducing'
import TravelGuide from './components/TravelGuide'
import OyoStory from './components/OyoStory'
import FooterSection from './components/FooterSection'


function App() {
  return (
    <div className="App">
     <Navbar />
    <Form />
    <AddSection />
    <h2 className="font-weight-bolder m-5">Reccommended OYOs for you</h2>
    <ReccomendationSection />
    <h2 className="font-weight-bolder m-5">Save Big, Travel Better</h2>
    <SaveBig />
    <h2 className="font-weight-bolder m-5">OYO Hotels & Homes</h2>
    <HotelnHomes />
    <HotelChain />
    <h2 className="font-weight-bolder m-5">Introducing</h2>
    <Introducing />
    <h2 className="font-weight-bolder m-5">OYOs Travel Guide</h2>
    <TravelGuide />
    <OyoStory />
    <FooterSection />
    </div>
  );
}

export default App;
