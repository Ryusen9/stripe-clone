import { Box, SimpleGrid } from "@mantine/core";
import letterBg from "../../../../../public/Photos/letter.png";
import { RoundedBtn } from "@/components";

export default function Letter() {
  return (
    <Box className="max-w-317.5! mx-auto! px-4! py-20! border-l! border-r! border-gray-400!">
      <Box
        className="bg-center! bg-no-repeat! rounded-2xl! bg-cover! h-100! flex! flex-col! justify-between p-10"
        style={{ backgroundImage: `url(${letterBg.src})` }}
      >
        <Box className="flex! flex-col! gap-5!">
          <p className="text-2xl md:text-5xl font-grotesk text-white">
            The internet economy <br />
            conference
          </p>
          <RoundedBtn className="w-55">Join us at session</RoundedBtn>
        </Box>
        {/* grid */}
        <SimpleGrid cols={{ base: 2, md: 3 }}>
          <Box className="flex items-center justify-center lg:justify-start row-start-2 col-span-2 lg:col-span-1 lg:row-start-1">
            <p className="text-2xl md:text-3xl text-center lg:text-start text-white font-grotesk font-semibold">
              <span className="italic font-bold">Stripe</span> Session
            </p>
          </Box>
          <Box className="text-sm md:text-base flex items-center justify-start lg:justify-center">
            <p className="font-grotesk font-medium text-white text-start">
              April 29–30 <br /> 2026
            </p>
          </Box>
          <Box className="text-sm md:text-base flex items-center justify-end">
            <p className="font-grotesk font-medium text-white">
              Moscone West <br /> San Francisco
            </p>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
