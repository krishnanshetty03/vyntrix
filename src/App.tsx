import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import WorkflowAutomationSection from './components/WorkflowAutomationSection';
import VoiceAgentsSection from './components/VoiceAgentsSection';
import AvatarsSection from './components/AvatarsSection';
import CognitiveAgentsSection from './components/CognitiveAgentsSection';
import CrmSlmSection from './components/CrmSlmSection';
import CaseStudyAppointmentSetter from './components/CaseStudyAppointmentSetter';
import CaseStudyVoiceAgent from './components/CaseStudyVoiceAgent';
import CaseStudyCrmDashboard from './components/CaseStudyCrmDashboard';
import CaseStudyCognitiveResearch from './components/CaseStudyCognitiveResearch';
import TargetAudienceSection from './components/TargetAudienceSection';
import CallToActionSection from './components/CallToActionSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <HeroSection onOpenContact={() => setIsContactModalOpen(true)} />
      <ServicesSection />
      <CapabilitiesSection />
      <WorkflowAutomationSection />
      <VoiceAgentsSection />
      <AvatarsSection />
      <CognitiveAgentsSection />
      <CrmSlmSection />
      <CaseStudyAppointmentSetter />
      <CaseStudyVoiceAgent />
      <CaseStudyCrmDashboard />
      <CaseStudyCognitiveResearch />
      <TargetAudienceSection />
      <CallToActionSection onOpenContact={() => setIsContactModalOpen(true)} />
      <Footer />
      
      <ContactForm 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}

export default App;
