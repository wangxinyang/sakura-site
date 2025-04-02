"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";

// Sample gallery data
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/gallery1.jpg",
    alt: "Team practice session",
    caption: "週末の練習風景",
    captionEn: "Weekend practice session",
  },
  {
    id: 2,
    src: "/images/gallery/gallery2.jpg",
    alt: "Tournament game",
    caption: "地域大会での試合",
    captionEn: "Local tournament game",
  },
  {
    id: 3,
    src: "/images/gallery/gallery3.jpg",
    alt: "Team celebration",
    caption: "大会優勝後のチーム写真",
    captionEn: "Team photo after winning the tournament",
  },
  {
    id: 4,
    src: "/images/gallery/gallery4.jpg",
    alt: "Batting practice",
    caption: "バッティング練習",
    captionEn: "Batting practice",
  },
  {
    id: 5,
    src: "/images/gallery/gallery5.jpg",
    alt: "Team building activity",
    caption: "チームビルディング活動",
    captionEn: "Team building activity",
  },
  {
    id: 6,
    src: "/images/gallery/gallery6.jpg",
    alt: "Pitching practice",
    caption: "ピッチング練習",
    captionEn: "Pitching practice",
  },
  {
    id: 7,
    src: "/images/gallery/gallery7.jpg",
    alt: "Coach giving instructions",
    caption: "コーチの指導風景",
    captionEn: "Coach giving instructions",
  },
  {
    id: 8,
    src: "/images/gallery/gallery8.jpg",
    alt: "Field maintenance day",
    caption: "フィールド整備の日",
    captionEn: "Field maintenance day",
  },
];

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.classList.remove("overflow-hidden");
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(galleryImages[newIndex].id);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;

    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      navigateImage("prev");
    } else if (e.key === "ArrowRight") {
      navigateImage("next");
    }
  };

  const handleImageLoad = (id: number) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="aspect-square relative group cursor-pointer overflow-hidden bg-muted dark:bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => openModal(image.id)}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                loaded[image.id] ? "opacity-0" : "opacity-100"
              } dark:text-foreground`}
            >
              Loading...
            </div>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-all duration-300 group-hover:scale-105 ${
                loaded[image.id] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(image.id)}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-sm font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-screen p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative flex-grow flex items-center justify-center overflow-hidden">
              {selectedImage && (
                <div className="relative w-full h-[70vh] max-h-[70vh]">
                  <Image
                    src={
                      galleryImages.find((img) => img.id === selectedImage)
                        ?.src || ""
                    }
                    alt={
                      galleryImages.find((img) => img.id === selectedImage)
                        ?.alt || ""
                    }
                    fill
                    className="object-contain"
                    sizes="(max-width: 1280px) 100vw, 75vw"
                  />
                </div>
              )}
            </div>

            <div className="mt-4 text-white text-center">
              <p className="text-lg font-medium dark:text-foreground/90">
                {galleryImages.find((img) => img.id === selectedImage)?.caption}
              </p>
              <p className="text-sm text-white/70 dark:text-foreground/70">
                {
                  galleryImages.find((img) => img.id === selectedImage)
                    ?.captionEn
                }
              </p>
            </div>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
