"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Ctx = createContext<string[]>([]);

export function NavHistoryProvider({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    setHistory((prev) => {
      if (prev[prev.length - 1] === pathname) return prev;
      return [...prev, pathname].slice(-3);
    });
  }, [pathname]);

  return <Ctx.Provider value={history}>{children}</Ctx.Provider>;
}

export function useNavHistory() {
  return useContext(Ctx);
}
