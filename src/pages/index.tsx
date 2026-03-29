import { Layout } from "../components/Layout";
import { HomeNav } from "../components/home/HomeNav";
import { HeroSection } from "../components/home/HeroSection";
import { EngineeringSection } from "../components/home/EngineeringSection";
import { TrajectorySection } from "../components/home/TrajectorySection";
import { ValidationSection } from "../components/home/ValidationSection";
import { CtaSection } from "../components/home/CtaSection";
import { HomeFooter } from "../components/home/HomeFooter";
import { homeData, siteData } from "../data/index";
import type { PageData } from "../lib/types";

interface HomePageData {
  hero: typeof homeData.hero;
  engineering: typeof homeData.engineering;
  trajectory: typeof homeData.trajectory;
  certifications: typeof homeData.certifications;
  education: typeof homeData.education;
  contact: typeof homeData.contact;
  meta: Pick<typeof siteData.meta, "year">;
}

export async function getStaticData(): Promise<PageData<HomePageData>> {
  return {
    data: {
      hero: homeData.hero,
      engineering: homeData.engineering,
      trajectory: homeData.trajectory,
      certifications: homeData.certifications,
      education: homeData.education,
      contact: homeData.contact,
      meta: { year: siteData.meta.year },
    },
    translations: {},
  };
}

export default function HomePage({ data }: PageData<HomePageData>) {
  const { hero, engineering, trajectory, certifications, education, contact, meta } = data;

  return (
    <Layout title={`${hero.name} | ELITE WEB ARCHITECT`}>
      <div className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary selection:text-on-primary overflow-x-hidden">
        <HomeNav />
        <main>
          <HeroSection
            name={hero.name}
            role={hero.role}
            lighthouseScore={hero.lighthouseScore}
            chips={hero.chips}
          />
          <EngineeringSection streakJsTags={engineering.streakJs.tags} />
          <TrajectorySection items={trajectory} />
          <ValidationSection
            certifications={certifications}
            education={education}
            location={contact.location}
          />
          <CtaSection email={contact.email} portfolioUrl={contact.portfolioUrl} />
        </main>
        <HomeFooter
          name={hero.name}
          phone={contact.phone}
          year={meta.year}
          links={[
            { label: "LinkedIn", href: contact.linkedin },
            { label: "GitHub", href: contact.github },
            { label: "Email", href: `mailto:${contact.email}` },
          ]}
        />
      </div>
    </Layout>
  );
}
