import { Fragment } from "react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ArrowDoodle from "@/components/doodles/ArrowDoodle";
import Marked from "@/components/doodles/Marked";
import type { Messages } from "@/lib/messages";
import styles from "./HowItWorks.module.css";

type HowItWorksProps = {
  t: Messages["how"];
};

export default function HowItWorks({ t }: HowItWorksProps) {
  const lastIndex = t.steps.length - 1;

  return (
    <Section id="how" label="Cómo funciona" background="var(--teal)" color="var(--charcoal)">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="teal" />

      <div className={styles.steps}>
        {t.steps.map((step, index) => (
          <Fragment key={step.title}>
            <div className={styles.step}>
              <span className={index === lastIndex ? styles.numberFinal : styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>
                  {index === lastIndex ? (
                    <Marked color="var(--charcoal)">{step.title}</Marked>
                  ) : (
                    step.title
                  )}
                </h3>
                <p className={styles.stepText}>{step.text}</p>
                {"link" in step && step.link && (
                  <a href="#companies" className={styles.stepLink}>
                    {step.link}
                  </a>
                )}
              </div>
            </div>
            {index < lastIndex && (
              <ArrowDoodle
                variant="step"
                index={index}
                color="var(--charcoal)"
                className={styles.stepArrow}
              />
            )}
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
