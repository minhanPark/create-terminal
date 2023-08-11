"use client";

import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { IconContext } from "react-icons";
import { VscBlank } from "react-icons/vsc";

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
            {/* 크기를 유지해주는 blank icon이 있어서 hover 시 바꿔주면 될듯하다 */}
            <VscBlank />
          </div>
          <div className="bg-yellow-600 inline-block rounded-full">
            <BiMinus />
          </div>
          <div className="bg-blue-600 inline-block rounded-full">
            <AiOutlineExpandAlt />
          </div>
        </div>
      </div>
      <div
        className="bg-red-300 grow"
        onPointerDownCapture={(e) => e.stopPropagation()}
      >
        {/* 정해진 크기에 줄바꿈이 되도록 하려면 textarea를 사용해서 입력칸을
        만들어야 한다. */}
        <textarea className="border-none bg-transparent outline-none resize-none overflow-hidden" />
      </div>
    </motion.div>
  );
}
