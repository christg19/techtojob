import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { links } from "@/lib/links";
import type { Messages } from "@/lib/messages";
import styles from "./News.module.css";

type NewsProps = {
  t: Messages["news"];
};

export default function News({ t }: NewsProps) {
  return (
    <Section id="news" label="Noticias" background="var(--charcoal)" color="var(--white)">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="charcoal" />

      <div className={styles.list}>
        {t.items.map((item) => (
          <a
            key={item.title}
            href={links.discord}
            target="_blank"
            rel="noopener"
            className={styles.item}
          >
            <div className={styles.meta}>
              <span className={styles.badge}>{item.category}</span>
              <span className={styles.date}>{item.date}</span>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.summary}>{item.summary}</p>
          </a>
        ))}
      </div>

      <a href={links.discord} target="_blank" rel="noopener" className={styles.all}>
        {t.all}
      </a>
    </Section>
  );
}
