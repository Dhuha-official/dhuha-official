import ProductGrid from "@/components/ProductGrid";
import ShopFilter from "@/components/ShopFilter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewCollection from "@/components/NewCollection";
import BestSeller from "@/components/BestSeller";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* HERO */}
        <section className="relative h-screen">

          <Image
            src="/images/products/product3.png"
            alt="DHUHA"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center text-white">

              <h1 className="text-6xl font-bold">
                DHUHA
              </h1>

              <p className="mt-5 text-xl">
                Strength • Purpose • Faith
              </p>

              <button className="mt-10 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-yellow-400 transition">
                SHOP NOW
              </button>

            </div>

          </div>

        </section>

<NewCollection />
        
        <BestSeller />
        
        <ShopFilter />

        <ProductGrid />
        
        <Footer />

      </main>
    </>
  );
}
