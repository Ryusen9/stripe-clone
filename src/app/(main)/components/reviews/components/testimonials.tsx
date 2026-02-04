"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Anchor,
  Avatar,
  Box,
  Button,
  Center,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ChevronRight } from "lucide-react";
import {
  testimonialItems,
  testimonialLogos,
  type LogoItem,
  type TestimonialItem,
} from "@/data";

export type TestimonialTabsProps = {
  items?: TestimonialItem[];
  logos?: LogoItem[];
  value?: string;
  onChange?: (id: string) => void;
};

function clampIndex(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function useControlled<T>(
  controlled: T | undefined,
  defaultValue: T,
  onChange?: (v: T) => void,
) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = controlled ?? uncontrolled;
  const setValue = (v: T) => {
    if (controlled === undefined) setUncontrolled(v);
    onChange?.(v);
  };
  return [value, setValue] as const;
}

function LogoButton({
  logo,
  active,
  onClick,
}: {
  logo: LogoItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <UnstyledButton
      type="button"
      onClick={onClick}
      className={
        "relative shrink-0 px-4 sm:px-5 py-3 sm:py-4 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70"
      }
      aria-pressed={active}
    >
      <Group gap={12} wrap="nowrap" className="opacity-90">
        {logo.logoNode ? (
          <Box>{logo.logoNode}</Box>
        ) : logo.logoSrc ? (
          <Box className="relative h-12 w-22 lg:h-30 lg:w-40">
            <Image
              src={logo.logoSrc}
              alt={logo.label}
              fill
              className={
                "object-contain grayscale" +
                (active ? " grayscale-0" : " opacity-70")
              }
            />
          </Box>
        ) : (
          <Text
            fw={700}
            size="sm"
            c={active ? "dark" : "dimmed"}
            className="tracking-wide"
          >
            {logo.label}
          </Text>
        )}
      </Group>

      {/* Active top bar */}
      <span
        className={
          "absolute left-0 right-0 -top-2.5 h-0.75 rounded-full transition-all " +
          (active ? "bg-violet-600" : "bg-transparent")
        }
      />
    </UnstyledButton>
  );
}

export default function TestimonialTabs(props: TestimonialTabsProps) {
  const logos = props.logos ?? testimonialLogos;
  const items = props.items ?? testimonialItems;

  const byId = useMemo(() => new Map(items.map((i) => [i.id, i])), [items]);
  const firstId =
    items.find((i) => logos.some((l) => l.id === i.id))?.id ?? items[0]?.id;

  const [activeId, setActiveId] = useControlled(
    props.value,
    firstId,
    props.onChange,
  );

  const active =
    (activeId && byId.get(activeId)) ??
    (firstId ? byId.get(firstId) : undefined);

  const activeIndex = clampIndex(
    Math.max(0, active ? logos.findIndex((l) => l.id === active.id) : -1),
    0,
    Math.max(0, logos.length - 1),
  );

  if (!active) return null;

  return (
    <Box className="w-full">
      <Box className="mx-auto max-w-5xl px-6 py-12">
        <Stack gap={26} align="center">
          <Avatar
            radius={999}
            size={56}
            src={active.avatarUrl}
            alt={active.authorName}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="text-center"
            >
              <Text
                fz={{ base: 16, sm: 22 }}
                lh={1.35}
                c="gray.7"
                className="max-w-3xl"
              >
                <span className="text-slate-700">“</span>
                {active.quote}
                <span className="text-slate-700">”</span>
              </Text>
            </motion.div>
          </AnimatePresence>

          <Text size="sm" c="dimmed">
            <Text span fw={700} c="dark">
              {active.authorName}
            </Text>
            {", "}
            {active.authorTitle}
            {", "}
            {active.company}
          </Text>

          <Anchor href={active.ctaHref} underline="never">
            <Button
              variant="subtle"
              rightSection={<ChevronRight size={16} />}
              className="text-violet-600"
            >
              {active.ctaText}
            </Button>
          </Anchor>
        </Stack>
      </Box>

      <Box className="border-t border-slate-200">
        <Center>
          <Box className="w-full max-w-5xl px-6">
            <Group
              gap={16}
              justify="space-between"
              wrap="nowrap"
              className="overflow-x-auto py-2"
            >
              {logos.map((logo, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <LogoButton
                    key={logo.id}
                    logo={logo}
                    active={isActive}
                    onClick={() => setActiveId(logo.id)}
                  />
                );
              })}
            </Group>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
