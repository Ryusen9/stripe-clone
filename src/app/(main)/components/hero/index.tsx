"use client";

import { RoundedBtn } from "@/components";
import { Box, Button } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import MarqueeComponent from "./components/Marquee";

export default function HeroSection() {
  const [value, setValue] = useState(1.55832526);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        const increment = Math.random() * 0.00000098 + 0.00000001;
        return prev + increment;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const formattedValue = value.toFixed(8);

  return (
    <Box className="border-b! border-gray-400!">
      <Box className="max-w-317.5! flex! flex-col! h-130! md:h-185! mx-auto! border-l! border-r! border-gray-400!">
        <Box className="w-full! h-full! gap-10! flex! flex-col! items-start! justify-center! px-5! lg:px-30!">
          <p className="text-xs font-grotesk font-semibold">
            Global GDP running on Stripe:{" "}
            <span className="text-gray-500 font-medium">{formattedValue}%</span>
          </p>

          <p className="text-4xl lg:text-5xl max-w-5xl font-grotesk font-medium leading-tight">
            Financial infrastructure to grow your revenue.{" "}
            <span className="text-gray-500 hidden md:inline">
              Accept payments, offer financial services, and build custom
              revenue models—from your first transaction to your billionth.
            </span>
          </p>

          <Box className="flex! flex-col! md:flex-row! items-start! justify-start! border- gap-2!">
            <RoundedBtn>Get Started</RoundedBtn>
            <Button
              size="md"
              variant="outline"
              className="text-secondary!"
              leftSection={
                <Image
                  src="/logos/googleIcon.png"
                  alt="google"
                  width={20}
                  height={20}
                />
              }
            >
              Sign up with google
            </Button>
          </Box>
        </Box>
        {/* Marquee */}
        <Box>
          <MarqueeComponent />
        </Box>
      </Box>
    </Box>
  );
}
