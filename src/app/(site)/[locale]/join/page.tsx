"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function JoinPage() {
  const t = useTranslations("join");
  const [formState, setFormState] = useState({
    name: "",
    grade: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        grade: "",
        contact: "",
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
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">{t("requirements")}</p>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
            <p>Join Us Image</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t("form.title")}</h2>
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
              <label htmlFor="grade" className="block mb-2 font-medium">
                {t("form.grade")}
              </label>
              <select
                id="grade"
                name="grade"
                value={formState.grade}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              >
                <option value="">--</option>
                {[1, 2, 3, 4, 5, 6].map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact" className="block mb-2 font-medium">
                {t("form.contact")}
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formState.contact}
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
                rows={4}
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
