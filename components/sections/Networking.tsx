import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import SectionCta from "@/components/SectionCta";
import { links } from "@/lib/links";
import type { Messages } from "@/lib/messages";
import styles from "./Networking.module.css";

type NetworkingProps = {
  t: Messages["networking"];
};

function chipStyle(channel: string) {
  if (channel === "#primer-empleo") return styles.chipTeal;
  if (channel === "#empresas") return styles.chipCharcoal;
  return styles.chip;
}

export default function Networking({ t }: NetworkingProps) {
  return (
    <Section id="networking" label="Networking" background="var(--white)" color="var(--charcoal)">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="white" />

      <ul aria-label={t.channelsLabel} className={styles.list}>
        {t.channels.map((channel) => (
          <li key={channel} className={chipStyle(channel)}>
            {channel}
          </li>
        ))}
      </ul>

      <div className={`${styles.pointsGrid} gridTwo`}>
        {t.points.map((point) => (
          <div key={point.title} className={styles.point}>
            <h3 className={styles.pointTitle}>{point.title}</h3>
            <p className={styles.pointText}>{point.text}</p>
          </div>
        ))}
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
