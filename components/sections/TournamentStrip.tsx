import { links } from "@/lib/links";
import type { Messages } from "@/lib/messages";
import styles from "./TournamentStrip.module.css";

type TournamentStripProps = {
  t: Messages["tournament"];
  date: string;
};

export default function TournamentStrip({ t, date }: TournamentStripProps) {
  if (!date) return null;

  return (
    <div data-screen-label="Franja torneo" className={styles.strip}>
      <div className={`container ${styles.bar}`}>
        <p className={styles.lead}>
          {t.stripLead} {date}.
        </p>
        <a href={links.discord} target="_blank" rel="noopener" className={styles.cta}>
          {t.stripCta}
        </a>
      </div>
    </div>
  );
}
