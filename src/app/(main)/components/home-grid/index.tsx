"use client";
import { DTitle } from "@/components";
import { ActionIcon, Box, Modal } from "@mantine/core";
import image1 from "../../../../../public/Photos/image1.jpg";
import image2 from "../../../../../public/Photos/image2.png";
import image3 from "../../../../../public/Photos/image3.png";
import image4 from "../../../../../public/Photos/image4.png";
import image5 from "../../../../../public/Photos/image5.jpg";
import image6 from "../../../../../public/Photos/image6.jpg";
import { Fullscreen, Scaling } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import ModalContents from "./components/ModalContents";
// import Image from "next/image";

export default function HomeGrid() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        title="Learn more about..."
        size={1290}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <ModalContents />
      </Modal>
      <Box className="bg-[#F8FAFD]">
        <Box className="max-w-317.5! mx-auto! px-4! py-20! flex! flex-col! border-l! border-r! border-gray-400!">
          <DTitle
            className="text-3xl!"
            title="
Flexible solutions for every business model."
            subtitle="Grow your business with a comprehensive set of payments and financial tools⁠—⁠designed to work individually or together."
          />
          <Box className="grid! grid-cols-1! sm:grid-cols-2! lg:grid-cols-3! mt-16! gap-4!">
            {/* card 1 */}
            <Box
              className="rounded-2xl lg:col-span-2 h-127 p-7 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${image6.src})` }}
            >
              {/* text and button */}
              <Box className="flex justify-between">
                <p className="max-w-90 text-xl md:text-2xl text-white">
                  Accept and optimize payments globally—online and in person
                </p>
                <ActionIcon onClick={open} size="lg" className="bg-secondary!">
                  <Scaling />
                </ActionIcon>
              </Box>
            </Box>
            {/* card 2 */}
            <Box
              className="rounded-2xl h-127 p-7 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${image2.src})` }}
            >
              <Box className="flex justify-between">
                <p className="max-w-90 text-xl md:text-2xl text-white">
                  Enable any billing model
                </p>
                <ActionIcon size="lg" className="bg-secondary!">
                  <Scaling />
                </ActionIcon>
              </Box>
            </Box>
            {/* card 3 */}
            <Box
              className="rounded-2xl h-127 p-7 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${image3.src})` }}
            >
              <Box className="flex justify-between">
                <p className="max-w-90 text-xl md:text-2xl text-white">
                  Monetize through agentic commerce
                </p>
                <ActionIcon size="lg" className="bg-secondary!">
                  <Scaling />
                </ActionIcon>
              </Box>
            </Box>
            {/* card 4 */}
            <Box
              className="rounded-2xl h-127 p-7 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${image4.src})` }}
            >
              <Box className="flex justify-between">
                <p className="max-w-90 text-xl md:text-2xl text-white">
                  Create a card issuing program
                </p>
                <ActionIcon size="lg" className="bg-secondary!">
                  <Scaling />
                </ActionIcon>
              </Box>
            </Box>
            {/* card 5 */}
            <Box
              className="rounded-2xl h-127 p-7 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${image1.src})` }}
            >
              <Box className="flex justify-between">
                <p className="max-w-90 text-xl md:text-2xl text-white">
                  Access borderless money movement with stablecoins and crypto
                </p>
                <ActionIcon size="lg" className="bg-secondary!">
                  <Scaling />
                </ActionIcon>
              </Box>
            </Box>
            {/* card 6 */}
            <Box
              className="rounded-2xl lg:col-span-3 h-127 p-7 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${image5.src})` }}
            >
              <Box className="flex justify-between">
                <p className="max-w-95 text-xl md:text-2xl text-white">
                  Embed payments in your platform
                </p>
                <ActionIcon size="lg" className="bg-secondary!">
                  <Scaling />
                </ActionIcon>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
