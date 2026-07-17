"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Image from "next/image";

export default function NewCollection() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-10 text-center">
          NEW COLLECTION
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{
            delay:3000,
            disableOnInteraction:false
          }}
          breakpoints={{
            768:{
              slidesPerView:2
            },
            1024:{
              slidesPerView:3
            }
          }}
        >

          {[1,2,3,4].map((item)=>(

            <SwiperSlide key={item}>

              <div className="rounded-3xl overflow-hidden shadow-lg">

                <Image
                  src="/images/products/product3.png"
                  alt="DHUHA"
                  width={500}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}
