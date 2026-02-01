"use client";
import { accordionData } from "@/data";
import { ActionIcon, Box } from "@mantine/core";
import { ChevronDown, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const DeskstopAccord = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  return (
    <Box>
      {accordionData.map((accItem, idx) => (
        <Box
          onClick={() => {
            setOpened(!opened);
            setActiveIndex(idx);
          }}
          key={idx}
        >
          <Box className="flex items-center justify-between">
            <Box className="flex items-center justify-center gap-5 py-5">
              <Image
                src={accItem.logo.src}
                alt={accItem.title}
                height={40}
                width={40}
              />
              <p className="text-xl font-grotesk font-medium">
                {accItem.title}
              </p>
            </Box>
            <ActionIcon>{opened && activeIndex === idx ? <ChevronDown /> : <Plus />}</ActionIcon>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default DeskstopAccord;
