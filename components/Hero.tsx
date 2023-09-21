import Image from "next/image";

import bgImage from "../public/bg.jpg";

export function Hero() {
  return (
    <section className="w-full min-h-[70vh] relative flex items-center justify-center">
      <Image
        priority
        src={bgImage}
        alt="background"
        fill
        className="absolute object-cover object-center brightness-[0.3]"
      />

      <div className="z-50 absolute space-y-10 text-center">
        <h1 className="text-4xl text-white font-bold">
          O Impacto da <span className="text-red-400">inflamação</span> no{" "}
          <span className="text-emerald-500">Emagrecimento</span>
        </h1>

        <p className="text-gray-400">
          Descubra como os tipos de inflamação estão te sabotando na hora de
          emagrecer!
        </p>
      </div>
    </section>
  );
}
