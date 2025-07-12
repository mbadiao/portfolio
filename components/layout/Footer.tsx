"use client";
import React from 'react';
import { Github, Instagram, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { motion as m } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-neutral-800/50 bg-gradient-to-br from-neutral-900/50 to-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <m.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Mbaye Diao
            </h3>
            <p className="text-neutral-400 text-sm max-w-md">
              Full-stack developer passionate about creating exceptional digital experiences 
              with modern technologies and clean code.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              <Link href="https://github.com/mbadiao" target="_blank">
                <m.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-emerald-400/50 rounded-lg transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300" />
                </m.div>
              </Link>
              <Link href="https://linkedin.com/in/mbaye-diao" target="_blank">
                <m.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-emerald-400/50 rounded-lg transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300" />
                </m.div>
              </Link>
              <Link href="https://twitter.com/mbadiao" target="_blank">
                <m.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-emerald-400/50 rounded-lg transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300" />
                </m.div>
              </Link>
              <Link href="https://instagram.com/mbadiao" target="_blank">
                <m.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-emerald-400/50 rounded-lg transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300" />
                </m.div>
              </Link>
            </div>
            <p className="text-neutral-500 text-xs">
              Available for remote opportunities
            </p>
          </div>

          {/* Right Section */}
          <div className="text-center lg:text-right">
            <m.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors duration-300 group"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </m.button>
          </div>
        </m.div>

        {/* Bottom Section */}
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-neutral-500 text-sm">
            <span>© 2024 Mbaye Diao. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 text-neutral-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>in Senegal</span>
          </div>

          <div className="flex gap-6 text-neutral-500 text-sm">
            <Link href="#projects" className="hover:text-emerald-400 transition-colors duration-300">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-emerald-400 transition-colors duration-300">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors duration-300">
              Contact
            </Link>
          </div>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;