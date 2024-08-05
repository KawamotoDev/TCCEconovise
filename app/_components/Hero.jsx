import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
function Hero() {
  return (
    <section className="bg-gray-200 flex items-center flex-col">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Gerencie Suas Despesas
        <strong className="font-extrabold text-primary sm:block"> Controle Seu Dinheiro </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Comece a criando seus orçamentos e economize muito dinheiro!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-black sm:w-auto"
          href="/dashboard"
        >
          QUERO ECONOVISAR!
        </a>
      </div>
    </div>
  </div>
  <Image src={'/dashboard.png'} alt='dashboard'
  width={1000}
  height={700}
  className='-mt-9 rounded-xl border-2'/>
</section>
  )
}

export default Hero