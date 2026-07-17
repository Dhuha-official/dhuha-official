import Link from "next/link";
import { Instagram, MessageCircle, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-3">
          DHUHA
        </h2>

        <p className="text-gray-400 mb-8">
          Built With Faith
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-semibold mb-3">
              About DHUHA
            </h3>

            <p className="text-gray-400 text-sm leading-7">
              DHUHA adalah brand fashion premium dengan konsep
              Strength • Purpose • Faith.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Menu
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link href="/">Home</Link>
              <Link href="/produk">Shop</Link>
              <Link href="/profil">Profil</Link>
              <Link href="/keranjang">Keranjang</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Follow Us
            </h3>

            <div className="flex gap-5">
              <Instagram />
              <Music2 />
              <MessageCircle />
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 DHUHA Official. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
              }
