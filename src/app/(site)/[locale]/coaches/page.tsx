"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";

// Team A - grades 5-6
const teamACoaches = [
  {
    name: "山田 哲郎",
    nameEn: "Tetsuro Yamada",
    role: "head-coach",
    image: "/images/WechatIMG15.jpg",
    bio: "元プロ野球選手。15年間の指導経験を持ち、戦略的な思考と基礎技術の両立を重視しています。",
    bioEn:
      "Former professional baseball player with 15 years of coaching experience. Emphasizes both strategic thinking and fundamental techniques.",
  },
  {
    name: "中村 大輔",
    nameEn: "Daisuke Nakamura",
    role: "assistant-coach",
    image: "/images/WechatIMG10.jpg",
    bio: "大学野球で活躍した元キャプテン。打撃技術の専門家として、選手一人ひとりの特性に合わせた指導を行っています。",
    bioEn:
      "Former university baseball team captain. As a batting technique specialist, provides individualized instruction based on each player's characteristics.",
  },
];

// Team B - grades 3-4
const teamBCoaches = [
  {
    name: "高橋 直子",
    nameEn: "Naoko Takahashi",
    role: "head-coach",
    image: "/images/WechatIMG16.jpg",
    bio: "体育教育の専門家。子供たちの身体能力開発と技術向上を両立させる独自の指導法で定評があります。",
    bioEn:
      "Physical education specialist. Known for her unique teaching method that balances physical development and technical improvement for children.",
  },
  {
    name: "小林 健太",
    nameEn: "Kenta Kobayashi",
    role: "assistant-coach",
    image: "/images/WechatIMG9.jpg",
    bio: "元高校野球コーチ。守備と走塁の専門家として、基本動作の習得から応用技術まで段階的に指導しています。",
    bioEn:
      "Former high school baseball coach. As a specialist in fielding and base running, teaches from basic movements to advanced techniques in a step-by-step manner.",
  },
];

// Team C - grades 1-2
const teamCCoaches = [
  {
    name: "佐々木 美香",
    nameEn: "Mika Sasaki",
    role: "head-coach",
    image: "/images/WechatIMG14.jpg",
    bio: "幼児教育の専門家。遊びを通じて野球の基本を学ぶ「楽しさ重視」のプログラムを開発しました。",
    bioEn:
      "Early childhood education expert. Developed a 'fun-focused' program where children learn baseball basics through play.",
  },
  {
    name: "吉田 拓也",
    nameEn: "Takuya Yoshida",
    role: "assistant-coach",
    image: "/images/WechatIMG8.jpg",
    bio: "体育学を専攻し、子供の運動発達に詳しい。野球を通じた総合的な運動能力の向上を目指しています。",
    bioEn:
      "Specialized in physical education with expertise in children's motor development. Aims to improve overall athletic ability through baseball.",
  },
];

export default function TeamPage() {
  const t = useTranslations("team");
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageError = (coachName: string) => {
    setImgError((prev) => ({ ...prev, [coachName]: true }));
  };

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
          指導者紹介
        </h1>
        <p className="text-muted-foreground dark:text-foreground/70">
          サクラ野球クラブの指導スタッフをご紹介します。各チームの経験豊富なコーチ陣がお子様の成長をサポートします。
        </p>
      </div>

      <Tabs defaultValue="teamA" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="teamA" className="dark:text-foreground">
            {t("teams.A")}
          </TabsTrigger>
          <TabsTrigger value="teamB" className="dark:text-foreground">
            {t("teams.B")}
          </TabsTrigger>
          <TabsTrigger value="teamC" className="dark:text-foreground">
            {t("teams.C")}
          </TabsTrigger>
        </TabsList>

        {/* Team A Content */}
        <TabsContent value="teamA">
          <Card className="dark:bg-card dark:border-border">
            <CardHeader>
              <CardTitle className="dark:text-foreground">
                {t("teams.A")}
              </CardTitle>
              <CardDescription className="dark:text-foreground/70">
                {t("team_descriptions.A")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamACoaches.map((coach, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 bg-muted dark:bg-secondary flex items-center justify-center">
                      {imgError[coach.name] ? (
                        <User className="h-20 w-20 text-muted-foreground dark:text-foreground/50" />
                      ) : (
                        <Image
                          src={coach.image}
                          alt={coach.name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(coach.name)}
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold dark:text-foreground">
                      {coach.name}
                    </h3>
                    <p className="text-muted-foreground dark:text-foreground/70">
                      {coach.nameEn}
                    </p>
                    <p className="text-sakura dark:text-sakura-light">
                      {t(`roles.${coach.role}`)}
                    </p>
                    <p className="mt-2 dark:text-foreground/80">{coach.bio}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team B Content */}
        <TabsContent value="teamB">
          <Card className="dark:bg-card dark:border-border">
            <CardHeader>
              <CardTitle className="dark:text-foreground">
                {t("teams.B")}
              </CardTitle>
              <CardDescription className="dark:text-foreground/70">
                {t("team_descriptions.B")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamBCoaches.map((coach, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 bg-muted dark:bg-secondary flex items-center justify-center">
                      {imgError[coach.name] ? (
                        <User className="h-20 w-20 text-muted-foreground dark:text-foreground/50" />
                      ) : (
                        <Image
                          src={coach.image}
                          alt={coach.name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(coach.name)}
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold dark:text-foreground">
                      {coach.name}
                    </h3>
                    <p className="text-muted-foreground dark:text-foreground/70">
                      {coach.nameEn}
                    </p>
                    <p className="text-sakura dark:text-sakura-light">
                      {t(`roles.${coach.role}`)}
                    </p>
                    <p className="mt-2 dark:text-foreground/80">{coach.bio}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team C Content */}
        <TabsContent value="teamC">
          <Card className="dark:bg-card dark:border-border">
            <CardHeader>
              <CardTitle className="dark:text-foreground">
                {t("teams.C")}
              </CardTitle>
              <CardDescription className="dark:text-foreground/70">
                {t("team_descriptions.C")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamCCoaches.map((coach, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 bg-muted dark:bg-secondary flex items-center justify-center">
                      {imgError[coach.name] ? (
                        <User className="h-20 w-20 text-muted-foreground dark:text-foreground/50" />
                      ) : (
                        <Image
                          src={coach.image}
                          alt={coach.name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(coach.name)}
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold dark:text-foreground">
                      {coach.name}
                    </h3>
                    <p className="text-muted-foreground dark:text-foreground/70">
                      {coach.nameEn}
                    </p>
                    <p className="text-sakura dark:text-sakura-light">
                      {t(`roles.${coach.role}`)}
                    </p>
                    <p className="mt-2 dark:text-foreground/80">{coach.bio}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
