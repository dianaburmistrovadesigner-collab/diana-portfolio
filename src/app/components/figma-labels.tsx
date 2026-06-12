import { useLocale } from "../lib/locale";
import { FIGMA_LINK_LABEL, FIGMA_WIREFRAMES_LABEL } from "../lib/case-figma-links";

export function FigmaLinkLabel({ suffix = "" }: { suffix?: string }) {
  const { tc } = useLocale();
  return (
    <>
      {tc(FIGMA_LINK_LABEL)}
      {suffix}
    </>
  );
}

export function FigmaWireframesLabel({ suffix = "" }: { suffix?: string }) {
  const { tc } = useLocale();
  return (
    <>
      {tc(FIGMA_WIREFRAMES_LABEL)}
      {suffix}
    </>
  );
}
