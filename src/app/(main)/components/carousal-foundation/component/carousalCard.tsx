import { RoundedBtn } from "@/components";
import { Box } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
interface CarousalCardProps {
  img: string | StaticImageData;
  desc: string;
  btText: string;
}
const CarousalCard = ({ img, desc, btText }: CarousalCardProps) => {
  return (
    <Box className="flex flex-col gap-4 w-full h-120 group">
      <Box>
        <Image
          src={img}
          alt={desc}
          width={300}
          height={200}
          className="w-full group-hover:scale-x-105 duration-200 h-90 object-cover rounded-2xl"
        />
      </Box>
      <Box className="flex h-full flex-col items-start justify-between">
        <p className="text-sm md:text-lg font-grotesk font-medium">{desc}</p>
        <RoundedBtn className="text-sm md:text-lg px-0! font-grotesk text-secondary! font-medium mt-2 bg-transparent!">
          {`Read ${btText}'s story`}
        </RoundedBtn>
      </Box>
    </Box>
  );
};
export default CarousalCard;
