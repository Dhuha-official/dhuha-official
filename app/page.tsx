import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* Hero */}
        <section className="h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center px-6">

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              DHUHA
            </h1>

            <p className="text-lg text-gray-300 mb-8">
              Strength • Purpose • Faith
            </p>

            <Link
              href="#shop"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              SHOP NOW
            </Link>

          </div>
        </section>

        {/* Shop */}
        <section
          id="shop"
          className="min-h-screen bg-white py-20"
        >
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-12">
              SHOP
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[1,2,3,4,5,6,7,8].map((item)=>(
                <div
                  key={item}
                  className="border rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
                >

                  <img
                    src="/images/products/product.jpg"
                    alt="Produk DHUHA"
                    className="aspect-square object-cover"
                  />

                  <div className="p-4">

                    <h3 className="font-semibold">
                      DHUHA Collection {item}
                    </h3>

                    <p className="text-yellow-600 font-bold mt-2">
                      Rp299.000
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
                  }
