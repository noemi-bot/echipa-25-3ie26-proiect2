import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Palette, Camera, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andrei Popescu — Portofoliu student" },
      {
        name: "description",
        content:
          "Sunt Andrei, student la Informatică în București. Explorează proiectele mele de programare, design și fotografie.",
      },
      { property: "og:title", content: "Andrei Popescu — Portofoliu student" },
      {
        property: "og:description",
        content: "Proiecte web, design și fotografie realizate în timpul facultății.",
      },
    ],
  }),
  component: HomePage,
});

const categories = [
  {
    icon: Code2,
    title: "Proiecte web",
    desc: "Aplicații realizate în React, Next.js și Node.js, de la idee la deployment.",
    tag: "12 proiecte",
  },
  {
    icon: Palette,
    title: "Design & UI",
    desc: "Interfețe digitale, identitate vizuală și prototipuri în Figma.",
    tag: "8 lucrări",
  },
  {
    icon: Camera,
    title: "Fotografie",
    desc: "Serii foto din călătoriile prin Maramureș, Brașov și Delta Dunării.",
    tag: "5 serii",
  },
  {
    icon: BookOpen,
    title: "Articole & note",
    desc: "Însemnări tehnice despre algoritmi, baze de date și învățare automată.",
    tag: "20+ articole",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover opacity-70 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-28 md:pt-28 md:pb-36">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
            Student • Anul III • UPB
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground max-w-3xl leading-tight">
            Învăț, construiesc și documentez fiecare pas al drumului meu în tehnologie.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Mă numesc Andrei Popescu și sunt pasionat de dezvoltare web, design de interfețe și
            fotografie de călătorie. Aici găsești proiectele la care lucrez pe parcursul facultății.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/portofoliu">
                Vezi portofoliul <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contactează-mă</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Categorii de proiecte</h2>
            <p className="mt-2 text-muted-foreground">
              Explorează lucrările mele, grupate pe domenii de interes.
            </p>
          </div>
          <Link
            to="/portofoliu"
            className="text-sm font-medium text-primary hover:underline inline-flex items-center"
          >
            Toate proiectele <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Link
              key={c.title}
              to="/portofoliu"
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{c.tag}</span>
                <ArrowRight className="h-4 w-4 text-primary translate-x-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
