"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

// Facility data
const facilities = [
  {
    id: "main-field",
    name: "メインフィールド",
    nameEn: "Main Field",
    address: "東京都港区芝公園4-2-8",
    addressEn: "4-2-8 Shibakoen, Minato-ku, Tokyo",
    description:
      "広々とした天然芝のフィールドです。公式戦やトーナメントもここで開催されます。",
    descriptionEn:
      "A spacious natural grass field. Official games and tournaments are held here.",
    features: [
      "天然芝グラウンド",
      "ダッグアウト完備",
      "観客席（150席）",
      "ナイター設備",
    ],
    featuresEn: [
      "Natural grass field",
      "Equipped with dugouts",
      "Spectator seating (150 seats)",
      "Night lighting equipment",
    ],
    images: [
      {
        src: "/images/facilities/main-field-1.jpg",
        alt: "Main field view",
      },
      {
        src: "/images/facilities/main-field-2.jpg",
        alt: "Dugout area",
      },
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747975468334!2d139.74757867568058!3d35.65858067259336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbbb41922d3%3A0x3e91c0cb83b333e5!2z5Lic5a-_5Yy6!5e0!3m2!1sja!2sjp!4v1688866823272!5m2!1sja!2sjp",
  },
  {
    id: "practice-field",
    name: "練習フィールド",
    nameEn: "Practice Field",
    address: "東京都港区芝公園3-5-12",
    addressEn: "3-5-12 Shibakoen, Minato-ku, Tokyo",
    description:
      "日常の練習に使用する人工芝のフィールドです。屋内練習場も併設されています。",
    descriptionEn:
      "An artificial turf field used for daily practice. An indoor practice facility is also available.",
    features: [
      "人工芝グラウンド",
      "バッティングケージ（4台）",
      "屋内練習場",
      "ピッチングマシン（2台）",
    ],
    featuresEn: [
      "Artificial turf field",
      "Batting cages (4 units)",
      "Indoor practice facility",
      "Pitching machines (2 units)",
    ],
    images: [
      {
        src: "/images/facilities/practice-field-1.jpg",
        alt: "Practice field view",
      },
      {
        src: "/images/facilities/practice-field-2.jpg",
        alt: "Indoor practice area",
      },
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7633841816097!2d139.74493307568064!3d35.658732272593585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbbc07f6f2d%3A0xe3b9617c8189bb2!2z5Lic5a-_5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1688867079381!5m2!1sja!2sjp",
  },
  {
    id: "clubhouse",
    name: "クラブハウス",
    nameEn: "Clubhouse",
    address: "東京都港区芝公園4-3-10",
    addressEn: "4-3-10 Shibakoen, Minato-ku, Tokyo",
    description:
      "ミーティングルーム、トレーニングルーム、更衣室を備えたクラブハウスです。",
    descriptionEn:
      "A clubhouse equipped with meeting rooms, training room, and locker rooms.",
    features: [
      "ミーティングルーム（2室）",
      "トレーニングルーム",
      "更衣室・シャワー室",
      "休憩スペース",
      "事務局",
    ],
    featuresEn: [
      "Meeting rooms (2 rooms)",
      "Training room",
      "Locker rooms and showers",
      "Rest area",
      "Administrative office",
    ],
    images: [
      {
        src: "/images/facilities/clubhouse-1.jpg",
        alt: "Clubhouse exterior",
      },
      {
        src: "/images/facilities/clubhouse-2.jpg",
        alt: "Meeting room",
      },
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7428359483856!2d139.7489641756806!3d35.65872647259335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbc0eba1df7%3A0xb7e2e59b3bf0156a!2z5p2x5Lqs5aGU!5e0!3m2!1sja!2sjp!4v1688867117486!5m2!1sja!2sjp",
  },
];

export default function FacilitiesPage() {
  const t = useTranslations("facilities");
  const [activeTab, setActiveTab] = useState("main-field");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openImage = (src: string) => {
    setSelectedImage(src);
    document.body.classList.add("overflow-hidden");
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.classList.remove("overflow-hidden");
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
          {t("title")}
        </h1>
        <p className="text-muted-foreground dark:text-foreground/70">
          {t("description")}
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          {facilities.map((facility) => (
            <TabsTrigger
              key={facility.id}
              value={facility.id}
              className="dark:text-foreground"
            >
              {facility.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {facilities.map((facility) => (
          <TabsContent key={facility.id} value={facility.id}>
            <Card className="dark:bg-card dark:border-border">
              <CardHeader>
                <CardTitle className="dark:text-foreground">
                  {facility.name}
                </CardTitle>
                <CardDescription className="dark:text-foreground/70">
                  {facility.nameEn}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold flex items-center dark:text-foreground">
                          <MapPin className="w-5 h-5 mr-2 text-sakura dark:text-sakura-light" />
                          {t("address")}
                        </h3>
                        <p className="mt-1 dark:text-foreground/80">
                          {facility.address}
                        </p>
                        <p className="text-sm text-muted-foreground dark:text-foreground/70">
                          {facility.addressEn}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold dark:text-foreground">
                          {t("description")}
                        </h3>
                        <p className="mt-1 dark:text-foreground/80">
                          {facility.description}
                        </p>
                        <p className="text-sm text-muted-foreground dark:text-foreground/70">
                          {facility.descriptionEn}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold dark:text-foreground">
                          {t("features")}
                        </h3>
                        <ul className="mt-1 space-y-1 list-disc list-inside dark:text-foreground/80">
                          {facility.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {facility.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-muted dark:bg-secondary"
                          onClick={() => openImage(image.src)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4 dark:bg-border" />

                    <div>
                      <h3 className="text-lg font-semibold mb-2 dark:text-foreground">
                        {t("location")}
                      </h3>
                      <div className="aspect-video w-full overflow-hidden rounded-lg border dark:border-border">
                        <iframe
                          src={facility.map}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map of ${facility.nameEn}`}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 backdrop-blur-sm"
          onClick={closeImage}
        >
          <div
            className="max-w-4xl w-full rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={selectedImage}
                alt="Enlarged facility image"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
