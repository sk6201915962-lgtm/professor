"use client";
import { useEffect, useState } from "react";
import Preloader from "@/components/common/Preloader";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) return <Preloader />;

  return <>{children}</>;
}