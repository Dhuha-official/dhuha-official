import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "DHUHA Oversize",
    price: "Rp299.000",
    image: "/images/products/product3.png",
  },
  {
    id: 2,
    name: "DHUHA Collection",
    price: "Rp349.000",
    image: "/images/products/product3.png",
  },
  {
    id: 3,
    name: "DHUHA Premium",
    price: "Rp399.000",
    image: "/images/products/product3.png",
  },
  {
    id: 4,
    name: "DHUHA Exclusive",
    price: "Rp449.000",
    image: "/images/products/product3.png",
  },
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <h2 className="text-4xl font-bold mb-10 text-center">
        SHOP
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((item) => (

          <Link
            href={`/produk/${item.id}`}
            key={item.id}
          >

            <div className="rounded-3xl overflow-hidden shadow hover:shadow-xl duration-300 bg-white">

              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-72 object-cover"
              />

              <div className="p-4">

                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-yellow-600 font-bold mt-2">
                  {item.price}
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
        }
