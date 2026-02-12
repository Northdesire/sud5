"use client";

import { useState, FormEvent } from "react";

interface InquiryFormProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function InquiryForm({ isOpen, onToggle }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    checkin: "",
    checkout: "",
    personen: "2",
    unterkunft: "",
    hund: "nein",
    nachricht: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  };

  const input =
    "w-full px-4 py-3 bg-white/50 border border-[var(--color-sand-dark)] rounded-sm text-[var(--color-foreground)] placeholder:text-[var(--color-foreground)]/40 focus:outline-none focus:border-[var(--color-ocean-strong)] focus:ring-1 focus:ring-[var(--color-ocean-strong)] transition-colors duration-300 text-base md:text-[17px]";
  const label =
    "block text-[13px] tracking-[0.2em] uppercase font-medium text-[var(--color-ocean-strong)] mb-2";

  if (submitted) {
    return (
      <section id="anfrage" className="pt-10 pb-28 px-6">
        <div className="max-w-lg mx-auto text-left" style={{ animation: "fadeUp 0.5s ease-out" }}>
          <div className="text-4xl mb-6">
            <svg className="w-12 h-12 text-[var(--color-ocean)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-foreground)] mb-3">
            Vielen Dank!
          </h3>
          <p className="text-base md:text-[17px] text-[var(--color-foreground)]/75 mb-8 leading-relaxed">
            Wir haben Ihre Anfrage erhalten und melden uns
            schnellstmöglich bei Ihnen. Wir freuen uns auf Sie!
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", telefon: "", checkin: "", checkout: "", personen: "2", unterkunft: "", hund: "nein", nachricht: "" });
            }}
            className="text-[12px] tracking-[0.15em] uppercase text-[var(--color-ocean)] hover:text-[var(--color-ocean-dark)] transition-colors cursor-pointer"
          >
            Neue Anfrage stellen
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="anfrage" className="pt-10 pb-28 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[var(--color-foreground)] mb-2 leading-snug">
            Jetzt anfragen
          </h2>
          <p className="text-base md:text-[17px] text-[var(--color-foreground)]/75 leading-relaxed">
            Noch kein Online-Buchungssystem — schreiben Sie uns einfach
            und wir melden uns persönlich bei Ihnen.
          </p>
        </div>

        <form
            onSubmit={handleSubmit}
            className="space-y-8 p-8 md:p-10 rounded-2xl border-2 border-[var(--color-sand-dark)] bg-[var(--color-sand)]/30"
            style={{ animation: "fadeUp 0.4s ease-out" }}
          >
            {/* Name & Contact */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={label}>Name *</label>
                <input
                  type="text" name="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Vor- und Nachname"
                  className={input}
                />
              </div>
              <div>
                <label className={label}>E-Mail *</label>
                <input
                  type="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="ihre@email.de"
                  className={input}
                />
              </div>
            </div>

            <div>
              <label className={label}>Telefon</label>
              <input
                type="tel" name="telefon"
                value={formData.telefon} onChange={handleChange}
                placeholder="+49 ..."
                className={input}
              />
            </div>

            {/* Dates */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={label}>Anreise *</label>
                <input
                  type="date" name="checkin" required
                  value={formData.checkin} onChange={handleChange}
                  className={input}
                />
              </div>
              <div>
                <label className={label}>Abreise *</label>
                <input
                  type="date" name="checkout" required
                  value={formData.checkout} onChange={handleChange}
                  className={input}
                />
              </div>
            </div>

            {/* Details */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className={label}>Unterkunft *</label>
                <select
                  name="unterkunft" required
                  value={formData.unterkunft} onChange={handleChange}
                  className={input}
                >
                  <option value="">Bitte wählen</option>
                  <option value="einzelzimmer">Einzelzimmer</option>
                  <option value="doppelzimmer">Doppelzimmer</option>
                  <option value="ferienwohnung">Ferienwohnung</option>
                </select>
              </div>
              <div>
                <label className={label}>Personen</label>
                <select
                  name="personen"
                  value={formData.personen} onChange={handleChange}
                  className={input}
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label}>Hund dabei?</label>
                <select
                  name="hund"
                  value={formData.hund} onChange={handleChange}
                  className={input}
                >
                  <option value="nein">Nein</option>
                  <option value="ja">Ja</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={label}>Nachricht</label>
              <textarea
                name="nachricht" rows={3}
                value={formData.nachricht} onChange={handleChange}
                placeholder="Besondere Wünsche, Fragen ..."
                className={`${input} resize-none`}
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={sending}
                className="px-10 py-3.5 bg-[var(--color-foreground)] text-white rounded-full text-base md:text-[17px] tracking-[0.15em] uppercase hover:bg-[var(--color-foreground)]/80 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Wird gesendet..." : "Anfrage absenden"}
              </button>
            </div>
          </form>
      </div>
    </section>
  );
}
