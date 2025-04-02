import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import ClientLayout from "./client-layout";
import { unstable_setRequestLocale } from "next-intl/server";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  // 验证区域设置
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // 启用静态渲染
  unstable_setRequestLocale(locale as Locale);

  const messages = await getMessages(locale);

  return (
    <ClientLayout locale={locale} messages={messages}>
      {children}
    </ClientLayout>
  );
}
