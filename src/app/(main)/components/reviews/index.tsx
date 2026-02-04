import { RoundedBtn } from "@/components";
import { Box } from "@mantine/core";
import imgSs from "../../../../../public/Photos/ss1.png";
import imgSs2 from "../../../../../public/Photos/ss2.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { reviewsGrid } from "@/data";
import Testimonials from "./components/testimonials";

export default function ReviewSection() {
  return (
    <Box className="max-w-317.5 mx-auto border-l border-r border-gray-400 py-15">
      {/* top */}
      <Box className="flex flex-col lg:flex-row items-start justify-between w-full px-4">
        <Box className="flex flex-col gap-6">
          <p className="text-xl md:text-2xl font-grotesk font-medium">
            Make your SaaS platform a <br /> complete financial operating system
          </p>
          <RoundedBtn className="max-w-50! hidden! lg:flex!">
            Stripe for platforms
          </RoundedBtn>
        </Box>
        <p className="max-w-xl mt-4 lg:mt-0 text-sm md:text-xl font-grotesk text-gray-500">
          From the Fortune 100 to the Forbes Cloud 100, vertical SaaS platforms
          use Stripe to expand their product offerings with embedded payments
          and financial services.
        </p>
        <RoundedBtn className="mt-5 bg-secondary! lg:hidden! flex!">
          Stripe for platforms
        </RoundedBtn>
      </Box>
      <Box className="flex flex-col px-4 py-20">
        <Image
          src={imgSs2.src}
          alt="photo"
          width={500}
          height={300}
          className="w-full lg:h-150 object-contain md:hidden"
        />
        <Image
          src={imgSs.src}
          alt="photo"
          width={500}
          height={300}
          className="w-full lg:h-150 object-contain hidden md:block"
        />
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviewsGrid.map((item, idx) => (
            <Box
              key={idx}
              className="flex flex-col items-start justify-between min-h-fit gap-5 py-5"
            >
              <Box className="text-secondary p-2 rounded-lg border border-gray-400">
                <item.icon size={20} />
              </Box>
              <p className="flex-1 max-w-80">
                {(() => {
                  const firstStop = item.desc.indexOf(".");
                  if (firstStop === -1) {
                    return item.desc;
                  }
                  const firstSentence = item.desc.slice(0, firstStop + 1);
                  const rest = item.desc.slice(firstStop + 1).trim();
                  return (
                    <>
                      <span className="font-semibold">{firstSentence}</span>
                      {rest ? ` ${rest}` : ""}
                    </>
                  );
                })()}
              </p>
              <button className="flex items-center justify-start text-secondary font-grotesk font-semibold">
                Read the guides <ChevronRight />
              </button>
            </Box>
          ))}
        </Box>
        {/* Testimonial section */}
        <Box>
          <Testimonials />
        </Box>
      </Box>
    </Box>
  );
}
