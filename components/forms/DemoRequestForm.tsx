"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600";

const labelClasses = "font-heading text-sm font-medium text-navy-900";

export function DemoRequestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      role: String(formData.get("role") ?? ""),
      careType: String(formData.get("careType") ?? ""),
      clientCount: String(formData.get("clientCount") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      interestedInAddOns: formData.get("interestedInAddOns") === "on",
    };

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal-600/30 bg-teal-50 p-8 text-center"
      >
        <p className="font-heading text-lg font-semibold text-navy-900">
          Thanks — that&rsquo;s with us.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          We&rsquo;ll be in touch shortly to find a time that works.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className={labelClasses}>
            Your role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            required
            placeholder="e.g. Registered Manager"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="clientCount" className={labelClasses}>
            Number of clients / beds
          </label>
          <input id="clientCount" name="clientCount" type="text" required className={inputClasses} />
        </div>
      </div>

      <fieldset>
        <legend className={labelClasses}>Care type</legend>
        <div className="mt-2 flex flex-wrap gap-4">
          {[
            { value: "domiciliary", label: "Domiciliary" },
            { value: "residential", label: "Residential" },
            { value: "both", label: "Both" },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-sm text-navy-900">
              <input
                type="radio"
                name="careType"
                value={option.value}
                required
                className="h-4 w-4 border-navy-300 text-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Work email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone{" "}
            <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-navy-900">
        <input
          type="checkbox"
          name="interestedInAddOns"
          className="mt-0.5 h-4 w-4 rounded border-navy-300 text-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        />
        <span>
          I&rsquo;m interested in the Training &amp; Compliance or Policies &amp; Procedures
          add-ons
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending that — please try again, or email{" "}
          <a href="mailto:hello@careflow.co.uk" className="underline">
            hello@careflow.co.uk
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-6 py-3 font-heading text-base font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:opacity-50 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request a demo"}
      </button>
    </form>
  );
}
