import Section from "@/components/Section";
import Marked from "@/components/doodles/Marked";
import type { Messages } from "@/lib/messages";
import NewsletterForm from "./NewsletterForm";
import styles from "./Newsletter.module.css";

type NewsletterProps = {
  t: Messages["newsletter"];
};

export default function Newsletter({ t }: NewsletterProps) {
  return (
    <Section id="newsletter" label="Newsletter" background="var(--teal)" color="var(--charcoal)">
      <div className={styles.card}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h2 className={styles.title}>
          <span className={styles.titleLine}>{t.titleA}</span>
          <Marked newsletter>{t.titleMark}</Marked>
        </h2>
        <p className={styles.lead}>{t.lead}</p>

        <ul className={styles.bullets}>
          {t.items.map((item) => (
            <li key={item} className={styles.bulletItem}>
              <span aria-hidden="true" className={styles.bulletDot} />
              <span className={styles.bulletText}>{item}</span>
            </li>
          ))}
        </ul>

        <NewsletterForm t={t} />

        <p className={styles.note}>{t.note}</p>
      </div>
    </Section>
  );
}
