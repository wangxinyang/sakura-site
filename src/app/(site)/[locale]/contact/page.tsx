"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedText from "@/components/animated-text";

export default function ContactPage() {
  const t = useTranslations("join"); // 重用join命名空间中的翻译
  const commonT = useTranslations("common");
  const footerT = useTranslations("footer");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 在实际项目中，这里应该调用API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8 title-animated dark:text-foreground">
        <AnimatedText text={commonT("contact")} animation="fadeIn" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary dark:text-primary" />
              <div>
                <h3 className="font-semibold text-lg mb-1 dark:text-foreground">
                  <AnimatedText
                    text={footerT("address")}
                    animation="slideUp"
                    delay={0.1}
                  />
                </h3>
                <p className="text-muted-foreground dark:text-foreground/70">
                  <AnimatedText
                    text="東京都江東区大島9-5-3付近"
                    animation="slideUp"
                    delay={0.2}
                  />
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary dark:text-primary" />
              <div>
                <h3 className="font-semibold text-lg mb-1 dark:text-foreground">
                  <AnimatedText text="Email" animation="slideUp" delay={0.3} />
                </h3>
                <p className="text-muted-foreground dark:text-foreground/70">
                  <AnimatedText
                    text="info@sakurabaseball.jp"
                    animation="slideUp"
                    delay={0.4}
                  />
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary dark:text-primary" />
              <div>
                <h3 className="font-semibold text-lg mb-1 dark:text-foreground">
                  <AnimatedText
                    text={footerT("practice")}
                    animation="slideUp"
                    delay={0.5}
                  />
                </h3>
                <p className="text-muted-foreground dark:text-foreground/70">
                  <AnimatedText
                    text={footerT("practice")}
                    animation="slideUp"
                    delay={0.6}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 title-animated dark:text-foreground">
              <AnimatedText text="地図" animation="fadeIn" delay={0.7} />
            </h2>
            <div
              className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn"
              style={{ animationDelay: "0.8s" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.390283565622!2d139.84178237631152!3d35.69340467259637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzM2LjMiTiAxMzjCsDUwJzQyLjkiRQ!5e0!3m2!1sja!2sjp!4v1712196128852!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="練習場所の地図 - 江東区大島9丁目付近"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6 title-animated dark:text-foreground">
            <AnimatedText
              text={commonT("contact")}
              animation="fadeIn"
              delay={0.9}
            />
          </h2>
          {submitStatus === "success" ? (
            <div
              className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6 animate-fadeIn dark:bg-green-900/20 dark:border-green-800 dark:text-green-300"
              style={{ animationDelay: "0.2s" }}
            >
              {t("form.success")}
            </div>
          ) : submitStatus === "error" ? (
            <div
              className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6 animate-fadeIn dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
              style={{ animationDelay: "0.2s" }}
            >
              {t("form.error")}
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-slideUp" style={{ animationDelay: "1s" }}>
              <label
                htmlFor="name"
                className="block mb-2 font-medium dark:text-foreground"
              >
                {t("form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-foreground"
              />
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "1.1s" }}>
              <label
                htmlFor="email"
                className="block mb-2 font-medium dark:text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-foreground"
              />
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "1.2s" }}>
              <label
                htmlFor="message"
                className="block mb-2 font-medium dark:text-foreground"
              >
                {t("form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-foreground"
              ></textarea>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="animate-fadeIn bg-sakura hover:bg-sakura-dark text-sakura-foreground dark:text-sakura-foreground"
              style={{ animationDelay: "1.3s" }}
            >
              {isSubmitting ? "..." : t("form.submit")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
