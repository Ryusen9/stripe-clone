import { RoundedBtn } from "@/components";
import { Box } from "@mantine/core";
import { ChevronRight, Tag } from "lucide-react";

export default function GetReady() {
  return (
    <Box className="bg-[#F8FAFD]">
      <Box className="max-w-317.5 mx-auto border-r border-l border-gray-400 py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
        <Box className="md:col-span-2 lg:col-span-1 flex flex-col py-5 gap-5">
          <p className="text-2xl font-grotesk font-medium">
            Ready to get started?
          </p>
          <p className="font-grotesk text-gray-600">
            Create an account instantly, or contact us to design a custom
            package for your business.
          </p>
          <Box className="flex flex-col md:flex-row gap-4">
            <RoundedBtn>Start now</RoundedBtn>
            <button className="px-4 py-3 border border-secondary text-secondary rounded-xl font-semibold font-grotesk">
              Contact sales
            </button>
          </Box>
        </Box>
        <Box className="flex flex-col items-start justify-between py-5 gap-5">
          <Box className="border border-gray-500 text-secondary p-2 rounded-lg">
            <Tag size={20} />
          </Box>
          <Box>
            <p className="font-grotesk font-semibold">See what you’ll pay</p>
            <p className="text-gray-500">
              Integrated per-transaction pricing with no hidden fees.
            </p>
          </Box>
          <button className="flex items-center text-secondary font-semibold">
            Pricing details <ChevronRight size={15} />
          </button>
        </Box>
        <Box className="flex flex-col items-start justify-between py-5 gap-5">
          <Box className="border border-gray-500 text-secondary p-2 rounded-lg">
            <Tag size={20} />
          </Box>
          <Box>
            <p className="font-grotesk font-semibold">Start building</p>
            <p className="text-gray-500">
              Get up and running with Stripe in as little as 10 minutes.
            </p>
          </Box>
          <button className="flex items-center text-secondary font-semibold">
            Integration options <ChevronRight size={15} />
          </button>
        </Box>
      </Box>
    </Box>
  );
}
