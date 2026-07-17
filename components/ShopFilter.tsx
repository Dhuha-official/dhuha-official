"use client";

const menu = [
  "Semua",
  "Kaos",
  "Collection DHUHA",
  "Kemeja",
  "Jacket",
  "Aksesoris",
  "Parfum",
];

export default function ShopFilter() {
  return (
    <section className="sticky top-16 z-40 bg-white border-y">

      <div className="overflow-x-auto">

        <div className="flex gap-4 px-5 py-4 w-max">

          {menu.map((item) => (

            <button
              key={item}
              className="px-6 py-2 rounded-full border hover:bg-black hover:text-white transition whitespace-nowrap"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
}
