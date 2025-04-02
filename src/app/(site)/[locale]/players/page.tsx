"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Medal, Star, Trophy, Award } from "lucide-react";
import { useState, useEffect } from "react";

export default function PlayersPage() {
  const t = useTranslations("team");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 按年级分类的球员数据
  const playersByGrade: Record<
    string,
    Array<{
      name: string;
      nameEn: string;
      role: string;
      image: string;
      position: string;
      number: string;
      bio: string;
      bioEn: string;
    }>
  > = {
    "6": [
      {
        name: "山本 健太",
        nameEn: "Kenta Yamamoto",
        role: "team-captain",
        image: "/images/WechatIMG25.jpg",
        position: "遊撃手 / Shortstop",
        number: "7",
        bio: "チームキャプテン。優れたリーダーシップを持ち、チームを率いています。遊撃手として守備範囲が広く、打順は1番を務めます。",
        bioEn:
          "Team captain with excellent leadership skills. Plays shortstop and is the team's lead-off hitter.",
      },
      {
        name: "鈴木 大輔",
        nameEn: "Daisuke Suzuki",
        role: "player",
        image: "/images/WechatIMG22.jpg",
        position: "投手 / Pitcher",
        number: "1",
        bio: "チームのエース。速い球とコントロールが持ち味で、打者としても中軸を担います。練習にも真剣に取り組む姿勢が後輩たちの模範となっています。",
        bioEn:
          "Team ace pitcher with a fast ball and good control. Also a strong batter and a role model for younger players.",
      },
      {
        name: "佐藤 翔太",
        nameEn: "Shota Sato",
        role: "player",
        image: "/images/WechatIMG23.jpg",
        position: "捕手 / Catcher",
        number: "2",
        bio: "キャプテンの山本とバッテリーを組む捕手。冷静な判断力と強肩が特徴で、盗塁を阻止する能力に優れています。チームの司令塔として試合を組み立てます。",
        bioEn:
          "Catcher who forms a battery with Captain Yamamoto. Known for his calm judgment and strong arm to prevent stolen bases.",
      },
    ],
    "5": [
      {
        name: "中村 大輔",
        nameEn: "Daisuke Nakamura",
        role: "player",
        image: "/images/WechatIMG30.jpg",
        position: "投手 / 一塁手 / Pitcher / First Base",
        number: "11",
        bio: "力強い速球を投げる投手。投げない時は一塁手として守備につきます。将来のエース候補として期待されています。",
        bioEn:
          "Pitcher with a powerful fastball. Also plays first base when not pitching. Expected to be the future ace of the team.",
      },
      {
        name: "田中 隆太",
        nameEn: "Ryuta Tanaka",
        role: "player",
        image: "/images/WechatIMG29.jpg",
        position: "中堅手 / Center Fielder",
        number: "8",
        bio: "俊足を活かした守備範囲の広い外野手。打順は2番で、バントや盗塁などの戦術面でもチームに貢献しています。",
        bioEn:
          "Outfielder with great speed and wide defensive range. Bats second in the lineup and contributes with bunts and stolen bases.",
      },
    ],
    "4": [
      {
        name: "鈴木 太郎",
        nameEn: "Taro Suzuki",
        role: "player",
        image: "/images/WechatIMG21.jpg",
        position: "捕手 / Catcher",
        number: "22",
        bio: "ゲームコーリングに優れた捕手。強い肩と素早いリリースが特徴です。年齢の割に野球の理解度が高く、将来が期待されています。",
        bioEn:
          "Catcher with great game-calling abilities. Known for his strong arm and quick release.",
      },
      {
        name: "伊藤 健",
        nameEn: "Ken Ito",
        role: "player",
        image: "/images/WechatIMG28.jpg",
        position: "外野手 / Outfielder",
        number: "25",
        bio: "俊足の外野手。守備範囲が広く、強肩を持っています。打撃も徐々に上達してきており、チームの期待の新星です。",
        bioEn:
          "Fast outfielder with a wide defensive range and strong arm. His batting is gradually improving.",
      },
    ],
    "3": [
      {
        name: "高橋 勇太",
        nameEn: "Yuta Takahashi",
        role: "player",
        image: "/images/WechatIMG20.jpg",
        position: "内野手 / Infielder",
        number: "99",
        bio: "今年入部したばかりですが、基礎技術の習得が早く、将来性を感じさせる選手です。特に守備での動きが素晴らしく、コーチからも注目されています。",
        bioEn:
          "Although he just joined this year, he is quick to learn basic techniques and shows great potential.",
      },
    ],
    "2": [
      {
        name: "渡辺 光",
        nameEn: "Hikaru Watanabe",
        role: "player",
        image: "/images/WechatIMG19.jpg",
        position: "野手 / Fielder",
        number: "10",
        bio: "チームで最年少クラスながら、野球への情熱が人一倍あります。基礎から丁寧に練習しており、技術面での成長が楽しみな選手です。",
        bioEn:
          "Despite being one of the youngest in the team, he has great passion for baseball. Practicing basics diligently.",
      },
    ],
    "1": [
      {
        name: "小林 拓人",
        nameEn: "Takuto Kobayashi",
        role: "player",
        image: "/images/WechatIMG18.jpg",
        position: "野手 / Fielder",
        number: "15",
        bio: "最年少の一年生。野球が大好きで練習にも積極的に参加しています。これから基礎をしっかり身につけ、チームの将来を担う選手として期待されています。",
        bioEn:
          "The youngest first grader. Loves baseball and actively participates in practice. Expected to develop strong fundamentals and become a key player for the team's future.",
      },
      {
        name: "山田 太一",
        nameEn: "Taichi Yamada",
        role: "player",
        image: "/images/WechatIMG17.jpg",
        position: "野手 / Fielder",
        number: "16",
        bio: "野球初心者ながら、運動神経が良く成長が早い一年生。毎回の練習を楽しみながら、基本技術を着実に身につけています。",
        bioEn:
          "A first grader new to baseball but with good athletic ability and quick learning. Enjoys every practice while steadily mastering basic skills.",
      },
    ],
  };

  const grades = Object.keys(playersByGrade).sort(
    (a, b) => Number(b) - Number(a)
  );

  const roleIcons: Record<string, React.ReactNode> = {
    "team-captain": <Trophy className="h-5 w-5 text-yellow-500" />,
    player: <Star className="h-5 w-5 text-sky" />,
  };

  if (!mounted) {
    return (
      <div className="container py-12 flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-2xl text-sakura font-bold">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 section-title">{t("players")}</h1>

      <Tabs defaultValue={grades[0]} className="w-full">
        <TabsList className="flex justify-center mb-8 w-full max-w-md mx-auto">
          {grades.map((grade) => (
            <TabsTrigger
              key={grade}
              value={grade}
              className="flex-1 data-[state=active]:bg-sakura data-[state=active]:text-white"
            >
              {t(`grades.${grade}`)}
            </TabsTrigger>
          ))}
        </TabsList>

        {grades.map((grade) => (
          <TabsContent key={grade} value={grade} className="space-y-8">
            {playersByGrade[grade].map((player, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md card-hover"
              >
                <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {roleIcons[player.role] || (
                      <Star className="h-5 w-5 text-sky" />
                    )}
                    <h3 className="text-xl font-bold">
                      {player.name}
                      <span className="text-sm font-normal text-muted-foreground ml-2">
                        {player.nameEn}
                      </span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-sakura font-semibold">
                      {t(`roles.${player.role}`)}
                    </span>
                    <span className="text-sm bg-sakura text-white px-2 py-0.5 rounded-full">
                      #{player.number}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {player.position}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{player.bio}</p>
                  <p className="text-xs text-muted-foreground">
                    {player.bioEn}
                  </p>
                </div>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
