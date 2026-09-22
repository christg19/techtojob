"use client";

import { useState } from "react";
import type { Messages } from "@/lib/messages";
import styles from "./NewsletterForm.module.css";

type NewsletterFormProps = {
  t: Messages["newsletter"];
};

export default function NewsletterForm({ t }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <div role="status" aria-live="polite" className={styles.success}>
        <div>
          <strong className={styles.successTitle}>{t.successTitle}</strong>
          <span className={styles.successNote}>{t.successNote}</span>
        </div>
        <button type="button" onClick={() => setSubscribed(false)} className={styles.resetButton}>
          {t.reset}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (email.trim()) setSubscribed(true);
      }}
      className={styles.form}
    >
      <label className={styles.label}>
        <span className={styles.labelText}>{t.label}</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t.placeholder}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.submit}>
        {t.cta}
      </button>
    </form>
  );
}
