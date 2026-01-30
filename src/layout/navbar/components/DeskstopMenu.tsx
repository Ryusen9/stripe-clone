"use client";
import { navMenuLinks } from "@/constants";
import {
  Box,
  Flex,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  SimpleGrid,
} from "@mantine/core";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const DeskstopMenu = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  return (
    <Flex display="flex" align="center" className="ml-6!">
      {navMenuLinks.map((navLinks, idx) =>
        navLinks.subMenu ? (
          <Popover
            key={idx}
            position="bottom"
            withArrow
            arrowSize={12}
            offset={15}
            shadow="md"
            opened={openedIndex === idx}
            onChange={(opened) => setOpenedIndex(opened ? idx : null)}
          >
            <PopoverTarget>
              <Flex
                display="flex"
                align="center"
                justify="center"
                onMouseEnter={() => setOpenedIndex(idx)}
                onMouseLeave={() => setOpenedIndex(null)}
                gap={10}
                className="group! mx-4! hover:opacity-60! cursor-pointer! pt-1!"
              >
                <span className="font-grotesk text-[15px] font-semibold">
                  {navLinks.title}
                </span>
                <ChevronDown
                  className="group-hover:rotate-180 duration-200 ml-1"
                  size={16}
                />
              </Flex>
            </PopoverTarget>
            {/* Submenu content */}
            {navLinks.subMenu && (
              <PopoverDropdown
                className="p-1! z-100000!"
                onMouseEnter={() => setOpenedIndex(idx)}
                onMouseLeave={() => setOpenedIndex(null)}
              >
                <Box className="p-0! bg-gray-400/20!">
                  {navLinks.subMenuItems?.map((menuItems, idx) => (
                    <Box className="bg-white! flex! gap-2!" key={idx}>
                      <Box className="flex! flex-col! gap-4! p-4!">
                        <p>{menuItems.title}</p>
                        <SimpleGrid cols={navLinks.more ? 2 : 1}>
                          {menuItems.links.map((linkItem, idx) => (
                            <Link
                              className="group"
                              href={linkItem.link}
                              key={idx}
                            >
                              <Box className="flex! items-center! justify-start!">
                                <Box className="p-3! bg-gray-400/20! rounded-md! mr-3! flex items-center justify-center">
                                  {"shape" in linkItem && linkItem.shape ? (
                                    <Image
                                      src={linkItem.shape}
                                      alt={linkItem.name}
                                      width={20}
                                      height={20}
                                    />
                                  ) : "icon" in linkItem && linkItem.icon ? (
                                    <linkItem.icon size={20} />
                                  ) : null}
                                </Box>

                                <Box>
                                  <p className="flex items-center justify-start gap-3">
                                    {linkItem.name}{" "}
                                    <ChevronRight
                                      size={15}
                                      className="opacity-0 group-hover:opacity-100 duration-200"
                                    />
                                  </p>
                                  <p className="text-xs">
                                    {"desc" in linkItem
                                      ? String(linkItem.desc)
                                      : "description" in linkItem
                                        ? String(linkItem.description)
                                        : ""}
                                  </p>
                                </Box>
                              </Box>
                            </Link>
                          ))}
                        </SimpleGrid>
                      </Box>
                      {/* side menu */}
                      {navLinks.more && (
                        <Box className="flex! flex-col! rounded-xs gap-2 p-4! bg-gray-400/20!">
                          <p className="underline">More</p>
                          {navLinks.sideBarItems?.map((item, idx) => (
                            <Link
                              className="group flex items-center justify-start gap-3"
                              href={item.link}
                              key={idx}
                            >
                              {item.name}
                              <ChevronRight
                                size={15}
                                className="opacity-0 group-hover:opacity-100 duration-200"
                              />
                            </Link>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                  {/* side menu */}
                </Box>
              </PopoverDropdown>
            )}
          </Popover>
        ) : (
          <Link className="mx-4 font-grotesk font-semibold text-[15px] hover:opacity-60 pt-1" href={navLinks.link!} key={idx}>
            {navLinks.title}
          </Link>
        ),
      )}
    </Flex>
  );
};
export default DeskstopMenu;
