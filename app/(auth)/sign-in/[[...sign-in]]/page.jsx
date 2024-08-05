import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white lg:grid lg:min-h-screen lg:grid-cols-12">
      <section className="relative flex flex-col bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <div className="relative p-6 lg:p-12 z-10">
          <a className="block text-white" href="#">
            <span className="sr-only">Home</span>
          </a>

          <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Bem vindo ao Econovise!
          </h2>

          <p className="mt-4 leading-relaxed text-white">
            Mantenha o controle suas contas, cartões, planejamentos e objetivos.
          </p>
        </div>
        <img
          alt=""
          src="./login.svg"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.8 }}
        />
      </section>

      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl">
          <div className="relative -mt-16 block lg:hidden">
            <a
              className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
              href="#"
            >
              <span className="sr-only">Home</span>
            </a>
          </div>

          <SignIn />
        </div>
      </main>
    </section>
  );
}
