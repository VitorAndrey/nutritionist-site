import Image from "next/image";
import nutri from "../public/nutricionistabig.png";
import bg2 from "../public/bg2.jpg";

import { Borel } from "next/font/google";

const borel = Borel({ subsets: ["latin"], weight: ["400"] });

export function Info() {
  return (
    <section className="bg-emerald-500 min-h-[70vh] flex items-center relative py-[4rem]">
      <Image
        priority
        src={bg2}
        alt="background"
        fill
        className="absolute object-cover object-center brightness-[0.3]"
      />

      <div className="flex flex-col max-w-6xl mx-auto w-full p-8 gap-[3rem] z-50">
        <div className="mt-10 bg-white rounded-2xl self-start w-full max-w-2xl min-h-[10rem] shadow-md flex flex-col border-emerald-500 border">
          <div className="shadow-lg flex px-4 py-2 max-w-max -mt-10 -ml-4 rounded-lg bg-emerald-500 self-start items-center gap-2 border">
            <Image src={nutri} alt="nutri" width={40} height={40} />

            <h3>Inflamaçao Cronica</h3>
          </div>

          <div className="p-4 text-black">
            <p>
              A inflamação crônica é o termo que refere-se a tempo (cronologia),
              significando que a inflamação é de longa duração.
            </p>
            <br />
            <p>
              A inflamação crônica pode ser precedida por uma fase aguda em que
              não há cura, ou mais freqüentemente, ter desenvolvimento
              insidioso.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl self-end w-full max-w-2xl min-h-[10rem] shadow-md flex flex-col border-emerald-500 border">
          <div className="shadow-lg flex px-4 py-2 max-w-max -mt-10 -mr-4 rounded-lg bg-emerald-500 self-end items-center gap-2 border">
            <h3>Inflamaçao Aguda</h3>

            <Image src={nutri} alt="nutri" width={40} height={40} />
          </div>

          <div className="p-4 text-black">
            <p>
              Inflamação aguda quando se inicia rapidamente, com ação curta,
              tendo como principais características o edema e a migração de
              leucócitos (neutrófilos).
            </p>
            <br />
            <p>
              Inflamação crônica tem como características uma maior duração,
              presença de linfócitos e macrófagos, proliferação de vasos,
              fibrose e necrose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
