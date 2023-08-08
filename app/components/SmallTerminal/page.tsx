"use client";

import { motion } from "framer-motion";

export default function SmallTerminal() {
  return (
    <motion.div style={{ width: "500px", height: "500px" }}>
      <div style={{ backgroundColor: "#dfe6e9" }}>헤더</div>
    </motion.div>
  );
}
