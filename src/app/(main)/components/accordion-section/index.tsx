import { DTitle } from "@/components";
import { Box } from "@mantine/core";
import AccordionBox from "./components/AccordionBox";

export default function AccordionSection() {
  return (
    <Box className="max-w-317.5 mx-auto border-r border-l border-gray-400 flex flex-col">
      <Box className="py-20 px-4 border-b border-gray-400">
        <DTitle
          className="text-3xl!"
          title="Powering businesses of all sizes."
          subtitle="Run your business on a reliable platform that adapts to your needs."
        />
      </Box>
      <Box>
        <AccordionBox />
      </Box>
    </Box>
  );
}
