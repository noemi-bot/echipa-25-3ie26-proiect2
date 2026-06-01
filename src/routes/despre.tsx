import { createFileRoute } from "@tanstack/react-router";
import avatar from "@/assets/avatar.jpg";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre mine — Andrei Popescu" },
      {
        name: "description",
        content:
          "Despre Andrei Popescu, student la Informatică pasionat de dezvoltare web, design și fotografie.",
      },
      { property: "og:title", content: "Despre mine — Andrei Popescu" },
      {
        property: "og:description",
        content: "Povestea, valorile și interesele mele ca student în tehnologie.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <article
        className="rounded-3xl bg-card border border-border p-8 md:p-12"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={avatar}
            alt="Portret Andrei Popescu"
            width={160}
            height={160}
            loading="lazy"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-4 ring-primary/20"
          />
          <h1 className="mt-6 text-3xl md:text-4xl font-bold">Salut, eu sunt Andrei</h1>
          <p className="mt-3 text-muted-foreground">
            Student la Facultatea de Automatică și Calculatoare, UPB · București, România
          </p>
        </div>

        <div className="mt-10 space-y-5 text-base md:text-lg leading-relaxed text-foreground/90">
          <p>
            Am 21 de ani și sunt în anul al treilea la Informatică. Pasiunea pentru calculatoare a
            început în liceu, atunci când am construit primul meu site pentru cercul de robotică din
            Craiova. De atunci, n-am mai oprit din învățat.
          </p>
          <p>
            Îmi place să transform ideile în produse care chiar funcționează. Lucrez mai ales cu
            React, TypeScript și Node.js, dar mă bucur să explorez și inteligența artificială sau
            dezvoltarea de jocuri în timpul liber. Cred că cele mai bune proiecte se nasc din
            curiozitate și din întrebări simple, puse la momentul potrivit.
          </p>
          <p>
            Pe lângă cod, mă regăsesc în fotografie și drumeții. Weekend-urile petrecute prin
            Bucegi, Apuseni sau Delta Dunării sunt cele care îmi încarcă bateriile și mă inspiră
            pentru proiectele mai vizuale. Citesc literatură contemporană românească, ascult jazz și
            învăț încet japoneza.
          </p>
          <p>
            După facultate îmi doresc să lucrez într-o echipă mică, unde să pot contribui de la
            design până la deployment. Până atunci, încerc să fac stagii, să particip la hackathoane
            și să împărtășesc ce învăț prin articole pe blogul personal.
          </p>
          <p className="text-muted-foreground italic">
            „Cel mai bun cod este cel pe care îl înțelegi peste șase luni.” — un mentor de-al meu
          </p>
        </div>
      </article>
    </section>
  );
}
