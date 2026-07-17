import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex items-center justify-center bg-gray-100 pt-24 pb-20">

        <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">

          <h1 className="text-3xl font-bold text-center">
            Masuk
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Selamat datang di DHUHA
          </p>

          <form className="mt-8 space-y-5">

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl px-4 py-3"
            />

            <button
              className="w-full bg-black text-white py-3 rounded-xl font-semibold"
            >
              Masuk
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Belum punya akun?
          </p>

          <Link
            href="/daftar"
            className="block mt-3 text-center border py-3 rounded-xl hover:bg-black hover:text-white"
          >
            Daftar
          </Link>

        </div>

      </main>

      <Footer />

    </>
  );
}
