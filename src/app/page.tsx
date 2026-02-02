import {
  AccordionSection,
  CarousalFoundation,
  GlobalBackbone,
  HeroSection,
  HomeGrid,
  Letter,
} from "./(main)/components";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeGrid />
      <Letter />
      <GlobalBackbone />
      <AccordionSection />
      <CarousalFoundation />
    </>
  );
};
export default Home;
