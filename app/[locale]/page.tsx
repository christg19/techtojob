import { hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Messages } from "@/lib/messages";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TournamentStrip from "@/components/sections/TournamentStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import Talent from "@/components/sections/Talent";
import Companies from "@/components/sections/Companies";
import Tournaments from "@/components/sections/Tournaments";
import Networking from "@/components/sections/Networking";
import News from "@/components/sections/News";
import Newsletter from "@/components/sections/Newsletter";
import Closing from "@/components/sections/Closing";

const TOURNAMENT_DATE = "";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const messages = (await getMessages()) as Messages;

  return (
    <>
      <a href="#top" className="skipLink">
        {messages.a11y.skip}
      </a>
      <Header cta={messages.nav.cta} logoAlt={messages.brand.logoAlt} />
      <main>
        <Hero t={messages.hero} />
        <TournamentStrip t={messages.tournament} date={TOURNAMENT_DATE} />
        <HowItWorks t={messages.how} />
        <Talent t={messages.talent} />
        <Companies t={messages.companies} />
        <Tournaments t={messages.tournaments} />
        <Networking t={messages.networking} />
        <News t={messages.news} />
        <Newsletter t={messages.newsletter} />
        <Closing t={messages.closing} />
      </main>
      <Footer t={messages.footer} logoAlt={messages.brand.logoAlt} locale={locale} />
    </>
  );
}
