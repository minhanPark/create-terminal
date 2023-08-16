"use client";

import { BsFillTerminalFill } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion, useMotionValue } from "framer-motion";
import { use } from "react";

interface Props {
  changeTerminal: (state: "Icon" | "Small" | "Large") => void;
}

export default function SmallIcon({ changeTerminal }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  return (
    <motion.div
      style={{
        background: "black",
        display: "inline-block",
        padding: 5,
        borderRadius: 5,
        border: "3px solid gray",
        x: x,
        y: y,
      }}
      onClick={() => changeTerminal("Small")}
      whileHover={{ scale: 1.02 }}
      drag
      layoutId="terminal"
    >
      <FaTerminal size={50} color="white" />
    </motion.div>
  );
}
