"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

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
      <h1 className="text-4xl font-bold mb-8">{commonT("contact")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {footerT("address")}
                </h3>
                <p className="text-muted-foreground">
                  123 桜通り、江東区、東京都
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">info@sakurabaseball.jp</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {footerT("practice")}
                </h3>
                <p className="text-muted-foreground">{footerT("practice")}</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">地図</h2>
            <div className="relative h-[300px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <p>Map Placeholder</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">{commonT("contact")}</h2>
          {submitStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
              {t("form.success")}
            </div>
          ) : submitStatus === "error" ? (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
              {t("form.error")}
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                {t("form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                {t("form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "..." : t("form.submit")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
