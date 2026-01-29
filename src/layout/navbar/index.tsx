import { Box, Flex } from "@mantine/core";
import Link from "next/link";
import DeskstopMenu from "./components/DeskstopMenu";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-1000000">
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
      </Box>
    </nav>
  );
}
