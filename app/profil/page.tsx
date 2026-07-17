import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ProfilPage() {
  const sudahLogin = true;

  return (
    <>
      <Header />

      <main className="pt-24 pb-20 bg-gray-100 min-h-screen">

        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

          {sudahLogin ? (

            <>
              {/* Header Profil */}
              <div className="bg-black text-white p-8 flex items-center gap-5">

                <Image
                  src="/images/avatar/avatar.png"
                  alt="Profil"
                  width={80}
                  height={80}
                  className="rounded-full bg-white"
                />

                <div>
                  <h2 className="text-2xl font-bold">
                    Nama User
                  </h2>

                  <p className="text-gray-300">
                    user@email.com
                  </p>
                </div>

              </div>

              {/* Menu */}

              <div className="p-6 space-y-4">

                <Link
                  href="/wishlist"
                  className="block border rounded-2xl p-4 hover:bg-gray-100"
                >
                  ❤️ Wishlist
                </Link>

                <Link
                  href="/pesanan"
                  className="block border rounded-2xl p-4 hover:bg-gray-100"
                >
                  📦 Pesanan
                </Link>

                <Link
                  href="/pengaturan"
                  className="block border rounded-2xl p-4 hover:bg-gray-100"
                >
                  ⚙️ Pengaturan
                </Link>

              </div>

            </>

          ) : (

            <div className="p-8">

              <h2 className="text-3xl font-bold text-center">
                Selamat Datang
              </h2>

              <p className="text-center text-gray-500 mt-3">
                Silakan masuk untuk melanjutkan.
              </p>

              <Link
                href="/login"
                className="block mt-8 bg-black text-white text-center py-4 rounded-xl"
              >
                Masuk
              </Link>

              <Link
                href="/daftar"
                className="block mt-4 border text-center py-4 rounded-xl"
              >
                Daftar
              </Link>

            </div>

          )}

        </div>

      </main>

      <Footer />

    </>
  );
      }
