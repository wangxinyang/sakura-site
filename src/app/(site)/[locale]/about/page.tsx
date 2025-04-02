"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="container py-8 flex items-center justify-center min-h-[50vh] dark:text-foreground">
        Loading...
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 section-title dark:text-foreground">
          {t("title")}
        </h1>
        <p className="text-muted-foreground dark:text-foreground/70">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 dark:text-foreground">
            {t("vision.title")}
          </h2>
          <p className="mb-4 dark:text-foreground/80">{t("vision.content")}</p>
          <p className="mb-4 dark:text-foreground/80">{t("vision.content2")}</p>
        </div>
        <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
          <Image
            src="/images/about/vision.jpg"
            alt="Our Vision"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-64 md:h-auto rounded-lg overflow-hidden md:order-1">
          <Image
            src="/images/about/history.jpg"
            alt="Our History"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 dark:text-foreground">
            {t("history.title")}
          </h2>
          <p className="mb-4 dark:text-foreground/80">{t("history.content")}</p>
          <p className="dark:text-foreground/80">{t("history.content2")}</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center dark:text-foreground">
          {t("values.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 dark:bg-secondary p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-sakura dark:text-sakura-light">
              {t("values.item1.title")}
            </h3>
            <p className="dark:text-foreground/80">
              {t("values.item1.content")}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-secondary p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-sakura dark:text-sakura-light">
              {t("values.item2.title")}
            </h3>
            <p className="dark:text-foreground/80">
              {t("values.item2.content")}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-secondary p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-sakura dark:text-sakura-light">
              {t("values.item3.title")}
            </h3>
            <p className="dark:text-foreground/80">
              {t("values.item3.content")}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center dark:text-foreground">
          {t("team.title")}
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto dark:text-foreground/80">
          {t("team.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/images/team/member1.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold dark:text-foreground">
              鈴木 誠一
            </h3>
            <p className="text-sakura dark:text-sakura-light">
              {t("team.member1.role")}
            </p>
            <p className="text-sm mt-2 dark:text-foreground/80">
              {t("team.member1.bio")}
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/images/team/member2.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold dark:text-foreground">
              佐藤 春子
            </h3>
            <p className="text-sakura dark:text-sakura-light">
              {t("team.member2.role")}
            </p>
            <p className="text-sm mt-2 dark:text-foreground/80">
              {t("team.member2.bio")}
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/images/team/member3.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold dark:text-foreground">
              田中 健太
            </h3>
            <p className="text-sakura dark:text-sakura-light">
              {t("team.member3.role")}
            </p>
            <p className="text-sm mt-2 dark:text-foreground/80">
              {t("team.member3.bio")}
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/images/team/member4.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold dark:text-foreground">
              山本 美咲
            </h3>
            <p className="text-sakura dark:text-sakura-light">
              {t("team.member4.role")}
            </p>
            <p className="text-sm mt-2 dark:text-foreground/80">
              {t("team.member4.bio")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
