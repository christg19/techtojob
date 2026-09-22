import Section from "@/components/Section";
import { links } from "@/lib/links";
import type { Messages } from "@/lib/messages";
import styles from "./Closing.module.css";

type ClosingProps = {
  t: Messages["closing"];
};

export default function Closing({ t }: ClosingProps) {
  return (
    <Section id="join" label="Cierre" background="var(--charcoal)" color="var(--white)" padding="closing">
      <div className={styles.rule}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
      </div>
      <h2 className={styles.title}>{t.title}</h2>
      <p className={styles.notFor}>{t.notFor}</p>
      <p className={styles.lead}>{t.lead}</p>
      <div className={styles.ctaBlock}>
        <a href={links.discord} target="_blank" rel="noopener" className={styles.cta}>
          {t.cta}
        </a>
      </div>
    </Section>
  );
}
