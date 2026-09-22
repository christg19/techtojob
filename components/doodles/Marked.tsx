import type { ReactNode } from "react";
import UnderlineDoodle from "./UnderlineDoodle";
import styles from "./Marked.module.css";

type MarkedProps = {
  children: ReactNode;
  color?: string;
  newsletter?: boolean;
};

export default function Marked({ children, color, newsletter }: MarkedProps) {
  return (
    <span className={`${styles.mark} ${newsletter ? styles.tight : ""}`}>
      {children}
      <UnderlineDoodle
        variant={newsletter ? "newsletter" : "wide"}
        color={color}
        className={`${styles.underline} ${newsletter ? styles.newsletter : ""}`}
      />
    </span>
  );
}
