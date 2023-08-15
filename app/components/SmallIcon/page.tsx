"use client";

import { BsFillTerminalFill } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

interface Props {
  changeTerminal: (state: "Icon" | "Small" | "Large") => void;
}

export default function SmallIcon({ changeTerminal }: Props) {
  return (
    <motion.div
      style={{
        background: "black",
        display: "inline-block",
        padding: 5,
        borderRadius: 5,
        border: "3px solid gray",
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
