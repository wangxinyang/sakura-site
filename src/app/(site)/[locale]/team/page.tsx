"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Award, Medal, Trophy } from "lucide-react";

const teamMembers = [
  {
    name: "佐藤 雄一",
    nameEn: "Yuichi Sato",
    role: "head-coach",
    image: "/images/WechatIMG41.jpg",
    bio: "Former professional baseball player with 15 years of coaching experience. Specializes in developing young players' fundamental skills and teamwork.",
  },
  {
    name: "田中 誠",
    nameEn: "Makoto Tanaka",
    role: "assistant-coach",
    image: "/images/WechatIMG42.jpg",
    bio: "Youth baseball coach for 8 years. Focuses on pitching techniques and mental training for young athletes.",
  },
  {
    name: "山本 健太",
    nameEn: "Kenta Yamamoto",
    role: "team-captain",
    image: "/images/WechatIMG25.jpg",
    bio: "6th grade. Team captain with excellent leadership skills. Plays shortstop and is the team's lead-off hitter.",
    grade: 6,
  },
  {
    name: "中村 大輔",
    nameEn: "Daisuke Nakamura",
    role: "player",
    image: "/images/WechatIMG30.jpg",
    bio: "5th grade. Main pitcher with a powerful fastball. Also plays first base when not pitching.",
    grade: 5,
  },
  {
    name: "鈴木 太郎",
    nameEn: "Taro Suzuki",
    role: "player",
    image: "/images/WechatIMG21.jpg",
    bio: "4th grade. Catcher with great game-calling abilities. Known for his strong arm and quick release.",
    grade: 4,
  },
];

export default function TeamPage() {
  const t = useTranslations("team");

  // 角色图标
  const roleIcons = {
    "head-coach": <Trophy className="h-5 w-5 text-yellow-500" />,
    "assistant-coach": <Medal className="h-5 w-5 text-sky" />,
    "team-captain": <Award className="h-5 w-5 text-sakura" />,
    player: <Award className="h-5 w-5 text-sakura-light" />,
  };

  // 按角色分类
  const coaches = teamMembers.filter(
    (member) =>
      member.role === "head-coach" || member.role === "assistant-coach"
  );
  const players = teamMembers.filter(
    (member) => member.role === "team-captain" || member.role === "player"
  );

  return (
    <div className="container py-12">
      <h1 className="section-title mb-12">{t("title")}</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
        {t("description")}
      </p>

      {/* 教练区域 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">{t("coaches")}</h2>
        <div className="space-y-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md card-hover"
            >
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {roleIcons[coach.role as keyof typeof roleIcons]}
                  <h3 className="text-xl font-bold">
                    {coach.name}
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                      {coach.nameEn}
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-4 text-sm text-sakura font-semibold">
                  <span>{t(`roles.${coach.role}`)}</span>
                </div>
                <p className="text-muted-foreground">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 球员区域 */}
      <div>
        <h2 className="text-2xl font-bold mb-8">{t("players")}</h2>
        <div className="space-y-8">
          {players.map((player, index) => (
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
                  {roleIcons[player.role as keyof typeof roleIcons]}
                  <h3 className="text-xl font-bold">
                    {player.name}
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                      {player.nameEn}
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-4 text-sm text-sakura font-semibold">
                  <span>{t(`roles.${player.role}`)}</span>
                  {player.grade && (
                    <span className="ml-2 text-muted-foreground">
                      {t("grade", { grade: player.grade })}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">{player.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
