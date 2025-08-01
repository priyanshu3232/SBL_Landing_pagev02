import React from 'react';
import Hero from './components/Hero';
import PainMirror from './components/PainMirror';
import NotACourse from './components/NotACourse';
import ROIVisual from './components/ROIVisual';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Scarcity from './components/Scarcity';
import Pricing from './components/Pricing';
import Payment from './components/Payment';
import Onboarding from './components/Onboarding';
import FreeToolkit from './components/FreeToolkit';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <PainMirror />
      <NotACourse />
      <ROIVisual />
      <HowItWorks />
      <Testimonials />
      <Scarcity />
      <Pricing />
      <Payment />
      <Onboarding />
      <FreeToolkit />
    </div>
  );
}

export default App;