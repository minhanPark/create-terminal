"use client";

import { useState } from "react";
import SmallIcon from "./components/SmallIcon/page";
import SmallTerminal from "./components/SmallTerminal/page";

type TerminalState = "Icon" | "Small" | "Large";

export default function Home() {
  const [terminalState, setTerminalState] = useState<TerminalState>("Small");
  const changeTerminalState = (state: TerminalState) => {
    setTerminalState(state);
  };
  return (
    <div className="h-screen bg-slate-700">
      {terminalState === "Icon" && (
        <SmallIcon changeTerminal={changeTerminalState} />
      )}
      {terminalState === "Small" && (
        <SmallTerminal changeTerminal={changeTerminalState} />
      )}
    </div>
  );
}
