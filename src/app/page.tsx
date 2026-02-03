import {
  AccordionSection,
  BookOfWeek,
  CarousalFoundation,
  GetReady,
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
      <BookOfWeek />
      <GetReady />
    </>
  );
};
export default Home;
