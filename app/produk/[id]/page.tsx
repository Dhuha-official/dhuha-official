import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ProductDetail() {
  return (
    <>
      <Header />

      <main className="pt-24 pb-20">

        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12">

          {/* Foto Produk */}
          <div>

            <Image
              src="/images/products/product3.png"
              alt="DHUHA"
              width={700}
              height={700}
              className="rounded-3xl"
            />

          </div>

          {/* Informasi Produk */}
          <div>

            <h1 className="text-4xl font-bold">
              DHUHA Premium Oversize Tee
            </h1>

            <p className="text-3xl font-bold text-yellow-600 mt-4">
              Rp299.000
            </p>

            {/* Ukuran */}

            <h3 className="mt-8 font-semibold">
              Ukuran
            </h3>

            <div className="flex gap-3 mt-3">

              {["S","M","L","XL"].map((size)=>(
                <button
                  key={size}
                  className="border px-5 py-2 rounded-xl hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}

            </div>

            {/* Warna */}

            <h3 className="mt-8 font-semibold">
              Warna
            </h3>

            <div className="flex gap-3 mt-3">

              {["Hitam","Putih","Navy"].map((color)=>(
                <button
                  key={color}
                  className="border px-5 py-2 rounded-xl hover:bg-black hover:text-white"
                >
                  {color}
                </button>
              ))}

            </div>

            {/* Deskripsi */}

            <h3 className="mt-10 font-semibold">
              Deskripsi
            </h3>

            <p className="text-gray-600 leading-8 mt-3">
              Kaos premium DHUHA menggunakan bahan cotton premium
              dengan desain minimalis yang nyaman digunakan untuk
              aktivitas sehari-hari.
            </p>

            {/* Tombol */}

            <div className="grid gap-4 mt-10">

              <button className="py-4 rounded-xl border">
                ❤️ Tambah Wishlist
              </button>

              <button className="py-4 rounded-xl bg-black text-white">
                🛒 Tambah Keranjang
              </button>

              <button className="py-4 rounded-xl bg-yellow-500 text-black font-bold">
                BELI SEKARANG
              </button>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
              }
