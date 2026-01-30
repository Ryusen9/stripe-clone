import { DTitle } from "@/components";
import { Box } from "@mantine/core";
// import image1 from "../../../../../public/Photos/image1.jpg";
// import image2 from "../../../../../public/Photos/image2.jpg";
// import image3 from "../../../../../public/Photos/image3.jpg";
// import image4 from "../../../../../public/Photos/image4.jpg";
// import image5 from "../../../../../public/Photos/image5.jpg";
// import image6 from "../../../../../public/Photos/image6.jpg";
// import Image from "next/image";

export default function HomeGrid() {
  return (
    <Box className="bg-[#F8FAFD]">
      <Box className="max-w-317.5! mx-auto! px-4! py-20! flex! flex-col! border-l! border-r! border-gray-400!">
        <DTitle
          className="text-3xl!"
          title="
Flexible solutions for every business model."
          subtitle="Grow your business with a comprehensive set of payments and financial tools⁠—⁠designed to work individually or together."
        />
        <Box className="grid! grid-cols-1! sm:grid-cols-2! lg:grid-cols-3! mt-16! gap-4!">
          <Box className="border-2 border-red-500 col-span-2">Hi</Box>
          <Box className="border-2 border-red-500">Hi</Box>
          <Box className="border-2 border-red-500">Hi</Box>
          <Box className="border-2 border-red-500">Hi</Box>
          <Box className="border-2 border-red-500">Hi</Box>
          <Box className="border-2 border-red-500 col-span-3">Hi</Box>
        </Box>
      </Box>
    </Box>
  );
}
