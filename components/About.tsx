import Image from "next/image";

import pefile from "../public/perfil.jpg";
import { Borel } from "next/font/google";

const borel = Borel({ subsets: ["latin"], weight: ["400"] });

export function About() {
  return (
    <section className="flex items-center justify-center min-h-[70vh] container mx-auto flex-col md:flex-row py-[3rem]">
      <div className="flex-1 flex items-center justify-center flex-col py-8 h-full">
        <div className="max-w-md space-y-8">
          <h2 className="text-lg">
            Prazer, eu sou{" "}
            <span className={`${borel.className} text-2xl`}>
              Raphaela Santiago
            </span>
            <h3 className="text-gray-500 text-sm">
              Porque você deve me ouvir?
            </h3>
          </h2>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio
            animi explicabo harum sint. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ex tempora autem ut!
          </p>

          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio
            animi explicabo harum sint. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ex tempora autem ut!
          </p>
        </div>
      </div>

      <div className="flex-1 h-full flex items-center justify-center">
        <div className="rounded-lg min-h-[200px] h-[70%] w-[300px] bg-green-300 bg-[url('../public/perfil.jpg')] bg-cover bg-no-repeat bg-center"></div>
      </div>
    </section>
  );
}
