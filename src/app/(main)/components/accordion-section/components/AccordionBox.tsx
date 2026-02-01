import { RoundedBtn } from "@/components";
import { Box } from "@mantine/core";
import MobileAccord from "./MobileAccord";
import DeskstopAccord from "./DeskstopAccord";

const AccordionBox = () => {
  return (
    <Box className="py-15 px-4 flex flex-col">
      {/* top section */}
      <Box className="flex flex-col lg:flex-row items-start justify-between w-full">
        <Box className="flex flex-col gap-6">
          <p className="text-xl md:text-2xl font-grotesk font-medium">
            Transform your enterprise with <br /> agile financial infrastructure
          </p>
          <RoundedBtn className="max-w-50! hidden! lg:flex!">
            Stripe for enterprises
          </RoundedBtn>
        </Box>
        <p className="max-w-xl mt-4 lg:mt-0 text-sm md:text-xl font-grotesk text-gray-500">
          50% of Fortune 100 companies have used Stripe to grow their
          businesses—from expanding internationally to reimagining the customer
          experience.
        </p>
        <RoundedBtn className="mt-5 bg-secondary! lg:hidden! flex!">
          Stripe for enterprises
        </RoundedBtn>
      </Box>
      {/* Accordion for mobile */}
      <Box className="block md:hidden py-10">
        <MobileAccord />
      </Box>
      {/* Accordion for desktop */}
      <Box className="hidden md:block py-10">
        <DeskstopAccord />
      </Box>
    </Box>
  );
};
export default AccordionBox;
