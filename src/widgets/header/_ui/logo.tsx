import Link from "next/link";
import React from 'react'
import YV from "@/widgets/header/_ui/yarovisionlogo"

export function Logo() {
  return (
    <Link className="flex items-center justify-start relative w-auto hover:opacity-80 bg-transparent bg-blend-soft-light" href="/">
      <YV />
    </Link>
  );
}
