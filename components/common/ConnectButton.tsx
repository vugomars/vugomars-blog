"use client";

import { motion } from "framer-motion";

interface IConnectButtonProps {}

const ConnectButton = (props: IConnectButtonProps) => {
  return (
    <motion.div
      initial={{
        x: 0,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <button className="hidden md:flex px-4 py-1.5 border-b-2 border-r-2 border-gray-500 dark:border-cyan-400 dark:bg-gray-900 bg-yellow-400 transition-all duration-400 cursor-pointer font-bold rounded-md hover:border-none">
        Connect
      </button>
    </motion.div>
  );
};

export default ConnectButton;
