"use client";

import { ReactNode, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import SakuraFalling from "@/components/sakura-falling";
import { ThemeProvider } from "@/components/theme-provider";

interface ClientLayoutProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
}

export default function ClientLayout({
  children,
  locale,
  messages,
}: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="relative flex min-h-screen flex-col">
          <MainNav />
          {mounted && <SakuraFalling petalsCount={10} />}
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
