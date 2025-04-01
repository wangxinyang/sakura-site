import createMiddleware from "next-intl/middleware";
import { locales } from "./lib/i18n";

export default createMiddleware({
  // 默认语言设置为日语
  defaultLocale: "ja",
  locales,
  // 语言切换策略
  localePrefix: "as-needed",
});

export const config = {
  // 匹配所有路径，排除API路由、静态文件等
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
