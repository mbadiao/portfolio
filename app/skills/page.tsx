"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
const Project = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const icons = [
    <FaReact />,
    <FaGitAlt />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaNodeJs />,
    <TbBrandNextjs />,
    <SiTypescript />,
    <SiTailwindcss />,
    <SiShadcnui />,
    <SiExpress />,
    <SiMongodb />,
    <IoLogoJavascript />,
    <FaGolang />,
  ];
  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-10">
          <h2 className="text-xl md:text-3xl  tracking-tighter lg:max-w-xl font-regular text-left text-white">
            Tech Stack that I use in my projects
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {icons.map((Icon, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={`icon-${index}`}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                    <span className="text-5xl">{Icon}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Project;
