import { DTitle } from "@/components";
import { Box } from "@mantine/core";

export default function HomeGrid() {
  return (
    <Box className="max-w-317.5! mx-auto! px-4! py-25! border-l! border-r! border-gray-400!">
      <DTitle
      className="text-3xl!"
        title="
Flexible solutions for every business model."
        subtitle="Grow your business with a comprehensive set of payments and financial tools⁠—⁠designed to work individually or together."
      />
    </Box>
  );
}
