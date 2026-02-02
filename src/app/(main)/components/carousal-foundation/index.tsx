import { RoundedBtn } from "@/components";
import { caroFoundationData } from "@/data";
import { Box } from "@mantine/core";
import CarousalCard from "./component/carousalCard";

export default function CarousalFoundation() {
  return (
    <Box className="max-w-317.5 mx-auto border-r border-l border-gray-400 flex flex-col px-4">
      {/* top */}
      <Box className="flex flex-col lg:flex-row items-start justify-between w-full">
        <Box className="flex flex-col gap-6">
          <p className="text-xl md:text-2xl font-grotesk font-medium">
            Build a foundation for your <br /> startup that enables faster
            growth
          </p>
          <RoundedBtn className="max-w-50! hidden! lg:flex!">
            Stripe for enterprises
          </RoundedBtn>
        </Box>
        <p className="max-w-xl mt-4 lg:mt-0 text-sm md:text-xl font-grotesk text-gray-500">
          From stablecoin pioneers to 78% of the Forbes AI 50, Stripe helps
          startups build what’s next on easy-to-integrate financial
          infrastructure.
        </p>
        <RoundedBtn className="mt-5 bg-secondary! lg:hidden! flex!">
          Stripe for enterprises
        </RoundedBtn>
      </Box>
      {/* carousal */}
      <Box>
        {caroFoundationData.map((item, idx) => (
          <Box key={idx}>
            <CarousalCard />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
