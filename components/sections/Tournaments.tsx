import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import SectionCta from "@/components/SectionCta";
import { links } from "@/lib/links";
import type { Messages } from "@/lib/messages";
import styles from "./Tournaments.module.css";

type TournamentsProps = {
  t: Messages["tournaments"];
};

export default function Tournaments({ t }: TournamentsProps) {
  return (
    <Section id="tournaments" label="Torneos" background="var(--teal)" color="var(--charcoal)">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="teal" />

      <div className={`${styles.cardsGrid} gridPromise`}>
        {t.cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.payoff}>
        <h3 className={styles.payoffTitle}>{t.payoff.title}</h3>
        <p className={styles.payoffText}>{t.payoff.text}</p>
        <div className={`${styles.answersGrid} gridQA`}>
          {t.answers.map((item) => (
            <div key={item.q}>
              <h4 className={styles.answerQ}>{item.q}</h4>
              <p className={styles.answerA}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionCta
        href={links.discord}
        label={t.cta}
        note={t.ctaNote}
        background="var(--charcoal)"
        color="var(--white)"
        shadow="var(--white)"
        noteColor="var(--charcoal)"
      />
    </Section>
  );
}
