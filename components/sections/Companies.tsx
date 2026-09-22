import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import SectionCta from "@/components/SectionCta";
import { links } from "@/lib/links";
import type { Messages } from "@/lib/messages";
import styles from "./Companies.module.css";

type CompaniesProps = {
  t: Messages["companies"];
};

export default function Companies({ t }: CompaniesProps) {
  const { contact } = t;

  return (
    <Section id="companies" label="Empresas" background="var(--charcoal)" color="var(--white)">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="charcoal" />

      <div className={`${styles.cardsGrid} gridThree`}>
        {t.cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.contact}>
        <div className={styles.posted}>
          <span className={styles.postedLabel}>{contact.postedLabel}</span>
          <h3 className={styles.postedTitle}>{contact.title}</h3>
          <div className={styles.postedFooter}>
            <strong className={styles.postedHandle}>{contact.handle}</strong>
            <span className={styles.postedChannel}>{contact.channel}</span>
          </div>
        </div>
        <div className={styles.replied}>
          <span className={styles.repliedLabel}>{contact.repliedLabel}</span>
          <blockquote className={styles.repliedQuote}>{contact.replied}</blockquote>
          <div className={styles.repliedFooter}>
            <strong className={styles.repliedCompany}>{contact.company}</strong>
            <span className={styles.repliedDelay}>{contact.delay}</span>
          </div>
        </div>
      </div>

      <SectionCta
        href={links.discord}
        label={t.cta}
        note={t.ctaNote}
        background="var(--teal)"
        color="var(--charcoal)"
        shadow="var(--white)"
        noteColor="var(--gray-on-dark)"
      />
    </Section>
  );
}
