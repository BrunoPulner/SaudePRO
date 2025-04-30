"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import { handleRegister } from "../_actions/login";
import logoImg from "../../../../public/logo_semfundo.png";

export function Header() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [{ href: "#profissionais", label: "Profissionais" }];

  async function handleLogin() {
    await handleRegister("github");
  }

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          onClick={() => setIsOpen(false)}
          className="bg-transparent hover:bg-transparent text-black shadow-none"
        >
          <Link href={item.href} className="text-base">
            {item.label}
          </Link>
        </Button>
      ))}

      {status === "loading" ? null : session ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-1 rounded-md px-4"
        >
          Acessar Clínica
        </Link>
      ) : (
        <Button onClick={handleLogin}>
          <LogIn />
          Portal da Clínica
        </Button>
      )}
    </>
  );

  return (
    <header className="w-full bg-white shadow-sm">
      <div
        className="
          container mx-auto
          relative                   /* para o absolute do hambúrguer */
          flex justify-center        /* mobile: centraliza link+logo */
          items-center
          py-4 px-6
          md:flex-row md:justify-between /* desktop: linha e espaçamento */
        "
      >
        {/* ========== Logo centralizado em mobile ========== */}
        <div className="flex flex-col items-center">
          <Link href="/" className="text-3xl font-bold text-zinc-900">
            Saude<span className="text-emerald-500">AGENDA</span>
          </Link>
          <Image
            src={logoImg}
            alt="Logo SaúdeAgenda"
            width={60}
            height={60}
            className="mt-2"
          />
        </div>

        {/* ========== Navegação desktop ========== */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        {/* ========== Hambúrguer mobile posicionado à direita ========== */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            asChild
            className="
              md:hidden
              absolute right-6 top-1/2 -translate-y-1/2
            "
          >
            <Button variant="ghost" size="icon" className="text-black">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <SheetTitle>Menu</SheetTitle>
            <SheetHeader />
            <SheetDescription>Veja nossos links</SheetDescription>
            <nav className="flex flex-col space-y-4 mt-6">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
