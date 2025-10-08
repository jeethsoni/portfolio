"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuroraText } from "./ui/aurora-text";

const emailRegex = /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.name || values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!values.email || !emailRegex.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!values.message || values.message.trim().length < 10) {
    errors.message = "Please enter at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const vErrors = validate(values);
    setErrors(vErrors);
    if (Object.keys(vErrors).length > 0) return;

    setStatus("sending");

    try {
      const resp = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(values) });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) throw new Error(data?.error || "Request failed");

      if (resp.ok) {
        setStatus("success");
        setValues({ name: "", email: "", message: "" });
        setToast("Message sent successfully!");
        return;
      }
      throw new Error("Failed");
    } catch (err) {
      setStatus("error");
      setToast("Something went wrong. Please try again later.");
    }
  }

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
        <div className="mb-8 text-center font-serif">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-white/90">
            Let's Build {" "}
            <AuroraText>
              Something 
            </AuroraText>
          </h2>
          <p className="mt-3 text-sm text-white/70 max-w-xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll do my best to get back to you!
          </p>
        </div>
        <div className="mt-8 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gray-900 py-6 px-6 md:px-10 backdrop-blur-sm shadow-lg"
          >
            <Field
              id="name"
              label="Your Name"
              placeholder="Jane Doe"
              value={values.name}
              error={errors.name}
              onChange={(v) => setValues((s) => ({ ...s, name: v }))}
            />

            <Field
              id="email"
              type="email"
              label="Email"
              placeholder="jane@domain.com"
              value={values.email}
              error={errors.email}
              onChange={(v) => setValues((s) => ({ ...s, email: v }))}
            />

            <Field
              id="message"
              label="Message"
              placeholder="Tell me about your project or idea..."
              textarea
              value={values.message}
              error={errors.message}
              onChange={(v) => setValues((s) => ({ ...s, message: v }))}
            />

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-2 font-semibold text-white shadow-md transition hover:bg-white/20 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {toast && (
              <p className="mt-3 text-sm text-emerald-400">{toast}</p>
            )}

            {status === "error" && (
              <p className="mt-2 text-sm text-red-500">Couldn’t send right now. Please try again.</p>
            )}
          </motion.form>
        </div>
    </section>
  );
}

function Field({ id, label, placeholder, value, onChange, error, textarea = false, type = "text" }) {
  const InputTag = textarea ? "textarea" : "input";
  return (
    <div className="mt-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
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
          "mt-2 w-full rounded-xl border border-white/10 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 outline-none transition ",
          "focus:border-white/20",
          textarea ? "min-h-[140px]" : "",
        ].join(" ")}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}