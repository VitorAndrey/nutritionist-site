import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ModeToggle";

import { Borel } from "next/font/google";

const borel = Borel({ subsets: ["latin"], weight: ["400"] });

export function Header() {
  return (
    <>
      <header className="h-16 flex items-center justify-between px-4">
        <h2 className="text-2xl -mb-2">
          <span className={borel.className}>Raphaela Santiago</span>
        </h2>
        <div className="sm:flex items-center gap-4 hidden">
          <div className="flex gap-2">
            <Link href="">
              <Button variant="ghost">Sobre</Button>
            </Link>
            <Link href="">
              <Button variant="ghost">Contato</Button>
            </Link>
          </div>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center gap-2">
            <Button variant="default">Ver Produtos</Button>

            <ModeToggle />
          </div>
        </div>
      </header>

      <Separator />
    </>
  );
}
