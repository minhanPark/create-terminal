"use client";

import { BsFillTerminalFill } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

export default function SmallIcon() {
  return (
    <motion.div
      style={{
        background: "black",
        display: "inline-block",
        padding: 5,
        borderRadius: 5,
        border: "3px solid gray",
      }}
      whileHover={{ scale: 1.02 }}
      drag
    >
      <FaTerminal size={50} color="white" />
    </motion.div>
  );
}
