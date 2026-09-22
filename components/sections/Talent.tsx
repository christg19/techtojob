import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import SectionCta from "@/components/SectionCta";
import { links } from "@/lib/links";
import type { Messages } from "@/lib/messages";
import styles from "./Talent.module.css";

type TalentProps = {
  t: Messages["talent"];
};

export default function Talent({ t }: TalentProps) {
  return (
    <Section id="talent" label="Talento" background="var(--white)" color="var(--charcoal)">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="white" />

      <div className={`${styles.promiseGrid} gridPromise`}>
        {t.cards.map((card) => (
          <div key={card.title} className={styles.promiseCard}>
            <h3 className={styles.promiseTitle}>{card.title}</h3>
            <p className={styles.promiseText}>{card.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.projectsBlock}>
        <div className={styles.projectsHead}>
          <h3 className={styles.projectsTitle}>{t.projects.title}</h3>
          <p className={styles.projectsLead}>{t.projects.lead}</p>
        </div>
        <div className={`${styles.projectsGrid} gridThree`}>
          {t.projects.items.map((item) => (
            <a
              key={item.title}
              href={links.discord}
              target="_blank"
              rel="noopener"
              className={styles.projectCard}
            >
              <h4 className={styles.projectTitle}>{item.title}</h4>
              <p className={styles.projectText}>{item.built}</p>
              <div className={styles.stackLine}>
                <span aria-hidden="true" className={styles.stackCursor} />
                <span className={styles.stackLabel}>{t.projects.stackLabel}</span>
                <span className={styles.stackValue}>{item.stack}</span>
              </div>
              <div className={styles.projectFooter}>
                <strong className={styles.projectHandle}>{item.handle}</strong>
                <span className={styles.projectChannel}>{item.channel}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.answersBlock}>
        <h3 className={styles.answersTitle}>{t.answers.title}</h3>
        <div className={`${styles.answersGrid} gridQA`}>
          {t.answers.items.map((item) => (
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
        shadow="var(--teal)"
        noteColor="var(--gray-on-white)"
      />
    </Section>
  );
}
