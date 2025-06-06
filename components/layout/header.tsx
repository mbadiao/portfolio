"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlipWordsDemo } from "./textHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import image2 from "@/public/image2.jpg";
import image from "@/public/mbaye.jpg";

export const Hero = () => (
  <div className="w-full py-10 lg:py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline" className="text-white">
              I&apos;am open !
            </Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h2 className="text-neutral-200 text-4xl">Hello there!</h2>
            <h1 className="text-5xl text-white md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              I&apos;m Mbaye Diao
              <span className="text-[#ffffff] text-5xl">.</span>
              <FlipWordsDemo />
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              I am a  full-stack developer .
            </p>
          </div>
          <motion.div className="flex flex-row gap-4">
            <Link href="#">
              <Button size="lg" className="gap-4" variant="outline">
                Skills
              </Button>
            </Link>
            <Link href="#">
              <Button size="lg" className="gap-4 " variant="outline">
                Projects
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-8"
        >
          <div className="bg-muted rounded-md aspect-square relative">
            <Image
              src={image2}
              alt="Hero Image"
              className="rounded-md h-[45vh] object-cover"
            />
          </div>
          <div className="bg-muted rounded-md aspect-square">
            <Image
              src={image}
              alt="Hero Image"
              className="rounded-md h-[45vh] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);
