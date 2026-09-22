import Link from "next/link";
import type { Locale } from "@/i18n/routing";
import { links } from "@/lib/links";
import type { Messages } from "@/lib/messages";
import styles from "./Footer.module.css";

type FooterProps = {
  t: Messages["footer"];
  logoAlt: string;
  locale: Locale;
};

const GROUP_HREFS = [
  ["#talent", "#how", "#networking"],
  ["#companies", "#talent", "#news"],
  [links.discord, "#tournaments", "#news", "#newsletter"],
  ["#", "#", "#"],
];

const SOCIAL_HREFS = [links.discord, links.x, links.linkedin, links.instagram];

export default function Footer({ t, logoAlt, locale }: FooterProps) {
  return (
    <footer data-screen-label="Footer" className={styles.footer}>
      <div className="container">
        <nav aria-label={t.navLabel} className={styles.nav}>
          <div className={styles.brand}>
            <img
              src="/brand/logo-stacked-teal.svg"
              alt={logoAlt}
              width="614"
              height="340"
              className={styles.logo}
            />
            <p className={styles.tagline}>{t.tagline}</p>
          </div>

          {t.groups.map((group, groupIndex) => (
            <div key={group.title}>
              <span className={styles.groupTitle}>{group.title}</span>
              <ul className={styles.groupList}>
                {group.links.map((label, linkIndex) => {
                  const href = GROUP_HREFS[groupIndex][linkIndex];
                  const external = href.startsWith("http");
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener" : undefined}
                        className={styles.groupLink}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.bottomRow}>
          <div className={styles.socials}>
            {t.socials.map((label, index) => (
              <a
                key={label}
                href={SOCIAL_HREFS[index]}
                target="_blank"
                rel="noopener"
                className={index === 0 ? `${styles.social} ${styles.socialPrimary}` : styles.social}
              >
                {label}
              </a>
            ))}
          </div>
          <div className={styles.langSwitch}>
            <span className={styles.langLabel}>{t.langLabel}</span>
            {locale === "es" ? (
              <span aria-current="page" className={styles.langActive}>
                {t.langEs}
              </span>
            ) : (
              <Link href="/" className={styles.langLink}>
                {t.langEs}
              </Link>
            )}
            {locale === "en" ? (
              <span aria-current="page" className={styles.langActive}>
                {t.langEn}
              </span>
            ) : (
              <Link href="/en/" hrefLang="en" className={styles.langLink}>
                {t.langEn}
              </Link>
            )}
          </div>
        </div>

        <p className={styles.legal}>{t.legalNotice}</p>
        <p className={styles.copyright}>{t.copyright}</p>
      </div>
    </footer>
  );
}
