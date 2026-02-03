"use client";
import { accordionData } from "@/data";
import { ActionIcon, Box } from "@mantine/core";
import { ChevronDown, Plus } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const DeskstopAccord = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <Box>
      {accordionData.map((accItem, idx) => (
        <Box
          onClick={() => setActiveIndex(idx)}
          key={idx}
          className="border-b border-gray-400 border-dotted cursor-pointer"
        >
          <Box>
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
              <ActionIcon>
                {activeIndex === idx ? <ChevronDown /> : <Plus />}
              </ActionIcon>
            </Box>
          </Box>
          <Box>
            <AnimatePresence initial={false}>
              {activeIndex === idx && (
                <motion.div
                  key={`accordion-${idx}`}
                  initial={{ height: 0, opacity: 0, y: -6 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <Box className="flex flex-col gap-7 py-3 transition-all duration-300">
                    <Image
                      src={accItem.img.src}
                      alt={accItem.title}
                      width={300}
                      height={200}
                      className="w-full h-125 object-cover rounded-2xl"
                    />
                    <Box className="grid grid-cols-3">
                      {accItem.bottom.map((bottomItem, bIdx) => (
                        <Box
                          key={bIdx}
                          className="flex items-start gap-1 justify-start"
                        >
                          <p className="font-grotesk font-semibold">
                            {bottomItem.bold}
                          </p>
                          <p>{bottomItem.norm}</p>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default DeskstopAccord;
