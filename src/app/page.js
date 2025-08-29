import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import ImageGallery from '../components/ImageGallery';
import HowItWorks from '../components/HowItWorks';
import SocialProof from '../components/SocialProof';
import Bonus from '../components/Bonus';

import FAQ from '../components/FAQ';
import Guarantee from '../components/Guarantee';
import FinalCall from '../components/FinalCall';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-pattern">
      <Hero />
      <Problem />
      <Solution />
       <HowItWorks />
      <ImageGallery />
     
      <SocialProof />
      <Bonus />

      <Guarantee />
      <FinalCall />
      <FAQ />
      <Footer />
    </div>
  );
}
