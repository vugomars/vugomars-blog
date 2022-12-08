"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SwitchLogo() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      {currentTheme === "light" ? (
        <Image
          src="/images/logo-text.png"
          alt=" logo"
          width={200}
          height={150}
        />
      ) : (
        <Image
          src="/images/dark-logo.png"
          alt=" logo"
          width={200}
          height={150}
        />
      )}
    </motion.div>
  );
}

export default SwitchLogo;
