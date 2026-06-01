import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/portofoliu")({
  head: () => ({
    meta: [
      { title: "Portofoliu — Andrei Popescu" },
      {
        name: "description",
        content:
          "Selecție de proiecte web, design și fotografie realizate de Andrei Popescu în timpul facultății.",
      },
      { property: "og:title", content: "Portofoliu — Andrei Popescu" },
      {
        property: "og:description",
        content: "Proiecte selectate: aplicații web, design de produs și serii foto.",
      },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    title: "Orar UPB",
    year: "2025",
    tag: "Web App",
    desc: "Aplicație web pentru generarea orarului personalizat al studenților, cu sincronizare în Google Calendar.",
    stack: ["React", "TypeScript", "Supabase"],
    color: "from-violet-500/30 to-fuchsia-500/30",
  },
  {
    title: "Bibliotecă Digitală",
    year: "2024",
    tag: "Proiect facultate",
    desc: "Platformă pentru împrumut și recenzii de cărți între studenți, dezvoltată în echipă de 4 persoane.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    color: "from-sky-500/30 to-emerald-500/30",
  },
  {
    title: "Maramureș în Patru Anotimpuri",
    year: "2024",
    tag: "Serie foto",
    desc: "Serie documentară de 36 de fotografii din satele tradiționale maramureșene, expusă la Centrul Cultural.",
    stack: ["Fotografie", "Lightroom"],
    color: "from-amber-500/30 to-orange-500/30",
  },
  {
    title: "Asistent pentru Bacalaureat",
    year: "2024",
    tag: "AI / Educație",
    desc: "Chatbot pentru pregătirea elevilor la matematică, cu exerciții generate adaptiv în funcție de nivel.",
    stack: ["Python", "FastAPI", "OpenAI"],
    color: "from-rose-500/30 to-pink-500/30",
  },
  {
    title: "Cafenea Locală — Identitate",
    year: "2023",
    tag: "Branding",
    desc: "Identitate vizuală completă pentru o cafenea de specialitate din centrul Brașovului: logo, meniu, packaging.",
    stack: ["Figma", "Illustrator"],
    color: "from-stone-400/30 to-amber-700/30",
  },
  {
    title: "Tracker Cheltuieli Studențești",
    year: "2023",
    tag: "Mobile",
    desc: "Aplicație mobilă minimalistă pentru evidența cheltuielilor lunare, gândită pentru bugete mici.",
    stack: ["React Native", "Expo"],
    color: "from-emerald-500/30 to-teal-500/30",
  },
];

function PortfolioPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <header className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold">Portofoliu</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          O selecție din proiectele la care am lucrat în ultimii ani — de la aplicații web și
          asistenți AI, până la fotografie și identitate vizuală.
        </p>
      </header>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`group rounded-2xl border border-border overflow-hidden bg-card transition-all hover:-translate-y-1 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div
              className={`h-44 md:h-56 bg-gradient-to-br ${p.color} relative flex items-end p-6`}
            >
              <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-foreground">
                {p.year}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl md:text-2xl font-bold">{p.title}</h2>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-1.5" /> Vezi detalii
                </a>
                <a
                  href="#"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-4 w-4 mr-1.5" /> Cod sursă
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
