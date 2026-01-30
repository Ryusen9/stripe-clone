"use client";
import { Box, SimpleGrid, Text, Anchor, Stack, Group } from "@mantine/core";
import { motion } from "motion/react";
import { Globe, Twitter, Github, Linkedin } from "lucide-react";
import { footerLinks } from "@/constants";


const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      className="bg-black"
    >
      <Box mx="auto" className="border-r border-l border-gray-400/40 h-full px-4 pt-20 pb-10" style={{ maxWidth: "1270px" }}>
        <Stack gap={48}>
          {/* Links Grid */}
          <SimpleGrid cols={{ base: 2, sm: 2, md: 4 }} spacing="xl">
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Stack gap="md">
                  <Text
                    fw={600}
                    size="sm"
                    c="white"
                    tt="uppercase"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {category}
                  </Text>
                  <Stack gap="xs">
                    {links.map((link) => (
                      <Anchor
                        key={link.label}
                        href={link.href}
                        c="gray.4"
                        size="sm"
                        underline="never"
                        style={{
                          transition: "color 0.2s",
                          ":hover": { color: "#fff" },
                        }}
                      >
                        {link.label}
                      </Anchor>
                    ))}
                  </Stack>
                </Stack>
              </motion.div>
            ))}
          </SimpleGrid>

          {/* Bottom Section */}
          <Box
            pt={32}
            style={{
              borderTop: "1px solid #ffffff1a",
            }}
          >
            <Stack gap="lg">
              <Group justify="space-between" wrap="wrap" gap="md">
                <Group gap="xs">
                  <Globe size={16} color="#8892a6" />
                  <Text size="sm" c="gray.4">
                    United States
                  </Text>
                </Group>

                <Group gap="lg">
                  {socialLinks.map((social) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Anchor
                        href={social.href}
                        c="gray.4"
                        style={{
                          display: "flex",
                          transition: "color 0.2s",
                          ":hover": { color: "#fff" },
                        }}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </Anchor>
                    </motion.div>
                  ))}
                </Group>
              </Group>

              <Text size="sm" c="gray.5" ta={{ base: "center", sm: "left" }}>
                © {new Date().getFullYear()} Stripe, Inc. All rights reserved.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
