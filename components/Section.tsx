import type { ReactNode } from "react";
import styles from "./Section.module.css";

const PADDING_CLASS = {
  default: styles.paddingDefault,
  hero: styles.paddingHero,
  closing: styles.paddingClosing,
} as const;

type SectionProps = {
  id: string;
  label: string;
  background: string;
  color: string;
  padding?: keyof typeof PADDING_CLASS;
  children: ReactNode;
};

export default function Section({
  id,
  label,
  background,
  color,
  padding = "default",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      data-screen-label={label}
      className={PADDING_CLASS[padding]}
      style={{ background, color }}
    >
      <div className="container">{children}</div>
    </section>
  );
}
