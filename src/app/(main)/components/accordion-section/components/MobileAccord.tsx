import { accordionData } from "@/data";
import { Box } from "@mantine/core";
import Image from "next/image";

const MobileAccord = () => {
  return (
    <Box className="relative">
      {accordionData.map((accItem, idx) => (
        <Box
          key={idx}
          className={`flex flex-col gap-4 pb-5 sticky bg-white ${
            idx === 0
              ? "top-0"
              : idx === 1
                ? "top-6"
                : idx === 2
                  ? "top-12"
                  : ""
          }`}
        >
          {/* logo and title */}
          <Box className="flex items-center justify-start">
            <Image
              src={accItem.logo.src}
              alt={accItem.title}
              height={30}
              width={30}
            />
            <p className="text-lg font-grotesk font-medium ml-4">
              {accItem.title}
            </p>
          </Box>
          {/* image */}
          <Box>
            <Image
              src={accItem.img.src}
              alt={accItem.title}
              height={200}
              width={300}
              className="w-full h-60 object-cover rounded-2xl"
            />
          </Box>
          {/* bottom */}
          <Box className="grid grid-cols-1">
            {accItem.bottom.map((bottomItem, bIdx) => (
              <Box
                key={bIdx}
                className="flex items-start gap-1 justify-start mb-2"
              >
                <p className="text-sm font-grotesk font-bold">
                  {bottomItem.bold}
                </p>
                <p className="text-sm">{bottomItem.norm}</p>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default MobileAccord;
