"use client";
import { Box, Burger, Drawer, Flex } from "@mantine/core";
import Link from "next/link";
import DeskstopMenu from "./components/DeskstopMenu";
import { RoundedBtn } from "@/components";
import { useDisclosure } from "@mantine/hooks";
import MobileMenuContents from "./components/MobileMenuContents";
import { useEffect, useState } from "react";

export default function Navbar() {
  // const [opened, { toggle }] = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`w-full sticky top-0 left-0 z-1000 border-b border-gray-400 transition-colors duration-300 ${scrolled ? "bg-white!" : "bg-transparent"}`}
    >
      <Box className="max-w-[1264]! mx-auto! py-3! px-4! flex! items-center! justify-between!">
        {/* logo */}
        <Flex display="flex" align="center" gap={4}>
          <Link href="/" className="font-grotesk font-bold text-2xl">
            stripe
          </Link>
          {/* desktop menu */}
          <Box className="hidden! lg:block!">
            <DeskstopMenu />
          </Box>
        </Flex>
        {/* button: desktop */}
        <Box className="hidden! lg:flex! items-center! gap-2!">
          <RoundedBtn
            backgroundColor="transparent"
            className="border! text-black!"
          >
            <Link href={"/sign-in"}>Sign in</Link>
          </RoundedBtn>
          <RoundedBtn>Contact sales</RoundedBtn>
        </Box>
        {/* mobile menu */}
        <Box className="lg:hidden!">
          <Burger
            opened={opened}
            onClick={opened ? close : open}
            aria-label="Toggle navigation"
          />
        </Box>
        <Drawer
          className="absolute! top-0! left-0! z-100000"
          position="right"
          opened={opened}
          onClose={close}
          title="MENU"
        >
          {/* Drawer content */}
          <MobileMenuContents />
        </Drawer>
      </Box>
    </nav>
  );
}
