import {
  AboutProject,
  CallToAction,
  Header,
  Hero,
  HowWorks,
  TechStack,
  Architecture,
  Footer,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />
        <AboutProject />
        <HowWorks />
        <Architecture />
        <TechStack />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
