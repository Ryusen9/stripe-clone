import {
  AccordionSection,
  BookOfWeek,
  CarousalFoundation,
  GetReady,
  GlobalBackbone,
  HeroSection,
  HomeGrid,
  Letter,
  ReviewSection,
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
      <ReviewSection />
      <BookOfWeek />
      <GetReady />
    </>
  );
};
export default Home;
