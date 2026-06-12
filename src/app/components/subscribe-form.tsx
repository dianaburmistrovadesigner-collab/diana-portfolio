import { useEffect, useState, type FormEvent } from "react";
import { siteConfig } from "../lib/site-config";

type SubscribeFormProps = {
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
  errorMessage: string;
  pendingMessage: string;
};

type FormState = "idle" | "loading" | "success" | "error" | "pending";

function TallyEmbed({ formId }: { formId: string }) {
  useEffect(() => {
    const loadEmbeds = () => {
      const tally = (window as Window & { Tally?: { loadEmbeds: () => void } }).Tally;
      tally?.loadEmbeds();
    };

    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (existing) {
      loadEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = loadEmbeds;
    document.body.appendChild(script);
  }, [formId]);

  const src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <iframe
      data-tally-src={src}
      loading="lazy"
      width="100%"
      height="120"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Newsletter signup"
      className="rounded-2xl"
    />
  );
}

export function SubscribeForm({
  placeholder,
  buttonLabel,
  successMessage,
  errorMessage,
  pendingMessage,
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const tallyFormId = siteConfig.tallyFormId;
  const action = siteConfig.newsletterFormAction;

  if (tallyFormId) {
    return <TallyEmbed formId={tallyFormId} />;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    if (!action) {
      setState("pending");
      return;
    }

    setState("loading");
    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email: trimmed,
          _subject: "Portfolio updates — new subscriber",
        }),
      });
      if (!res.ok) throw new Error("subscribe failed");
      setEmail("");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <p className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-4 text-[14px] leading-snug text-[#3a3a36]">
        {successMessage}
      </p>
    );
  }

  if (state === "pending") {
    return (
      <p className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-4 text-[14px] leading-snug text-[#6F6F6A]">
        {pendingMessage}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state === "error") setState("idle");
        }}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#E8E8E3] bg-white px-4 py-3 text-[14px] text-[#050505] outline-none placeholder:text-[#B8B8B2] focus:border-[#050505]"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f] disabled:opacity-60"
      >
        {state === "loading" ? "…" : buttonLabel}
      </button>
      {state === "error" && (
        <p className="text-[12px] leading-snug text-[#b45309]">{errorMessage}</p>
      )}
    </form>
  );
}
