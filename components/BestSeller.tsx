"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BestSeller() {
  const products = [1, 2, 3, 4, 5];

  return (
    <section className="py-20 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-10">
          BEST SELLER
        </h2>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

                <Image
                  src="/images/products/product3.png"
                  alt="DHUHA"
                  width={500}
                  height={500}
                  className="w-full h-80 object-cover"
                />

                <div className="p-5">

                  <h3 className="font-bold text-lg">
                    DHUHA Collection {item}
                  </h3>

                  <p className="text-zinc-500 mt-2">
                    Premium Oversize
                  </p>

                  <p className="text-amber-600 font-bold text-xl mt-3">
                    Rp299.000
                  </p>

                  <button className="w-full mt-5 bg-black text-white py-3 rounded-xl hover:bg-zinc-800">
                    Lihat Produk
                  </button>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
