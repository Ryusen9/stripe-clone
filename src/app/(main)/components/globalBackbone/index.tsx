import { Box } from "@mantine/core";
import GridSec from "./components/GridSec";

export default function GlobalBackbone() {
  return (
    <Box className="w-full bg-[#141E4B] lg:bg-[#F8FAFD] duration-200">
      <Box className="max-w-317.5 mx-auto border-r border-l border-gray-400 lg:pt-20 pt-10 flex flex-col gap-10 lg:gap-20">
        <p className="font-grotesk text-center text-white lg:text-black text-3xl lg:text-6xl font-medium">
          The backbone <br /> of global commerce
        </p>
        <GridSec />
      </Box>
    </Box>
  );
}
