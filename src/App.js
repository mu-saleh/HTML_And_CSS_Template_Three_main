import React from 'react';
import Header from './components/header';
import Articles from './components/Articles';
import Discount from './components/discount';
import Events from './components/events';
import Features from './components/Features';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Landing from './components/landing';
import Ourskills from './components/ourskills';
import Services from './components/services';
import Video from './components/videos';
import Pricing from './components/pricing';
import Stats from './components/stats';
import Team from './components/team';
import WorkSteps from './components/worksteps';
import Footer from './components/footer';
import './App.css';
import './assents/css/master.css';
import './assents/css/normalize.css';
import './assents/css/all.min.css';

function App() {
  return (
    <div className="App">
      < Header />
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
      <Services />
      <Ourskills />
      <Video />
      <Pricing />
      <Stats />
      <WorkSteps />
      <Events />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
