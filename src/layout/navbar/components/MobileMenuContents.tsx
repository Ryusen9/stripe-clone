"use client";

import { RoundedBtn } from "@/components";
import { navMenuLinks } from "@/constants";
import { Box, Collapse, Flex, Text } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileMenuContents = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <Box className="flex! flex-col! justify-between! min-h-[90vh]!">
      <Box className="flex! flex-col! justify-between!">
        {navMenuLinks.map((navItem, idx) => {
          const isOpen = openSection === navItem.title;

          if (!navItem.subMenu) {
            return (
              <Link
                key={idx}
                href={navItem.link || "#"}
                className="px-4 py-4 border-b border-gray-100 font-grotesk font-semibold text-primary hover:bg-gray-50 transition-colors"
              >
                {navItem.title}
              </Link>
            );
          }

          return (
            <Box key={idx} className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setOpenSection(isOpen ? null : navItem.title)}
                className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors"
              >
                <Text fw={600} size="sm" className="font-grotesk text-primary">
                  {navItem.title}
                </Text>
                <ChevronDown
                  size={18}
                  className={
                    isOpen
                      ? "text-secondary rotate-180 transition-transform"
                      : "text-secondary transition-transform"
                  }
                />
              </button>

              <Collapse in={isOpen} transitionDuration={200}>
                <Box className="bg-gray-50/60">
                  {navItem.subMenuItems?.map((section, sectionIdx) => (
                    <Box
                      key={sectionIdx}
                      className="px-4 py-4 border-t border-gray-100"
                    >
                      <Text
                        size="xs"
                        fw={700}
                        className="text-[#425466] uppercase tracking-wider mb-3"
                      >
                        {section.title}
                      </Text>

                      <Flex direction="column" gap={8}>
                        {section.links?.map((item, itemIdx) => {
                          const IconComponent =
                            "icon" in item ? item.icon : undefined;
                          const imageShape =
                            "shape" in item ? item.shape : undefined;

                          return (
                            <Link
                              key={itemIdx}
                              href={item.link}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                            >
                              <Box className="mt-0.5 shrink-0 w-5 h-5">
                                {IconComponent ? (
                                  <IconComponent
                                    size={18}
                                    className="text-secondary"
                                    strokeWidth={1.5}
                                  />
                                ) : imageShape ? (
                                  <Image
                                    src={imageShape}
                                    alt={item.name}
                                    width={18}
                                    height={18}
                                    className="w-full h-full"
                                  />
                                ) : null}
                              </Box>
                              <Box className="flex-1 min-w-0">
                                <Text
                                  size="sm"
                                  fw={600}
                                  className="text-primary"
                                >
                                  {item.name}
                                </Text>
                                {"desc" in item && item.desc && (
                                  <Text size="xs" c="dimmed" className="mt-1">
                                    {item.desc}
                                  </Text>
                                )}
                              </Box>
                            </Link>
                          );
                        })}
                      </Flex>

                      {navItem.more && navItem.sideBarItems && (
                        <Box className="mt-4 pt-4 border-t border-gray-200">
                          <Text
                            size="xs"
                            fw={700}
                            className="text-secondary uppercase tracking-wider mb-3"
                          >
                            More
                          </Text>
                          <Flex direction="column" gap={6}>
                            {navItem.sideBarItems.map((item, sideIdx) => (
                              <Link
                                key={sideIdx}
                                href={item.link}
                                className="block p-2 text-sm font-medium text-primary rounded-lg hover:bg-white transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </Flex>
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </Box>
          );
        })}
      </Box>
      <Box className="flex! gap-4!">
        <RoundedBtn className="w-full! mb-4!">Contact sales</RoundedBtn>
        <RoundedBtn backgroundColor="transparent" className="w-full! mb-4! border-2!">
          <Link href={"/sign-in"}>Sign in</Link>
        </RoundedBtn>
      </Box>
    </Box>
  );
};

export default MobileMenuContents;
