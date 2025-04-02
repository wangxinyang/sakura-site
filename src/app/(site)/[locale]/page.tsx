"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import { Clock, MapPin, Users } from "lucide-react";
import PaperCard from "@/components/paper-card";
import { InkButton } from "@/components/ink-button";
import WaveHeading from "@/components/wave-heading";
import { useState, useEffect } from "react";
import AnimatedText from "@/components/animated-text";

export default function Home() {
  const t = useTranslations("home");
  const joinT = useTranslations("join");
  const contactT = useTranslations("contact");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/images/WechatIMG5.jpg",
      title: t("hero.slides.1.title", {
        fallback: "サクラ野球クラブへようこそ",
      }),
      description: t("hero.slides.1.description", {
        fallback: "子どもたちの成長と友情を育む地域密着型の野球クラブです",
      }),
    },
    {
      id: 2,
      image: "/images/WechatIMG9.jpg",
      title: t("hero.slides.2.title", { fallback: "練習風景" }),
      description: t("hero.slides.2.description", {
        fallback: "毎週土曜日・日曜日に練習を行っています",
      }),
    },
    {
      id: 3,
      image: "/images/WechatIMG37.jpg",
      title: t("hero.slides.3.title", { fallback: "試合" }),
      description: t("hero.slides.3.description", {
        fallback: "地域の他チームとの試合を通じて実践経験を積みます",
      }),
    },
  ];

  const news = [
    {
      date: "2023.12.15",
      title: t("news.items.1.title", {
        fallback: "2025シーズン 新メンバー募集開始",
      }),
      category: t("news.items.1.category", { fallback: "お知らせ" }),
      content: t("news.items.1.content", {
        fallback:
          "来年度の新入部員を募集します。対象は小学1年生から6年生まで。見学・体験随時受付中です。",
      }),
    },
    {
      date: "2023.11.20",
      title: t("news.items.2.title", { fallback: "春の友好試合の結果" }),
      category: t("news.items.2.category", { fallback: "試合結果" }),
      content: t("news.items.2.content", {
        fallback:
          "先週末に行われた港区チームとの友好試合は3対2で勝利しました。全員が素晴らしいプレーを見せてくれました。",
      }),
    },
    {
      date: "2023.10.05",
      title: t("news.items.3.title", { fallback: "練習場所の変更について" }),
      category: t("news.items.3.category", { fallback: "お知らせ" }),
      content: t("news.items.3.content", {
        fallback:
          "10月から練習場所が江東区スポーツセンターに変更になります。詳細は各学年のコーチから連絡があります。",
      }),
    },
  ];

  // 自动轮播
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl text-sakura font-bold">
          サクラ野球クラブ
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background">
        {/* Hero Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center lg:flex-row-reverse">
          {/* Hero Image */}
          <div className="lg:w-1/2 lg:pl-10">
            <div className="relative mt-10 lg:mt-0">
              {mounted ? (
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-muted animate-pulse" />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                    }}
                  >
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-muted animate-pulse" />
              )}
            </div>
          </div>

          {/* Hero Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="animate-pulse text-2xl text-sakura font-bold dark:text-sakura-light">
              <AnimatedText
                text="サクラ野球クラブ"
                animation="wave"
                delay={0.1}
                speed={1}
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-float children-font dark:text-foreground">
              <AnimatedText
                text={t("hero.title", {
                  fallback: "東京で子どもたちと野球を楽しもう！",
                })}
                animation="fadeIn"
                delay={0.4}
              />
            </h1>
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
              <AnimatedText
                text={t("hero.subtitle", {
                  fallback:
                    "子供たちの成長と友情を育むサクラ野球クラブへようこそ",
                })}
                animation="slideUp"
                delay={0.6}
              />
            </p>
            <div className="animate-fadeIn" style={{ animationDelay: "0.8s" }}>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/join">
                  {t("hero.cta", { fallback: "入部案内を見る" })}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement & Quick Access */}
      <section className="bg-sakura text-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 text-white border-white px-2 py-1 rounded-md text-xs font-medium">
                お知らせ
              </div>
              <p className="font-medium">
                {t("announcement", {
                  fallback: "2025シーズン 新メンバー募集中!",
                })}
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/20 text-white border-white dark:text-sakura-foreground dark:hover:text-sakura-foreground"
                asChild
              >
                <Link href="/news">
                  {t("news.viewAll", { fallback: "ニュース一覧" })}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/20 text-white border-white dark:text-sakura-foreground dark:hover:text-sakura-foreground"
                asChild
              >
                <Link href="/contact">
                  {contactT("cta", { fallback: "お問い合わせ" })}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container">
          <WaveHeading>
            {t("about.title", { fallback: "クラブについて" })}
          </WaveHeading>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <PaperCard className="!p-0 overflow-hidden">
                <Image
                  src="/images/WechatIMG9.jpg"
                  alt="Team Photo"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </PaperCard>
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <p className="text-lg dark:text-foreground">
                {t("about.description", {
                  fallback:
                    "サクラ野球クラブは、江東区を拠点に活動する少年野球チームです。野球を通じて子どもたちの心身の成長を促し、チームワークや思いやりの心を育てることを目指しています。",
                })}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <PaperCard
                  className="flex flex-col h-full"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                  }}
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="/images/WechatIMG9.jpg"
                      alt="Practice"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-foreground">
                    {t("about.stats.members.title", {
                      fallback: "部員数",
                    })}
                  </h3>
                  <p className="mb-4 flex-grow dark:text-foreground/80">
                    {t("about.stats.members.description", {
                      fallback: "小学1～6年生、約45名",
                    })}
                  </p>
                </PaperCard>

                <PaperCard
                  className="flex flex-col h-full"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                  }}
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="/images/WechatIMG5.jpg"
                      alt="Matches"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-foreground">
                    {t("about.stats.practice.title", {
                      fallback: "練習日",
                    })}
                  </h3>
                  <p className="mb-4 flex-grow dark:text-foreground/80">
                    {t("about.stats.practice.description", {
                      fallback: "毎週土日 9:00-12:00",
                    })}
                  </p>
                </PaperCard>

                <PaperCard
                  className="flex flex-col h-full"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                  }}
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="/images/WechatIMG37.jpg"
                      alt="Events"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-foreground">
                    {t("about.stats.location.title", {
                      fallback: "活動場所",
                    })}
                  </h3>
                  <p className="mb-4 flex-grow dark:text-foreground/80">
                    {t("about.stats.location.description", {
                      fallback: "江東区スポーツセンター",
                    })}
                  </p>
                </PaperCard>
              </div>
              <div className="mt-6">
                <InkButton
                  variant="outline"
                  href="/coaches"
                  className="group dark:border-foreground dark:text-foreground"
                >
                  {t("about.cta", { fallback: "チーム紹介を見る" })}
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 dark:text-foreground">
                    →
                  </span>
                </InkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-muted dark:bg-secondary">
        <div className="container">
          <WaveHeading>
            {t("activities.title", { fallback: "活動内容" })}
          </WaveHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PaperCard className="flex flex-col h-full dark:bg-card">
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src="/images/WechatIMG9.jpg"
                  alt="Practice"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-foreground">
                {t("activities.practice.title", { fallback: "練習" })}
              </h3>
              <p className="mb-4 flex-grow dark:text-foreground/80">
                {t("activities.practice.description", {
                  fallback:
                    "基礎から丁寧に指導し、一人ひとりの成長をサポートします。",
                })}
              </p>
              <InkButton
                variant="sakura"
                size="sm"
                href="/join"
                className="mt-auto self-start"
              >
                {t("activities.practice.cta", { fallback: "詳細を見る" })}
              </InkButton>
            </PaperCard>

            <PaperCard className="flex flex-col h-full dark:bg-card">
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src="/images/WechatIMG5.jpg"
                  alt="Matches"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-foreground">
                {t("activities.matches.title", { fallback: "試合" })}
              </h3>
              <p className="mb-4 flex-grow dark:text-foreground/80">
                {t("activities.matches.description", {
                  fallback:
                    "地域の他チームとの練習試合や大会に参加し、実践経験を積みます。",
                })}
              </p>
              <InkButton
                variant="sakura"
                size="sm"
                href="/coaches"
                className="mt-auto self-start"
              >
                {t("activities.matches.cta", { fallback: "詳細を見る" })}
              </InkButton>
            </PaperCard>

            <PaperCard className="flex flex-col h-full dark:bg-card">
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src="/images/WechatIMG37.jpg"
                  alt="Events"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-foreground">
                {t("activities.events.title", { fallback: "イベント" })}
              </h3>
              <p className="mb-4 flex-grow dark:text-foreground/80">
                {t("activities.events.description", {
                  fallback:
                    "チーム合宿や親子イベントなど、野球以外の活動も充実しています。",
                })}
              </p>
              <InkButton
                variant="sakura"
                size="sm"
                href="/news"
                className="mt-auto self-start"
              >
                {t("activities.events.cta", { fallback: "詳細を見る" })}
              </InkButton>
            </PaperCard>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container">
          <WaveHeading>{t("news.title", { fallback: "お知らせ" })}</WaveHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 card-hover dark:bg-card dark:text-foreground"
              >
                <div className="p-4 pb-3 border-b dark:border-border">
                  <div className="flex justify-between items-center mb-2">
                    <div className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded-full text-xs font-medium dark:bg-secondary dark:text-secondary-foreground">
                      {item.category}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold dark:text-foreground">
                    {item.title}
                  </h3>
                </div>
                <div className="p-4 pb-3">
                  <p className="line-clamp-3 dark:text-foreground">
                    {item.content}
                  </p>
                </div>
                <div className="p-4 pt-0 flex justify-end">
                  <Button variant="ghost" size="sm" className="group" asChild>
                    <Link href="/news" className="dark:text-foreground">
                      {t("news.readMore", { fallback: "続きを読む" })}
                      <span className="ml-1 inline-block transition-transform group-hover:translate-x-1 dark:text-foreground">
                        →
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <InkButton variant="outline" href="/news">
              {t("news.viewAll", { fallback: "ニュース一覧" })}
            </InkButton>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-muted dark:bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <Image
            src="/images/WechatIMG5.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <WaveHeading>
              {joinT("title", { fallback: "入部案内" })}
            </WaveHeading>
            <p className="text-lg mb-8 dark:text-foreground">
              {joinT("description", {
                fallback:
                  "サクラ野球クラブでは、野球が初めてのお子様から経験者まで幅広く部員を募集しています。いつでも見学・体験が可能です。",
              })}
            </p>
            <InkButton
              variant="sakura"
              size="lg"
              href="/join"
              className="button-bounce"
            >
              {joinT("cta", { fallback: "入部案内を見る" })}
            </InkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
