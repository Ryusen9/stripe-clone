"use client";

import { RoundedBtn } from "@/components";
import { caroFoundationData } from "@/data";
import { ActionIcon, Box } from "@mantine/core";
import CarousalCard from "./component/carousalCard";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import rightBg from "../../../../../public/Photos/gridRight.png";
import Image from "next/image";

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
    <Box className="max-w-317.5 mx-auto border-r border-l border-b border-gray-400 flex flex-col px-4 py-10">
      {/* top */}
      <Box className="flex flex-col lg:flex-row items-start justify-between w-full">
        <Box className="flex flex-col gap-6">
          <p className="text-xl md:text-2xl font-grotesk font-medium">
            Build a foundation for your <br /> startup that enables faster
            growth
          </p>
          <RoundedBtn className="max-w-50! hidden! lg:flex!">
            Stripe for startups
          </RoundedBtn>
        </Box>
        <p className="max-w-xl mt-4 lg:mt-0 text-sm md:text-xl font-grotesk text-gray-500">
          From stablecoin pioneers to 78% of the Forbes AI 50, Stripe helps
          startups build what’s next on easy-to-integrate financial
          infrastructure.
        </p>
        <RoundedBtn className="mt-5 bg-secondary! lg:hidden! flex!">
          Stripe for startups
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
        {/* grid */}
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
          <Box className="overflow-hidden relative px-6 py-8 bg-[#F8FAFD] flex flex-col gap-4 rounded-2xl">
            <p className="font-grotesk z-10 max-w-100">
              <span className="font-semibold">Stripe Startups program.</span>{" "}
              Access financial benefits, a focused community, and expert
              resources to help you grow your business.
            </p>
            <button className="flex items-center font-grotesk font-bold text-secondary">
              Apply now <ChevronRight size={15} />
            </button>
            <Image
              src={rightBg.src}
              alt="bg-right"
              width={200}
              height={200}
              className="absolute w-full h-full hidden md:block -right-35 md-right-50 top-0 z-0"
            />
          </Box>
          <Box className="overflow-hidden relative px-6 py-8 bg-[#F8FAFD] flex flex-col gap-4 rounded-2xl">
            <p className="font-grotesk z-10 max-w-100">
              <span className="font-semibold">Stripe Atlas.</span> Get
              everything you need to fundraise, bank, and accept payments in two
              business days.
            </p>
            <button className="flex items-center font-grotesk font-bold text-secondary">
              Start your company <ChevronRight size={15} />
            </button>
            <Image
              src={rightBg.src}
              alt="bg-right"
              width={200}
              height={200}
              className="absolute w-full h-full hidden md:block -right-35 md-right-50 top-0 z-0"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
