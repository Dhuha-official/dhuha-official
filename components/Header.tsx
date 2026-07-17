"use client";

import Link from "next/link";
import { House, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-[6px] text-white"
        >
          DHUHA
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6">

          <Link href="/">
            <House
              size={24}
              className="text-white hover:text-yellow-400 transition"
            />
          </Link>

          <Link href="/keranjang">
            <ShoppingCart
              size={24}
              className="text-white hover:text-yellow-400 transition"
            />
          </Link>

          <Link href="/profil">
            <User
              size={24}
              className="text-white hover:text-yellow-400 transition"
            />
          </Link>

        </nav>

      </div>
    </header>
  );
}
