"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Magnetic } from "@/components/motion/Magnetic";

type Errors = { name?: string; message?: string };

function validate(name: string, message: string): Errors {
  const errors: Errors = {};
  if (!name.trim()) errors.name = "Add your name so I know who's writing.";
  if (message.trim().length < 10) errors.message = "Write a message of at least 10 characters.";
  return errors;
}

/**
 * No backend: the form composes an email and opens it in the visitor's mail app.
 */
export function ContactForm({ email }: { email: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const message = String(data.get("message") ?? "");
    const found = validate(name, message);
    setErrors(found);

    if (found.name) return nameRef.current?.focus();
    if (found.message) return messageRef.current?.focus();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n${name.trim()}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  // Once a field has an error, re-check it as the visitor fixes it.
  function onBlur(e: React.FocusEvent<HTMLFormElement>) {
    const field = e.target.getAttribute("name") as keyof Errors | null;
    if (!field || !errors[field]) return;
    const data = new FormData(e.currentTarget);
    const found = validate(String(data.get("name") ?? ""), String(data.get("message") ?? ""));
    setErrors((prev) => ({ ...prev, [field]: found[field] }));
  }

  const field =
    "mt-2 block w-full rounded-2xl border border-line-strong bg-surface/70 px-4 text-base text-ink placeholder:text-muted transition-colors duration-150 hover:border-ink focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-invalid:border-danger";
  const error = "mt-2 text-sm font-medium text-danger";

  return (
    <form noValidate onSubmit={onSubmit} onBlur={onBlur} className="glass rounded-[var(--radius-panel)] p-5 sm:p-7">
      <h3 className="font-display text-xl font-bold">Write to me here</h3>
      <p className="mt-1 text-sm text-muted">This opens your email app with the message filled in.</p>

      <div className="mt-6">
        <label htmlFor="cf-name" className="text-sm font-medium">
          Your name
        </label>
        <input
          ref={nameRef}
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          className={`${field} h-12`}
        />
        {errors.name && (
          <p id="cf-name-error" className={error}>
            {errors.name}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="cf-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          ref={messageRef}
          id="cf-message"
          name="message"
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          className={`${field} resize-y py-3`}
        />
        {errors.message && (
          <p id="cf-message-error" className={error}>
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-8">
        <Magnetic>
          <button
            type="submit"
            className="pressable sweep group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-ink [--sweep:var(--ink)] hover:text-bg"
          >
            <PaperPlaneTilt
              size={18}
              weight="bold"
              aria-hidden
              className="motion-nudge transition-[translate,rotate] duration-300 ease-(--ease-out) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12"
            />
            Email me
          </button>
        </Magnetic>
      </div>
      <p aria-live="polite" className="mt-4 min-h-6 text-sm text-muted">
        {opened ? "Your email app should now be open with the message ready to send." : ""}
      </p>
    </form>
  );
}
