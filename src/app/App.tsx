import { useEffect, useState } from "react";
import { CaseFooter } from "./components/case-footer";
import { TopNav } from "./components/top-nav";
import { parseHash, type SiteRoute } from "./lib/routing";
import { AboutPage } from "./pages/about-page";
import { CaseAimlapiPage } from "./pages/case-aimlapi-page";
import { CaseAmigochatPage } from "./pages/case-amigochat-page";
import { CaseOverchatPage } from "./pages/case-overchat-page";
import { CaseStrevolutPage } from "./pages/case-strevolut-page";
import { CaseTemplatePage } from "./pages/case-template-page";
import { HomePage } from "./pages/home-page";
import { UpdatesPage } from "./pages/updates-page";
import { WorkPage } from "./pages/work-page";

export default function App() {
  const [route, setRoute] = useState<SiteRoute>(() =>
    typeof window === "undefined" ? "home" : parseHash(window.location.hash).route,
  );

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash(window.location.hash).route);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navActive: SiteRoute =
    route === "case-aimlapi" ||
    route === "case-amigochat" ||
    route === "case-overchat" ||
    route === "case-strevolut" ||
    route === "case-template"
      ? "work"
      : route;

  return (
    <div className="min-h-screen w-full bg-white text-[#050505]">
      <TopNav active={navActive} />
      {route === "home" && <HomePage />}
      {route === "work" && <WorkPage />}
      {route === "about" && <AboutPage />}
      {route === "updates" && <UpdatesPage />}
      {route === "case-aimlapi" && <CaseAimlapiPage />}
      {route === "case-amigochat" && <CaseAmigochatPage />}
      {route === "case-overchat" && <CaseOverchatPage />}
      {route === "case-strevolut" && <CaseStrevolutPage />}
      {route === "case-template" && <CaseTemplatePage />}
      <CaseFooter />
    </div>
  );
}
