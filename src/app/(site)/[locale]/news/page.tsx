"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

export default function NewsPage() {
  const t = useTranslations("home");

  // 新闻数据，实际项目中应该从API获取
  const news = [
    {
      id: 1,
      date: "2025.04.01",
      title: "2025シーズン 新メンバー募集開始",
      category: "お知らせ",
      image: "/images/WechatIMG52.jpg",
      content: `
        サクラ野球クラブでは、2025シーズンの新メンバーを募集しています。
        野球経験の有無は問いません。小学1年生から6年生までの男女が対象です。
        まずは体験参加からお気軽にどうぞ。体験参加は毎週土曜日の9:00から受け付けています。
        詳細は「入部案内」ページをご覧ください。
        お問い合わせは「お問い合わせ」フォームからお願いします。
      `,
    },
    {
      id: 2,
      date: "2025.03.27",
      title: "春の友好試合の結果",
      category: "試合結果",
      image: "/images/WechatIMG65.jpg",
      content: `
        3月27日に行われた春の友好試合の結果をお知らせします。
        vs 青空ベースボールクラブ: 7-5 (勝利)
        vs 海岸ジュニア: 3-3 (引き分け)
        vs 山田クラブ: 4-6 (敗北)
        
        子どもたちは全力で戦い、多くの経験を積むことができました。特に6年生の山本選手は、
        3試合で計5安打、2本塁打の素晴らしい活躍を見せてくれました。
        次回の試合も応援よろしくお願いします。
      `,
    },
    {
      id: 3,
      date: "2025.03.20",
      title: "練習場所の変更について",
      category: "お知らせ",
      image: "/images/WechatIMG31.jpg",
      content: `
        4月から練習場所が変更になりますのでお知らせします。
        新しい練習場所: 江東区立〇〇公園グラウンド
        練習時間: 毎週土曜・日曜 9:00-12:00
        
        公園の駐車場が限られているため、できるだけ公共交通機関をご利用ください。
        詳細は各学年の担当コーチからご連絡いたします。
      `,
    },
    {
      id: 4,
      date: "2025.03.15",
      title: "江東区大会出場決定",
      category: "お知らせ",
      image: "/images/WechatIMG33.jpg",
      content: `
        5月に開催される江東区少年野球大会への出場が決定しました。
        日程: 2025年5月3日(土)〜5日(月・祝)
        場所: 江東区総合運動場
        
        大会に向けて、4月からの練習はさらに強化していきます。選手の皆さんは、
        体調管理をしっかりと行い、練習に参加するようにしてください。
        保護者の皆様のご協力もよろしくお願いします。
      `,
    },
    {
      id: 5,
      date: "2025.03.10",
      title: "新しいユニフォームについて",
      category: "お知らせ",
      image: "/images/WechatIMG34.jpg",
      content: `
        2025シーズンから新しいユニフォームを導入します。
        デザインは伝統的な桜のモチーフを残しつつ、より動きやすい素材に変更します。
        サイズ合わせは3月末に行いますので、全選手は必ず参加してください。
        
        ユニフォーム代: 8,000円（上下セット）
        ※経済的理由でユニフォーム購入が難しいご家庭は、コーチまでご相談ください。
      `,
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 section-title">
        {t("news.title")}
      </h1>

      <div className="space-y-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/3 h-60 md:h-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                  <Badge className="bg-sakura">{item.category}</Badge>
                </div>

                <h2 className="text-xl font-bold mb-4">{item.title}</h2>

                <div className="whitespace-pre-line text-muted-foreground">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
