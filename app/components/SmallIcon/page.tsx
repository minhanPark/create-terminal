"use client";

import { BsFillTerminalFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function SmallIcon() {
  return (
    <IconContext.Provider value={{ color: "red" }}>
      <div>
        <BsFillTerminalFill size={50} />
      </div>
    </IconContext.Provider>
  );
}
