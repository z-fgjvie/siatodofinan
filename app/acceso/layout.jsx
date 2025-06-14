import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-2 lg:h-screen">
          <div className="lg:min-h-screen">
            <Image
              src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930501/sidebar_dqvokg.jpg"
              alt="logo"
              width="500"
              height="500"
              className="w-full h-[42vh] sm:h-[55vh] md:h-[80vh] lg:h-[100%] object-cover "
            />
          </div>

          <section className="flex items-center justify-center px-4 sm:px-5 lg:px-0 pt-7 pb-14 lg:pb-12">
            {children}
          </section>
        </div>

        <footer className="px-5 pt-10 pb-16 bg-[#10242d] text-white lg:hidden">
          <div className="max-w-[75rem] mx-auto flex justify-between items-center flex-col md:flex-row gap-5">
            <div className="flex gap-6 sm:gap-12 sm:items-center sm:flex-row flex-col mb-5 md:mb-0">
              <Image
                src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930497/logo-financiera-h_xsxg1a.png"
                alt="logo"
                width="50"
                height="50"
              />
              <p className="text-gray-300 text-[1.0625rem] text-center sm:text-left">
                Copyright ©2020 Sí Te Presto.
              </p>
            </div>

            <Link href="/terminos-y-condiciones">Términos y Condiciones</Link>
            <Link href="/">Aviso de Privacidad</Link>
            <Link href="/">Aviso de Confidencialidad</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
