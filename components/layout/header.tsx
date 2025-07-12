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
  <div className="w-full min-h-screen flex items-center justify-center py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex gap-6 flex-col"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge className="text-emerald-400 border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
              Available for opportunities
            </Badge>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4 flex-col"
          >
            <h2 className="text-neutral-300 text-lg font-medium tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">
              Mbaye Diao
              <span className="text-emerald-400">.</span>
            </h1>
            <div className="text-2xl lg:text-3xl xl:text-4xl font-medium text-neutral-300">
              <FlipWordsDemo />
            </div>
            <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-lg">
              Passionate full-stack developer crafting digital experiences with modern technologies. 
              Specialized in React, Next.js, and Go development.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#projects">
              <Button size="lg" className="gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="gap-3 border-neutral-600 hover:border-emerald-400 text-emerald-700 px-8 py-3">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-6 text-sm text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Based in Senegal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Available for remote work</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-2">
                <Image
                  src={image2}
                  alt="Mbaye Diao - Developer"
                  className="rounded-xl h-[300px] lg:h-[400px] object-cover w-full"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative group mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-2">
                <Image
                  src={image}
                  alt="Mbaye Diao - Designer"
                  className="rounded-xl h-[300px] lg:h-[400px] object-cover w-full"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400/30 rounded-full blur-sm"
          />
        </motion.div>
      </div>
    </div>
  </div>
);
