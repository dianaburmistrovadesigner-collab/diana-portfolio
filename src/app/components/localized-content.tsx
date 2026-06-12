import React, { type ReactNode } from "react";
import { LOCALIZED_TEXT_PROPS, translateContent } from "../lib/i18n/content-translate";
import { useLocale } from "../lib/locale";

function localizeNode(node: ReactNode, locale: "en" | "ru"): ReactNode {
  if (typeof node === "string") {
    return translateContent(locale, node);
  }
  if (typeof node === "number" || typeof node === "boolean" || node == null) return node;
  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <React.Fragment key={index}>{localizeNode(child, locale)}</React.Fragment>
    ));
  }
  if (React.isValidElement(node)) {
    const elementProps = node.props as Record<string, unknown>;
    const nextProps: Record<string, unknown> = {};

    LOCALIZED_TEXT_PROPS.forEach((prop) => {
      const value = elementProps[prop];
      if (typeof value === "string") {
        nextProps[prop] = translateContent(locale, value);
      }
    });

    if ("children" in elementProps) {
      nextProps.children = localizeNode(elementProps.children as ReactNode, locale);
    }

    return React.cloneElement(node, nextProps);
  }

  return node;
}

/** Wrap case page / block JSX — auto-translates string children when locale is ru. */
export function LocalizedContent({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  return <>{localizeNode(children, locale)}</>;
}
