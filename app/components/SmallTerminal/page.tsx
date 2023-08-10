"use client";

import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function SmallTerminal() {
  return (
    <motion.div
      style={{ width: "500px", height: "500px" }}
      className="flex flex-col"
      drag
      dragMomentum={false}
    >
      <div style={{ backgroundColor: "#dfe6e9", height: "25px" }}>
        <div>
          <div className="bg-red-600 inline-block rounded-full">
            <IoCloseSharp />
          </div>
        </div>
      </div>
      <div
        className="bg-red-300 grow"
        onPointerDownCapture={(e) => e.stopPropagation()}
      ></div>
    </motion.div>
  );
}
