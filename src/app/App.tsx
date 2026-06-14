import { useEffect, useState } from "react";
import { CaseFooter } from "./components/case-footer";
import { CaseNav } from "./components/case-nav";
import { TopNav } from "./components/top-nav";
import { getServiceByRoute } from "./data/services";
import { parseHash, type SiteRoute } from "./lib/routing";
import { AboutPage } from "./pages/about-page";
import { CaseAimlapiPage } from "./pages/case-aimlapi-page";
import { CaseAmigochatPage } from "./pages/case-amigochat-page";
import { CaseOverchatPage } from "./pages/case-overchat-page";
import { CaseStrevolutPage } from "./pages/case-strevolut-page";
import { CaseTemplatePage } from "./pages/case-template-page";
import { HomePage } from "./pages/home-page";
import { ServicePage } from "./pages/service-page";
import { ServicesPage } from "./pages/services-page";
import { UpdatesPage } from "./pages/updates-page";
import { WorkPage } from "./pages/work-page";

const SERVICE_ROUTES: SiteRoute[] = [
  "service-b2b-product-design",
  "service-design-system",
  "service-usability-audit",
  "service-design-system-audit",
];

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

  const isCase =
    route === "case-aimlapi" ||
    route === "case-amigochat" ||
    route === "case-overchat" ||
    route === "case-strevolut" ||
    route === "case-template";

  const isServiceDetail = (SERVICE_ROUTES as string[]).includes(route);

  const navActive: SiteRoute = isCase
    ? "work"
    : isServiceDetail
      ? "services"
      : route;

  const serviceData = isServiceDetail ? getServiceByRoute(route) : undefined;

  return (
    <div className="min-h-screen w-full bg-white text-[#050505]">
      <TopNav active={navActive} />
      {route === "home" && <HomePage />}
      {route === "work" && <WorkPage />}
      {route === "about" && <AboutPage />}
      {route === "updates" && <UpdatesPage />}
      {route === "services" && <ServicesPage />}
      {isServiceDetail && serviceData && <ServicePage service={serviceData} />}
      {route === "case-aimlapi" && <CaseAimlapiPage />}
      {route === "case-amigochat" && <CaseAmigochatPage />}
      {route === "case-overchat" && <CaseOverchatPage />}
      {route === "case-strevolut" && <CaseStrevolutPage />}
      {route === "case-template" && <CaseTemplatePage />}
      {(route === "case-aimlapi" ||
        route === "case-amigochat" ||
        route === "case-overchat" ||
        route === "case-strevolut") && <CaseNav currentRoute={route} />}
      <CaseFooter />
    </div>
  );
}
