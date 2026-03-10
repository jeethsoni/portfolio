"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuroraText } from "./ui/aurora-text";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

const emailRegex =
  /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

function validate(values) {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!values.email || !emailRegex.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.subject || values.subject.trim().length < 2) {
    errors.subject = "Please enter a subject.";
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = "Please enter at least 10 characters.";
  }

  return errors;
}

function ContactInfoCard({ icon: Icon, title, value, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0f0b1f] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition hover:border-white/10">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80">
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0">
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="truncate text-sm text-white/60">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();

    const vErrors = validate(values);
    setErrors(vErrors);

    if (Object.keys(vErrors).length > 0) return;

    setStatus("sending");
    setToast(null);

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) throw new Error(data?.error || "Request failed");

      setStatus("success");
      setValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setToast("Message sent successfully!");
    } catch (err) {
      setStatus("error");
      setToast("Something went wrong. Please try again later.");
    }
  }

  return (
    <section id="contact" className="py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center font-serif">
          <h2 className="text-4xl font-bold text-white/90 md:text-5xl">
            Let&apos;s Build <AuroraText>Something</AuroraText>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 md:text-base">
            Got a project, idea, or opportunity in mind? Reach out through the form or
            connect with me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-white/10 bg-[#0f0b1f] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] md:p-8"
          >
            <h3 className="text-2xl font-semibold text-white">Send me a message</h3>
            <p className="mt-2 text-white/60">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <Field
                id="name"
                label="Name"
                placeholder="John Doe"
                value={values.name}
                error={errors.name}
                onChange={(v) => setValues((s) => ({ ...s, name: v }))}
              />

              <Field
                id="email"
                type="email"
                label="Email"
                placeholder="john@example.com"
                value={values.email}
                error={errors.email}
                onChange={(v) => setValues((s) => ({ ...s, email: v }))}
              />

              <Field
                id="subject"
                label="Subject"
                placeholder="Project Inquiry"
                value={values.subject}
                error={errors.subject}
                onChange={(v) => setValues((s) => ({ ...s, subject: v }))}
              />

              <Field
                id="message"
                label="Message"
                placeholder="I'd like to discuss a project opportunity..."
                textarea
                value={values.message}
                error={errors.message}
                onChange={(v) => setValues((s) => ({ ...s, message: v }))}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#b4a7f5] px-5 py-3 font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>

              {toast && (
                <p
                  className={`text-sm ${
                    status === "error" ? "text-red-400" : "text-emerald-400"
                  }`}
                >
                  {toast}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-3xl border border-white/10 bg-[#0f0b1f] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] md:p-8"
          >
            <h3 className="text-2xl font-semibold text-white">Connect with me</h3>
            <p className="mt-2 text-white/60">
              You can also reach out to me directly through these channels.
            </p>

            <div className="mt-8 space-y-5">
              <ContactInfoCard
                icon={Github}
                title="GitHub"
                value="github.com/jeethsoni"
                href="https://github.com/jeethsoni"
              />

              <ContactInfoCard
                icon={Linkedin}
                title="LinkedIn"
                value="linkedin.com/in/jeet-dev"
                href="https://www.linkedin.com/in/jeet-dev/"
              />

              <ContactInfoCard
                icon={Mail}
                title="Email"
                value="it.jsoni22@gmail.com"
                href="mailto:it.jsoni22@gmail.com"
              />

              <ContactInfoCard
                icon={Phone}
                title="Phone"
                value="+1 (732) 896-1023"
                href="tel:+17328961023"
              />
            </div>

            <div className="mt-30 px-2">
              <h4 className="text-2xl font-semibold text-white">Current Location</h4>
              <div className="mt-1 text-white/65">
                <p>San Antonio, Texas, USA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  textarea = false,
  type = "text",
}) {
  const InputTag = textarea ? "textarea" : "input";

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-base font-medium text-white">
        {label}
      </label>

      <InputTag
        id={id}
        name={id}
        type={textarea ? undefined : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={[
          "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/35 outline-none transition",
          "focus:border-white/20 focus:bg-white/[0.07]",
          textarea ? "min-h-[160px] resize-none" : "",
        ].join(" ")}
      />

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
