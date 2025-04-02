"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const commonT = useTranslations("common");

  return (
    <footer className="border-t bg-muted">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{commonT("siteName")}</h3>
            <p className="text-muted-foreground">{t("address")}</p>
            <p className="text-muted-foreground mt-2">{t("practice")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">メニュー</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-primary">
                {commonT("home")}
              </Link>
              <Link href="/news" className="hover:text-primary">
                {commonT("news")}
              </Link>
              <Link href="/coaches" className="hover:text-primary">
                {commonT("team")}
              </Link>
              <Link href="/players" className="hover:text-primary">
                {commonT("players")}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">入部・お問い合わせ</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/join" className="hover:text-primary">
                {commonT("join")}
              </Link>
              <Link href="/contact" className="hover:text-primary">
                {commonT("contact")}
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>{t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
