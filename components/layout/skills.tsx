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
import { motion } from "framer-motion";

const Skills = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const skills = [
    { 
      component: <FaReact />, 
      name: 'React', 
      category: 'Frontend',
      description: 'Modern UI development'
    },
    { 
      component: <TbBrandNextjs />, 
      name: 'Next.js', 
      category: 'Framework',
      description: 'Full-stack React framework'
    },
    { 
      component: <SiTypescript />, 
      name: 'TypeScript', 
      category: 'Language',
      description: 'Type-safe JavaScript'
    },
    { 
      component: <IoLogoJavascript />, 
      name: 'JavaScript', 
      category: 'Language',
      description: 'Core web development'
    },
    { 
      component: <FaHtml5 />, 
      name: 'HTML5', 
      category: 'Markup',
      description: 'Semantic web structure'
    },
    { 
      component: <FaCss3Alt />, 
      name: 'CSS3', 
      category: 'Styling',
      description: 'Modern styling & animations'
    },
    { 
      component: <SiTailwindcss />, 
      name: 'Tailwind CSS', 
      category: 'Framework',
      description: 'Utility-first CSS framework'
    },
    { 
      component: <SiShadcnui />, 
      name: 'shadcn/ui', 
      category: 'Components',
      description: 'Modern UI components'
    },
    { 
      component: <FaNodeJs />, 
      name: 'Node.js', 
      category: 'Backend',
      description: 'Server-side JavaScript'
    },
    { 
      component: <SiExpress />, 
      name: 'Express.js', 
      category: 'Backend',
      description: 'Web application framework'
    },
    { 
      component: <SiMongodb />, 
      name: 'MongoDB', 
      category: 'Database',
      description: 'NoSQL database'
    },
    { 
      component: <FaGolang />, 
      name: 'Go', 
      category: 'Language',
      description: 'High-performance backend'
    },
    { 
      component: <FaGitAlt />, 
      name: 'Git', 
      category: 'Version Control',
      description: 'Source code management'
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="skills" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Technical Expertise
              </h2>
              <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed">
                A comprehensive toolkit of modern technologies I use to build exceptional digital experiences
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {skills.map((skill, index) => (
                  <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5" key={skill.name}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col items-center gap-4 text-center">
                          <div className="text-4xl lg:text-5xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                            {skill.component}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-emerald-400/70 font-medium uppercase tracking-wide">
                              {skill.category}
                            </p>
                            <p className="text-xs text-neutral-400 mt-2">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Progress indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                {skills.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current ? 'bg-emerald-400 w-6' : 'bg-neutral-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-neutral-400 text-sm">
              Continuously learning and adapting to new technologies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
