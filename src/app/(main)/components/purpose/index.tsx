import { DTitle, RoundedBtn } from "@/components";
import { Box } from "@mantine/core";
import ss3 from "../../../../../public/Photos/ss3.png";
import ss4 from "../../../../../public/Photos/ss4.png";
import ss5 from "../../../../../public/Photos/ss5.png";
import Image from "next/image";
import { purposeData, purposeDataGrid } from "@/data";
import { ChevronRight } from "lucide-react";

export default function Purpose() {
  return (
    <Box className="bg-[#0D1738]">
      <Box className="max-w-317.5 mx-auto border-secondary/40 border-l border-r py-12">
        {/* first section */}
        <Box className="border-secondary/40 border-b flex flex-col gap-8 px-4 py-10">
          <DTitle
            title="Reliable, extensible infrastructure for every stack."
            subtitle="Adapt Stripe to your business needs with flexible integration options."
            className="md:text-3xl! text-xl! text-white!"
            subtitleClassName="text-[#839BC8]! inline!"
          />
          <Box className="flex gap-3">
            <RoundedBtn>View developer docs</RoundedBtn>
            <button className="px-4 py-3 border-secondary border text-white rounded-lg font-grotesk">
              View {`Stripe's`} Github
            </button>
          </Box>
        </Box>
        {/* second section */}
        <Box className="px-4 flex flex-col gap-8 pt-10 border-b border-secondary/40 pb-12">
          <DTitle
            title="Connect to existing systems."
            subtitle="Orchestrate payments across multiple processors, build custom workflows, and connect to third parties using APIs, partner apps, or prebuilt integrations."
            className="md:text-2xl! text-xl! text-white! max-w-168!"
            subtitleClassName="text-[#839BC8]! inline!"
          />
          <Box className="w-full">
            <Box className="relative w-full h-full md:hidden">
              <Image
                src={ss4}
                alt="Stripe systems overview"
                width={ss4.width}
                height={ss4.height}
                className="w-full h-full object-cover"
              />
            </Box>
            <Box className="relative w-full h-full hidden md:block">
              <Image
                src={ss3}
                alt="Stripe systems overview"
                width={ss3.width}
                height={ss3.height}
                className="w-full h-full object-cover"
              />
            </Box>
          </Box>
        </Box>
        {/* section third */}
        <Box className="px-4 overflow-hidden flex flex-col justify-between gap-8 pt-10 border-b relative h-155 border-secondary/40 pb-12">
          <DTitle
            title="Scale with confidence."
            subtitle="Handle thousands of transactions per second with consistent speed and reliability, even during peak traffic periods."
            className="md:text-2xl! text-xl! text-white! max-w-2xl! z-10!"
            subtitleClassName="text-[#839BC8]! inline!"
          />
          <Box className="absolute top-40 lg:top-40 -left-4 w-full h-full ">
            <Image
              src={ss5}
              alt="Stripe scale overview"
              width={ss5.width}
              height={ss5.height}
              className="w-full h-60 md:h-90 object-cover"
            />
          </Box>
          <Box className="grid grid-cols-1 gap-15 md:grid-cols-2 lg:grid-cols-3 z-10">
            {purposeData.map((item, idx) => (
              <Box className="flex flex-col gap-2" key={idx}>
                <p
                  className="text-5xl font-grotesk"
                  style={{
                    background:
                      "linear-gradient(to right, #A96274, #C259FF, #6A20A4)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.num}
                </p>
                <p className="text-white">{item.desc}</p>
              </Box>
            ))}
          </Box>
        </Box>
        {/* fourth section */}
        <Box className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {purposeDataGrid.map((item, idx) => (
            <Box
              key={idx}
              className="flex flex-col items-start justify-between min-h-fit gap-2 py-5"
            >
              <Box className="w-full h-70 rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.btnText}
                  width={200}
                  height={200}
                  className="h-full w-full"
                />
              </Box>
              <p className="flex-1 max-w-80 text-white">
                {(() => {
                  const dotIndex = item.desc.indexOf(".");
                  const questionIndex = item.desc.indexOf("?");
                  const firstStop =
                    dotIndex === -1
                      ? questionIndex
                      : questionIndex === -1
                        ? dotIndex
                        : Math.min(dotIndex, questionIndex);
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
                {item.btnText} <ChevronRight />
              </button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
