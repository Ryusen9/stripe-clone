"use client";
import { backboneData } from "@/data";
import { ActionIcon, Box, SimpleGrid } from "@mantine/core";
import { Play, Sun } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const GridSec = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  console.log(activeIdx);
  return (
    <Box>
      <SimpleGrid className="gap-0!" cols={{ base: 2, md: 4 }}>
        {backboneData.map((item, idx) => (
          <Box
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`flex flex-col lg:border-t lg:border-b border-gray-400 text-white lg:text-gray-400 items-center justify-center md:p-10 p-3 lg:hover:text-white duration-200 cursor-pointer lg:hover:border-t-3 lg:hover:border-b-3 ${activeIdx === idx ? "lg:text-white lg:border-t-3 lg:border-b-3" : ""}`}
          >
            <p className="text-3xl md:text-5xl font-grotesk font-medium">
              {item.num}
            </p>
            <p className="text-center text-sm md:text-base font-grotesk font-medium lg:px-3">
              {item.desc}
            </p>
          </Box>
        ))}
      </SimpleGrid>
      <Box className="w-full h-130 overflow-hidden hidden lg:block relative">
        <Box className="absolute top-0 left-0 w-full p-4 flex justify-end gap-4 z-10">
          <ActionIcon size="lg">
            <Play />
          </ActionIcon>
          <ActionIcon size="lg">
            <Sun />
          </ActionIcon>
        </Box>
        <Image
          src={backboneData[activeIdx!].img}
          alt={backboneData[activeIdx!].desc}
          className="w-full h-full object-cover"
        />
      </Box>
    </Box>
  );
};
export default GridSec;
