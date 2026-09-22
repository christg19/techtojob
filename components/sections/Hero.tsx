import Section from "@/components/Section";
import ArrowDoodle from "@/components/doodles/ArrowDoodle";
import Marked from "@/components/doodles/Marked";
import { links } from "@/lib/links";
import type { Messages } from "@/lib/messages";
import styles from "./Hero.module.css";

type HeroProps = {
  t: Messages["hero"];
};

export default function Hero({ t }: HeroProps) {
  return (
    <Section id="top" label="Hero" background="var(--charcoal)" color="var(--white)" padding="hero">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{t.eyebrow}</span>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>{t.titleA}</span>
            <span>{t.titleB}</span> <Marked>{t.titleBMark}</Marked>
          </h1>
          <p className={styles.lead}>{t.lead}</p>
          <div className={styles.ctaBlock}>
            <a href={links.discord} target="_blank" rel="noopener" className={styles.cta}>
              {t.cta}
            </a>
            <span className={styles.ctaNote}>{t.ctaNote}</span>
          </div>
        </div>

        <div className={styles.loopWrap}>
          <div className={styles.loopCard}>
            <span className={styles.loopLabel}>{t.loop.label}</span>
            <div className={styles.loopBeats}>
              <p className={styles.beat}>{t.loop.beats[0]}</p>
              <ArrowDoodle variant="beat" className={styles.beatArrow} />
              <p className={styles.beat}>{t.loop.beats[1]}</p>
              <ArrowDoodle variant="beat" className={styles.beatArrow} />
              <p className={styles.beat}>
                {t.loop.beats[2]} <Marked>{t.loop.beatsMark}</Marked>
              </p>
            </div>
            <p className={styles.loopNote}>{t.loop.note}</p>
          </div>
        </div>
      </div>

      <div className={styles.painGrid}>
        <a href="#talent" className={styles.painCard}>
          <span className={styles.painLabel}>{t.devsLabel}</span>
          <p className={styles.painText}>{t.devs}</p>
          <span className={styles.painLink}>{t.devsLink}</span>
        </a>
        <a href="#companies" className={styles.painCard}>
          <span className={styles.painLabel}>{t.companiesLabel}</span>
          <p className={styles.painText}>{t.companies}</p>
          <span className={styles.painLink}>{t.companiesLink}</span>
        </a>
      </div>
    </Section>
  );
}
