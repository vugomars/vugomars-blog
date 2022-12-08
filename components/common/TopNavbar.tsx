"use client";

import { Menus } from "contants/Menu";
import { motion } from "framer-motion";
import Link from "next/link";

function TopNavbar() {
  return (
    <motion.nav
      initial={{
        x: 0,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="items-center justify-center hidden lg:flex space-x-4 divide-x divide-gray-700"
    >
      {Menus.map((menu, i) => (
        <Link href="#" key={i} className="flex items-center pl-3">
          <ul className="uppercase tracking-widest relative group cursor-pointer ">
            <li className="font-light text-center">{menu}</li>
            <div className="absolute w-full h-0.5 bg-gray-700  dark:bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
          </ul>
        </Link>
      ))}
    </motion.nav>
  );
}

export default TopNavbar;
