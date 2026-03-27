"use client";

import { FormEvent, useState } from "react";
import { BookCallPageContent } from "@/components/marketing/pages";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  date: "",
  time: "",
  message: "",
};

export default function BookCallPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData(initialFormState);
    }, 3000);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <BookCallPageContent
      submitted={submitted}
      formData={formData}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
