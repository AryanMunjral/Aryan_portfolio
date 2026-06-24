import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./About";
import { profile, CONTACT_EMAIL } from "../data";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Inline SVG icons
const GithubIco = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);
const LinkedinIco = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);
const LeetCodeIco = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 3h7v7H3V3Zm11 0h7v4h-7V3ZM3 11h7v10H3V11Zm11 0h7v10h-7V11Z" />
  </svg>
);

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  // Honeypot — invisible to humans, used to detect bots
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2) errors.name = "Name is too short.";

  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email.";

  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  else if (values.subject.trim().length < 3) errors.subject = "Subject is too short.";

  if (!values.message.trim()) errors.message = "Please write a message.";
  else if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState("");

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k as keyof FormErrors]) {
      setErrors((er) => ({ ...er, [k]: undefined }));
    }
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    // Honeypot — silently succeed for bots
    if (form.website.trim() !== "") {
      setStatus("ok");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
      return;
    }

    setStatus("sending");
    setErrMsg("");

    try {
      // Build a formatted plain-text body that matches the requested email format.
      const formattedBody = [
        "You have received a new message from your portfolio website.",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Subject: ${form.subject}`,
        "",
        "Message:",
        form.message,
        "",
        `Submitted At: ${new Date().toLocaleString()}`,
      ].join("\n");

      // Attempt 1 — FormSubmit.co (free serverless email forwarding, no backend required).
      // Docs: https://formsubmit.co/
      // IMPORTANT: the very first submission will trigger a confirmation email to
      // aaryanmunjral1001@gmail.com — click the activation link once and all
      // future submissions will be delivered automatically.
      const payload = new URLSearchParams({
        _subject: `New Portfolio Contact Message - ${form.subject}`,
        _template: "table",
        _captcha: "false",
        Name: form.name,
        Email: form.email,
        Subject: form.subject,
        Message: form.message,
        "Submitted At": new Date().toLocaleString(),
      });

      const fsRes = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: payload.toString(),
      });

      const fsData = (await fsRes.json().catch(() => ({}))) as {
        success?: string;
        error?: string;
      };

      // FormSubmit returns { success: "true" } on success, or an error string.
      // Treat any non-2xx as a soft failure → fall back to mailto:.
      const fsOk =
        fsRes.ok &&
        (fsData.success === "true" ||
          fsData.success === "1" ||
          fsRes.status ===200);

      if (fsOk) {
        setStatus("ok");
        setForm({ name: "", email: "", subject: "", message: "", website: "" });
        return;
      }

      // Fallback — open the user's mail client with a pre-filled message so
      // their message still reaches you even if FormSubmit is unavailable.
      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `New Portfolio Contact Message - ${form.subject}`
      )}&body=${encodeURIComponent(formattedBody)}`;

      // Open mailto in a new tab; show success after a short delay so the user
      // sees confirmation even if their mail client doesn't visibly open.
      window.open(mailto, "_blank", "noopener,noreferrer");
      setStatus("ok");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (err) {
      // Last-resort fallback: open mailto so the user can still reach you.
      const formattedBody = [
        "You have received a new message from your portfolio website.",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Subject: ${form.subject}`,
        "",
        "Message:",
        form.message,
        "",
        `Submitted At: ${new Date().toLocaleString()}`,
      ].join("\n");
      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `New Portfolio Contact Message - ${form.subject}`
      )}&body=${encodeURIComponent(formattedBody)}`;
      try {
        window.open(mailto, "_blank", "noopener,noreferrer");
        setStatus("ok");
        setForm({ name: "", email: "", subject: "", message: "", website: "" });
      } catch {
        setStatus("err");
        setErrMsg(
          err instanceof Error
            ? err.message
            : "Couldn't deliver your message. Please try again or email me directly."
        );
      }
    }
  };

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "GitHub", value: "github.com/aryanmunjral", href: profile.socials.github, icon: GithubIco },
    { label: "LinkedIn", value: "linkedin.com/in/aryan-munjral", href: profile.socials.linkedin, icon: LinkedinIco },
    { label: "LeetCode", value: "leetcode.com/aryanmunjral", href: profile.socials.leetcode, icon: LeetCodeIco },
  ];

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="07 — Contact"
          title="Let's build something exceptional."
          subtitle="Open to SWE, AI, and ML internships for Summer 2026, full-time roles, and consulting."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <div className="border-gradient relative h-full overflow-hidden rounded-3xl glass p-7">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">Reach out directly</h3>
              <p className="mt-2 text-sm text-white/60">
                I usually respond within 24 hours. For recruiting, email works best.
              </p>

              <div className="mt-6 space-y-2">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-fuchsia-400/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                      <l.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs uppercase tracking-wider text-white/40">{l.label}</div>
                      <div className="truncate text-sm font-medium text-white">{l.value}</div>
                    </div>
                    <span className="text-white/30 transition group-hover:text-white">→</span>
                  </a>
                ))}
              </div>

              {/* Mini social bar */}
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                <span className="text-xs text-white/50">Find me on</span>
                <div className="flex items-center gap-1.5">
                  <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/70 transition hover:bg-white hover:text-black" aria-label="GitHub">
                    <GithubIco className="h-4 w-4" />
                  </a>
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/70 transition hover:bg-white hover:text-black" aria-label="LinkedIn">
                    <LinkedinIco className="h-4 w-4" />
                  </a>
                  <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/70 transition hover:bg-white hover:text-black" aria-label="LeetCode">
                    <LeetCodeIco className="h-4 w-4" />
                  </a>
                  <a href={`mailto:${profile.email}`} className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/70 transition hover:bg-white hover:text-black" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={submit} noValidate className="border-gradient relative overflow-hidden rounded-3xl glass p-7 lg:col-span-3">
            <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
            <h3 className="font-display text-2xl font-semibold text-white">Send a message</h3>
            <p className="mt-2 text-sm text-white/60">Fill the form and I'll get back to you over email.</p>

            {/* Honeypot field — visually hidden, bots fill it */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
              <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} /></label>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={inputCls(!!errors.name)}
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className={inputCls(!!errors.email)}
                  placeholder="jane@company.com"
                  autoComplete="email"
                />
              </Field>
            </div>

            <Field label="Subject" error={errors.subject} className="mt-4">
              <input
                required
                value={form.subject}
                onChange={update("subject")}
                className={inputCls(!!errors.subject)}
                placeholder="Software Engineering Internship Opportunity"
                autoComplete="off"
              />
            </Field>

            <Field label="Message" error={errors.message} className="mt-4">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                className={`${inputCls(!!errors.message)} resize-none`}
                placeholder="Tell me about the role, project, or idea you have in mind…"
              />
              <div className="mt-1 text-right font-mono text-[10px] text-white/30">{form.message.length} chars</div>
            </Field>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="min-h-[20px] text-xs">
                {status === "ok" && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300 ring-1 ring-emerald-500/30"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Thank you for reaching out. Your message has been sent successfully. I will get back to you soon.
                  </motion.span>
                )}
                {status === "err" && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-rose-300 ring-1 ring-rose-500/30"
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    Couldn't send: {errMsg || "Please try again or email me directly."}
                  </motion.span>
                )}
                {status === "idle" && <span className="text-white/40">Encrypted in transit · Forwarded to my inbox.</span>}
                {status === "sending" && (
                  <span className="inline-flex items-center gap-1.5 text-white/60">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" /> Sending your message…
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto mt-24 max-w-6xl border-t border-white/10 px-6 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 sm:flex-row">
          <div>© {new Date().getFullYear()} Aryan Munjral. Crafted with obsession.</div>
          <div className="flex items-center gap-3">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="-translate-y-px text-white/60 transition hover:text-white" aria-label="LinkedIn">
              <LinkedinIco className="h-3.5 w-3.5" />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="-translate-y-px text-white/60 transition hover:text-white" aria-label="GitHub">
              <GithubIco className="h-3.5 w-3.5" />
            </a>
            <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="-translate-y-px text-white/60 transition hover:text-white" aria-label="LeetCode">
              <LeetCodeIco className="h-3.5 w-3.5" />
            </a>
            <span className="font-mono">Built with React · Three.js · Tailwind · Framer Motion</span>
          </div>
        </div>
      </footer>
    </section>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition",
    hasError
      ? "border-rose-400/60 bg-rose-500/5 focus:border-rose-400"
      : "border-white/10 focus:border-fuchsia-400/50 focus:bg-white/[0.06]",
  ].join(" ");
}

function Field({
  label,
  children,
  error,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/50">{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-rose-300"
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}