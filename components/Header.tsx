import { links } from "@/lib/links";
import styles from "./Header.module.css";

type HeaderProps = {
  cta: string;
  logoAlt: string;
};

export default function Header({ cta, logoAlt }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" aria-label={logoAlt} className={styles.logoLink}>
          <img
            src="/brand/logo-h-teal.svg"
            alt={logoAlt}
            width="1108"
            height="164"
            className={styles.logo}
          />
        </a>
        <a
          href={links.discord}
          target="_blank"
          rel="noopener"
          className={styles.cta}
        >
          {cta}
        </a>
      </div>
    </header>
  );
}
