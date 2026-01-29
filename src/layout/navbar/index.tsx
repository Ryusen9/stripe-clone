"use client";
import { Box, Burger, Drawer, Flex } from "@mantine/core";
import Link from "next/link";
import DeskstopMenu from "./components/DeskstopMenu";
import { RoundedBtn } from "@/components";
import { useDisclosure } from "@mantine/hooks";
import MobileMenuContents from "./components/MobileMenuContents";

export default function Navbar() {
  // const [opened, { toggle }] = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <nav className="w-full absolute top-0 left-0 z-1000">
      <Box className="max-w-[1064]! mx-auto! py-4! px-4! flex! items-center! justify-between!">
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
        <Box className="hidden! lg:flex! items-center! gap-1!">
          <RoundedBtn backgroundColor="transparent" className="border!">
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
