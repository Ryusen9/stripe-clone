import {
  AccordionSection,
  BookOfWeek,
  CarousalFoundation,
  GetReady,
  GlobalBackbone,
  HeroSection,
  HomeGrid,
  Letter,
  Purpose,
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
      <Purpose />
      <BookOfWeek />
      <GetReady />
    </>
  );
};
export default Home;
