import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="text-white p-5 flex justify-center gap-8 text-xl">
      <Link href="/">Home </Link>
      <Link href="skills">skills </Link>
      <Link href="project">project </Link>
      <Link href='contact'>contact </Link>
    </nav>
  );
};

export default Navbar;
