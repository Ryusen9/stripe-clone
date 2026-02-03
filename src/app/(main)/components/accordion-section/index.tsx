import { DTitle } from "@/components";
import { Box } from "@mantine/core";
import AccordionBox from "./components/AccordionBox";
import { backboneGrid } from "@/data";
import { ChevronRight } from "lucide-react";

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
      {/* grid */}
      <Box className="px-4 pb-15 border-b border-gray-400">
        <p className="text-xl md:text-2xl font-grotesk text-medium w-full mb-8">
          Realize value faster with dedicated experts
        </p>
        <Box className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {backboneGrid.map((item, idx) => (
            <Box
              key={idx}
              className="flex flex-col items-start justify-between min-h-fit gap-5 py-5"
            >
              <Box className="text-secondary p-2 rounded-lg border border-gray-400">
                <item.icon size={20} />
              </Box>
              <p className="flex-1">{item.desc}</p>
              <button className="flex items-center justify-start text-secondary font-grotesk font-semibold">
                {item.btnText} <ChevronRight />
              </button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
