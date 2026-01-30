import { Box } from "@mantine/core";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const logos = [
    "/logos/airbnb.svg",
    "/logos/amazon.svg",
    "/logos/anthropc.svg",
    "/logos/blockchain.svg",
    "/logos/bloomnation.svg",
    "/logos/bmw.svg",
    "/logos/google.svg",
    "/logos/twilio.svg",
  ];
  return (
    <Box className="border-t! border-gray-400! h-18! flex! items-center! overflow-hidden! justify-center!">
      <Marquee autoFill={true} speed={50} pauseOnHover={true} gradient={false}>
        {logos.map((logo, idx) => (
          <Image src={logo} alt="logo" key={idx} width={150} height={150} />
        ))}
      </Marquee>
    </Box>
  );
};
export default MarqueeComponent;
