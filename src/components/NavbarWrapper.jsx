"use client";

import { usePathname } from "next/navigation";
import Navbar from "./../components/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const transparentNavPages = ["/"];
  const isTransparent = transparentNavPages.includes(pathname);

  return <Navbar variant={isTransparent ? "transparent" : "black"} />;
}
