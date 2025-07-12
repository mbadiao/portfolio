"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import brick from "../../public/brickBreacker.png";
import forum from "../../public/forum.png";
import todo from "../../public/todo.png";
import workflow from "../../public/workflow.png";
import realTimeForum from "../../public/realtimeforum.png";
import caza from "../../public/caza.png";
import sunushop from "../../public/sunuShop.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

const Project = () => {
  const projects = [
    {
      title: "CaZa",
      description: "CaZa is an apartment rental app for students and a hotel rental app for tourists. The app enables users to find accommodation to suit their needs, whether they're students looking for an affordable apartment or tourists looking for a comfortable hotel.",
      image: caza,
      demo: "https://ca-za.vercel.app/",
      code: "https://github.com/mbadiao/TerangaStay",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      featured: true
    },
    {
      title: "sunuShop",
      description: "SunuShop is a cutting-edge e-commerce platform dedicated to bringing you the latest trends in fashion. Whether you're looking for stylish outfits, trendy accessories, or seasonal wardrobe staples, SunuShop offers a curated selection of high-quality clothing for men, women, and children.",
      image: sunushop,
      demo: "https://sunushop.vercel.app/",
      code: "https://github.com/mbadiao/e-commerce",
      tags: ["React", "E-commerce", "Fashion", "UI/UX"],
      featured: true
    },
    {
      title: "Brick Breaker",
      description: "A classic brick breaker game developed using Vanilla JavaScript, HTML5 and CSS3. Features smooth animations, responsive design, and engaging gameplay mechanics.",
      image: brick,
      demo: "https://gamebrickbreaker.vercel.app/",
      code: "https://github.com/mbadiao/brick-breacker",
      figma: "https://www.figma.com/design/MQFAlVIhyYWbFSRlpfS8b0/brick-breaker?node-id=0-1&t=DFSTpJ6zHI0ty3Jw-0",
      tags: ["JavaScript", "HTML5", "CSS3", "Game Development"]
    },
    {
      title: "WorkFlow",
      description: "A static website for a company that offers services in the field of digital marketing. Modern design with focus on conversion and user experience.",
      image: workflow,
      code: "https://github.com/mbadiao/workflow",
      figma: "https://www.figma.com/design/wCtpIX9XPo63okB7F6XT2o/Untitled?t=5yVCCvYKEqDmGjOJ-1",
      tags: ["HTML", "CSS", "JavaScript", "Digital Marketing"]
    },
    {
      title: "Real-time Forum",
      description: "A real-time forum using Go and gorilla/websocket for the backend websockets, HTML, CSS and JavaScript for the frontend. Features live messaging and real-time updates.",
      image: realTimeForum,
      figma: "https://www.figma.com/design/SIsPTCkOY2NHSspiMGBthq/Portfolio?t=5yVCCvYKEqDmGjOJ-1",
      tags: ["Go", "WebSocket", "Real-time", "Backend"]
    },
    {
      title: "Forum",
      description: "A forum using Go for the backend and HTML, CSS and JavaScript for the frontend. Traditional forum with user authentication and post management.",
      image: forum,
      code: "https://github.com/mbadiao/forum",
      figma: "https://www.figma.com/design/B9mGnkkZXI7Fdh9w98ka2d/Forum?node-id=0-1&t=bB0t8DxoW8YLbOYT-1",
      tags: ["Go", "Backend", "Forum", "Authentication"]
    },
    {
      title: "Todo App",
      description: "A modern todo application built with React. Features task management, local storage, and clean user interface.",
      image: todo,
      code: "https://github.com/mbadiao/My_todo_app",
      figma: "https://www.figma.com/design/EdE6cfqAmYpoRpuxvGddpp/todo-app?node-id=0-1&t=5yVCCvYKEqDmGjOJ-1",
      tags: ["React", "JavaScript", "Task Management", "UI/UX"]
    }
  ];

  return (
    <section id="projects" className="w-full py-20 lg:py-32">
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
              <Badge className="text-emerald-400 border-emerald-400/20 bg-emerald-400/10 px-4 py-2 mb-6">
                Portfolio
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Featured Projects
              </h2>
              <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed">
                A showcase of my recent work, demonstrating my skills in full-stack development, 
                UI/UX design, and problem-solving capabilities.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`group relative ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay with links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.demo && (
                        <Link href={project.demo} target="_blank" className="p-3 bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors duration-200">
                          <Eye className="w-5 h-5 text-white" />
                        </Link>
                      )}
                      {project.code && (
                        <Link href={project.code} target="_blank" className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors duration-200">
                          <Github className="w-5 h-5 text-white" />
                        </Link>
                      )}
                      {project.figma && (
                        <Link href={project.figma} target="_blank" className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors duration-200">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Badge className="text-emerald-400 border-emerald-400/20 bg-emerald-400/10">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-neutral-400 text-sm lg:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium text-emerald-400/70 bg-emerald-400/10 border border-emerald-400/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                        >
                          <Eye className="w-4 h-4" />
                          Live Demo
                        </Link>
                      )}
                      {project.code && (
                        <Link
                          href={project.code}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </Link>
                      )}
                      {project.figma && (
                        <Link
                          href={project.figma}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Design
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-neutral-400 text-sm">
              More projects available on my GitHub profile
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
