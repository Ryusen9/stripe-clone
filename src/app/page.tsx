import {
  AccordionSection,
  BookOfWeek,
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
      <BookOfWeek />
    </>
  );
};
export default Home;
