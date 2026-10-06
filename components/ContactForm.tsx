"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/content";
import { btnPrimary } from "./styles";

const fields = [
  { name: "name", label: "姓名", type: "text" },
  { name: "email", label: "Email", type: "email" },
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\n— ${form.get("name")} (${form.get("email")})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border bg-card p-6">
      {fields.map((f) => (
        <label key={f.name} className="block text-sm">
          <span className="text-muted-foreground">{f.label}</span>
          <input
            name={f.name}
            type={f.type}
            required
            maxLength={200}
            className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none transition-colors focus:border-primary"
          />
        </label>
      ))}
      <label className="block text-sm">
        <span className="text-muted-foreground">訊息</span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={2000}
          className="mt-1 w-full resize-none rounded-md border bg-background px-3 py-2 outline-none transition-colors focus:border-primary"
        />
      </label>
      <button type="submit" className={btnPrimary}>
        <Send className="size-4" />
        送出
      </button>
      {sent && (
        <p className="text-sm text-primary" role="status">
          已開啟你的郵件程式，謝謝！
        </p>
      )}
    </form>
  );
}
