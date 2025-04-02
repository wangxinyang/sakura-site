"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function JoinPage() {
  const t = useTranslations("join");
  const [mounted, setMounted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    grade: "",
    parent: "",
    email: "",
    phone: "",
    team: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log("Form submitted:", formState);
    setFormSubmitted(true);
    // Reset form
    setFormState({
      name: "",
      age: "",
      grade: "",
      parent: "",
      email: "",
      phone: "",
      team: "",
      message: "",
    });
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
      </div>

      <div className="bg-slate-50 dark:bg-secondary rounded-lg p-8 mb-12">
        {formSubmitted ? (
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
              {t("contact.success.title")}
            </h3>
            <p className="text-green-600 dark:text-green-300">
              {t("contact.success.message")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium dark:text-foreground"
                >
                  {t("form.childName")}
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

              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 font-medium dark:text-foreground"
                >
                  {t("form.age")}
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formState.age}
                  onChange={handleChange}
                  required
                  min="6"
                  max="12"
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="grade"
                  className="block mb-2 font-medium dark:text-foreground"
                >
                  {t("form.grade")}
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={formState.grade}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-foreground"
                >
                  <option value="" className="dark:bg-gray-800">
                    {t("form.selectGrade")}
                  </option>
                  <option value="1" className="dark:bg-gray-800">
                    1年生
                  </option>
                  <option value="2" className="dark:bg-gray-800">
                    2年生
                  </option>
                  <option value="3" className="dark:bg-gray-800">
                    3年生
                  </option>
                  <option value="4" className="dark:bg-gray-800">
                    4年生
                  </option>
                  <option value="5" className="dark:bg-gray-800">
                    5年生
                  </option>
                  <option value="6" className="dark:bg-gray-800">
                    6年生
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="parent"
                  className="block mb-2 font-medium dark:text-foreground"
                >
                  {t("form.parentName")}
                </label>
                <input
                  type="text"
                  id="parent"
                  name="parent"
                  value={formState.parent}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium dark:text-foreground"
                >
                  {t("form.email")}
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

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-medium dark:text-foreground"
                >
                  {t("form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-foreground"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="team"
                  className="block mb-2 font-medium dark:text-foreground"
                >
                  {t("form.teamPreference")}
                </label>
                <select
                  id="team"
                  name="team"
                  value={formState.team}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-foreground"
                >
                  <option value="" className="dark:bg-gray-800">
                    {t("form.selectTeam")}
                  </option>
                  <option value="teamA" className="dark:bg-gray-800">
                    チームA (5-6年生)
                  </option>
                  <option value="teamB" className="dark:bg-gray-800">
                    チームB (3-4年生)
                  </option>
                  <option value="teamC" className="dark:bg-gray-800">
                    チームC (1-2年生)
                  </option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium dark:text-foreground"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-foreground"
                ></textarea>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button type="submit" className="px-8 py-2">
                {t("form.submit")}
              </Button>
              <p className="text-sm text-muted-foreground mt-2 dark:text-foreground/70">
                {t("form.privacy")}
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
