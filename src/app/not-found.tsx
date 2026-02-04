import { Box, Text, Title } from "@mantine/core";
import Link from "next/link";

const NotFound = () => {
  return (
    <Box className="min-h-screen! bg-secondary w-full mx-auto! flex! flex-col! items-center! justify-center!">
      <Title className="font-ubuntu!">Page not found!</Title>
      <Text className="font-ubuntu!" fz="lg" fw={600}>
        Sorry, but the page you were looking for could not be found.
      </Text>
      <Text className="font-work-sans!" fz="sm">
        You can return to{" "}
        <Link href="/" className="text-sky-blue">
          our front page
        </Link>
        , {`or drop us a line if you can't find what you're looking for.`}
      </Text>
    </Box>
  );
};
export default NotFound;