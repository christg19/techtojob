import type { CSSProperties } from "react";
import styles from "./SectionCta.module.css";

type CtaVars = CSSProperties & Record<`--cta-${string}`, string>;

type SectionCtaProps = {
  href: string;
  label: string;
  note: string;
  background: string;
  color: string;
  shadow: string;
  noteColor: string;
};

export default function SectionCta({
  href,
  label,
  note,
  background,
  color,
  shadow,
  noteColor,
}: SectionCtaProps) {
  const vars: CtaVars = {
    "--cta-bg": background,
    "--cta-color": color,
    "--cta-shadow": shadow,
    "--cta-note": noteColor,
  };

  return (
    <div className={styles.row} style={vars}>
      <a href={href} target="_blank" rel="noopener" className={styles.cta}>
        {label}
      </a>
      <span className={styles.note}>{note}</span>
    </div>
  );
}
