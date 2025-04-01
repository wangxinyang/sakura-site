"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { Button } from "@/components/ui/button";
import { locales } from "@/lib/i18n";

// 语言显示名
const localeNames: Record<string, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
};

export function LanguageToggle() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();

  // 切换语言
  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex space-x-1">
      {locales.map((locale) => (
        <Button
          key={locale}
          variant="ghost"
          size="sm"
          onClick={() => handleLocaleChange(locale)}
          className="px-2"
          title={t("language") + ": " + localeNames[locale]}
        >
          <span>{localeNames[locale]}</span>
        </Button>
      ))}
    </div>
  );
}
