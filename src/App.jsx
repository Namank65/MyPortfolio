import ParticlesComponent from "./components/Particles";
import MainComponent from "./components/MainComponent";
import LatestWorksPage from "./components/LatestWorksPage";
import Testimonial from "./components/Testimonial";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ParticlesComponent />
      <MainComponent/>
      <LatestWorksPage/>
      <Testimonial/>
      <ContactMe/>
      <Footer/>
    </>
  );
};

export default App;
