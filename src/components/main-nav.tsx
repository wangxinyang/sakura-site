"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X, Cherry } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

export function MainNav() {
  const t = useTranslations("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routes = [
    { href: "/", label: t("home") },
    { href: "/news", label: t("news") },
    { href: "/team", label: t("team") },
    { href: "/players", label: t("players") },
    { href: "/join", label: t("join") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full main-nav">
      {/* Top Announcement Bar */}
      <div className="bg-sakura text-white py-1 px-4 text-center text-sm font-medium">
        <p>2025シーズン 新メンバー募集中!</p>
      </div>

      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 md:gap-4 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 flex items-center justify-center bg-sakura rounded-full overflow-hidden group">
              <Cherry className="h-6 w-6 text-white animate-pulse group-hover:animate-bounce" />
              <div className="absolute inset-0 bg-pink-200 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-30"></div>
              <div className="absolute -inset-1 bg-pink-100 rounded-full animate-ping opacity-30 duration-1000 hidden group-hover:block"></div>
            </div>
            <span className="font-bold text-xl md:text-2xl children-font text-sakura-dark">
              <span className="text-sakura animate-pulse">サクラ</span>
              野球クラブ
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <div className="flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "nav-link text-sm font-medium transition-colors hover:text-sakura"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Toggle Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-sakura"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-1 md:hidden bg-background">
          <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-sakura children-font flex items-center"
                  )}
                  onClick={toggleMenu}
                >
                  <Cherry className="h-4 w-4 mr-2 text-sakura animate-pulse" />
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="flex justify-center mt-4">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
