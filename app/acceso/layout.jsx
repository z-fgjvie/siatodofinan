import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="grid md:grid-cols-2 md:h-screen">
        <div className="md:min-h-screen  ">
          <Image
            src="/sidebar.jpg"
            alt="logo"
            width="500"
            height="500"
            className="w-full h-[50vh] sm:h-[55vh] md:h-[100%] object-cover "
          />
        </div>

        <section className="flex items-center justify-center px-4 md:px-5 py-7">
          {children}
        </section>
      </div>
    </>
  );
}
