"use client";

import { RoundedBtn } from "@/components";
import { caroFoundationData } from "@/data";
import { ActionIcon, Box } from "@mantine/core";
import CarousalCard from "./component/carousalCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function CarousalFoundation() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
    startIndex: 0,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <Box className="max-w-317.5 mx-auto border-r border-l border-gray-400 flex flex-col px-4">
      {/* top */}
      <Box className="flex flex-col lg:flex-row items-start justify-between w-full">
        <Box className="flex flex-col gap-6">
          <p className="text-xl md:text-2xl font-grotesk font-medium">
            Build a foundation for your <br /> startup that enables faster
            growth
          </p>
          <RoundedBtn className="max-w-50! hidden! lg:flex!">
            Stripe for enterprises
          </RoundedBtn>
        </Box>
        <p className="max-w-xl mt-4 lg:mt-0 text-sm md:text-xl font-grotesk text-gray-500">
          From stablecoin pioneers to 78% of the Forbes AI 50, Stripe helps
          startups build what’s next on easy-to-integrate financial
          infrastructure.
        </p>
        <RoundedBtn className="mt-5 bg-secondary! lg:hidden! flex!">
          Stripe for enterprises
        </RoundedBtn>
      </Box>
      {/* carousal */}
      <Box className="py-15">
        {/* controls */}
        <Box className="w-full hidden md:flex gap-2 items-center justify-end pb-10">
          <ActionIcon
            size="lg"
            className="bg-transparent! border! border-secondary! text-secondary! hover:bg-secondary! hover:text-white! duration-200"
            onClick={scrollPrev}
          >
            <ArrowLeft />
          </ActionIcon>
          <ActionIcon
            size="lg"
            className="bg-transparent! border! border-secondary! text-secondary! hover:bg-secondary! hover:text-white! duration-200"
            onClick={scrollNext}
          >
            <ArrowRight />
          </ActionIcon>
        </Box>
        {/* carousal Contents */}
        <Box className="overflow-hidden" ref={emblaRef}>
          <Box className="flex gap-6">
            {caroFoundationData.map((item, idx) => (
              <Box key={idx} className="flex-[0_0_320px]">
                <CarousalCard
                  img={item.img}
                  desc={item.desc}
                  btText={item.btnTxt}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
