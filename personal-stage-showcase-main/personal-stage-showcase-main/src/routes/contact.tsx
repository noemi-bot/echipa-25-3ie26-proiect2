import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Andrei Popescu" },
      {
        name: "description",
        content:
          "Scrie-mi pentru colaborări, stagii sau pur și simplu o discuție despre tehnologie și design.",
      },
      { property: "og:title", content: "Contact — Andrei Popescu" },
      {
        property: "og:description",
        content: "Formular de contact și date pentru a-mi scrie direct.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Introdu un nume valid").max(80),
  email: z.string().trim().email("Adresă de email invalidă").max(150),
  subject: z.string().trim().min(3, "Subiectul este prea scurt").max(120),
  message: z.string().trim().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere").max(1500),
});

type FormState = { name: string; email: string; subject: string; message: string };

const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };

function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 5000);
  };

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <header className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold">Hai să vorbim</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mă bucur să primesc mesaje despre colaborări, stagii de practică, sau chiar și o cafea
          virtuală pentru a discuta despre tehnologie.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        <aside className="lg:col-span-2 space-y-4">
          <InfoCard
            icon={<Mail className="h-5 w-5" />}
            title="Email"
            value="andrei.popescu@student.upb.ro"
          />
          <InfoCard
            icon={<MapPin className="h-5 w-5" />}
            title="Locație"
            value="București, România"
          />
          <InfoCard
            icon={<Github className="h-5 w-5" />}
            title="GitHub"
            value="github.com/andreipopescu"
          />
          <InfoCard
            icon={<Linkedin className="h-5 w-5" />}
            title="LinkedIn"
            value="linkedin.com/in/andreipopescu"
          />
        </aside>

        <form
          onSubmit={onSubmit}
          noValidate
          className="lg:col-span-3 rounded-2xl bg-card border border-border p-6 md:p-8 space-y-5"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          {sent && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 text-foreground border border-primary/20">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div className="text-sm">
                <p className="font-medium">Mesaj trimis cu succes!</p>
                <p className="text-muted-foreground">Îți voi răspunde în cel mult 48 de ore.</p>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nume" error={errors.name}>
              <Input
                value={form.name}
                onChange={update("name")}
                placeholder="Ion Ionescu"
                autoComplete="name"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <Input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="ion@exemplu.ro"
                autoComplete="email"
              />
            </Field>
          </div>

          <Field label="Subiect" error={errors.subject}>
            <Input
              value={form.subject}
              onChange={update("subject")}
              placeholder="Propunere de colaborare"
            />
          </Field>

          <Field label="Mesaj" error={errors.message}>
            <Textarea
              value={form.message}
              onChange={update("message")}
              placeholder="Spune-mi mai multe despre proiectul tău..."
              rows={6}
            />
          </Field>

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Trimite mesajul <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
        <p className="mt-1 font-medium text-foreground truncate">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
