import Hero from '../../components/Hero';
import Problem from '../../components/Problem';
import Solution from '../../components/Solution';
import ImageGallery from '../../components/ImageGallery';
import HowItWorks from '../../components/HowItWorks';
import SocialProof from '../../components/SocialProof';
import Bonus from '../../components/Bonus';
import FAQ from '../../components/FAQ';
import Guarantee from '../../components/Guarantee';
import FinalCall from '../../components/FinalCall';
import Footer from '../../components/Footer';
import QuizResultSection from '../../components/QuizResultSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-pattern">
      {/* RESULTADO DO QUIZ - PRIMEIRA COISA QUE APARECE */}
      <QuizResultSection />

      <Hero />
      <HowItWorks />
      <Problem />
      <Solution />
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