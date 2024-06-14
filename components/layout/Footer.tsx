"use client";
import React from 'react'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
const Footer = () => {
  return (
    <m.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className='text-white container flex gap-6 m-5 mt-[10vh]'>
      <Link href='contact'>Let&apos;s connect</Link>
      <Link href='https://github.com/mbadiao' target='blank'>
      <Github />
      </Link>
      <Link href='https://www.instagram.com/diao__mb01' target='blank'>
      <Instagram />
      </Link>
      <Link href='https://linkedin.com/in/mbaye-diao' target='blank'>
      <Linkedin />
      </Link>
      <Link href='https://x.com/MbayeDiao404' target='blank'>
      <Twitter />
      </Link>
    </m.div>
  )
}

export default Footer