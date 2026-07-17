"use client";

import Link from "next/link";
import { House, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest">
          DHUHA
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6">
          <Link href="/">
            <House className="w-6 h-6 hover:text-yellow-400 transition" />
          </Link>

          <Link href="/keranjang">
            <ShoppingCart className="w-6 h-6 hover:text-yellow-400 transition" />
          </Link>

          <Link href="/profil">
            <User className="w-6 h-6 hover:text-yellow-400 transition" />
          </Link>
        </nav>

      </div>
    </header>
  );
}
