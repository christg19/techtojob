import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  tone: "white" | "charcoal" | "teal";
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  tone,
}: SectionHeadingProps) {
  return (
    <div className={styles[tone]}>
      <div className={styles.rule}>
        <span className={styles.eyebrow}>{eyebrow}</span>
      </div>
      <div className={styles.row}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.lead}>{lead}</p>
      </div>
    </div>
  );
}
