import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Vote,
  FileText,
  BarChart3,
  Gauge,
  CalendarCheck,
  Megaphone,
  FolderOpen,
} from "lucide-react";

import heroImg from "@/assets/hero-condominio.jpg";
import appImg from "@/assets/hand-phone-app.svg";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { depoimentosHome } from "@/lib/depoimentos-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Administradora de Condomínios em Maringá | C.A.C." },
      {
        name: "description",
        content:
          "Gestão confiável para o seu condomínio. Administradora de condomínios em Maringá-PR e região com +38 anos de atuação e app Área do Condômino.",
      },
      { property: "og:title", content: "Administradora de Condomínios em Maringá | C.A.C." },
      {
        property: "og:description",
        content:
          "Assessoria condominial em Maringá-PR: prestação de contas digital, assembleia virtual e atendimento personalizado.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const recursos = [
  { icon: Vote, title: "Assembleia Virtual", desc: "Votações on-line seguras e com registro completo." },
  { icon: FileText, title: "2ª via de boletos", desc: "Emissão imediata pelo app, sem burocracia." },
  { icon: BarChart3, title: "Prestação de Contas Digital", desc: "Relatórios claros e disponíveis a qualquer hora." },
  { icon: Gauge, title: "Controle de Consumos", desc: "Acompanhamento de água, gás e energia por unidade." },
  { icon: CalendarCheck, title: "Reserva de Áreas Comuns", desc: "Agenda transparente do salão, churrasqueira e mais." },
  { icon: Megaphone, title: "Comunicados", desc: "Avisos enviados por e-mail e notificação no app." },
  { icon: FolderOpen, title: "Consulta a Atas e Documentos", desc: "Acervo digital do condomínio sempre acessível." },
];

function Index() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="section-label">Consultoria e Apoio a Condomínios · Maringá-PR</p>
            <h1 className="heading-xl mt-5 text-4xl md:text-5xl">
              Gestão confiável para o seu condomínio
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary">
              A C.A.C. cuida da burocracia para que o síndico possa focar no que realmente importa:
              tornar o dia a dia dos condôminos mais prático. Trabalhamos com estratégias sob medida,
              análise de dados e práticas modernas de gestão condominial.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-navy">
                Solicite uma Proposta
              </a>
              <Link to="/servicos" className="btn-outline-navy">
                Ver serviços
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <dt className="section-label">Experiência</dt>
                <dd className="mt-1 text-2xl font-extrabold text-primary">+38 anos</dd>
              </div>
              <div>
                <dt className="section-label">Condomínios atendidos</dt>
                <dd className="mt-1 text-2xl font-extrabold text-primary">+70 condomínios</dd>
              </div>
              <div>
                <dt className="section-label">Unidades Atendidas</dt>
                <dd className="mt-1 text-2xl font-extrabold text-primary">4.489</dd>
              </div>
              <div>
                <dt className="section-label">Atuação</dt>
                <dd className="mt-1 text-2xl font-extrabold text-primary">Maringá-PR e região</dd>
              </div>
            </dl>
          </div>

          <img
            src={heroImg}
            alt="Fachada de edifício residencial administrado em Maringá ao anoitecer"
            width={1600}
            height={1000}
            className="h-full w-full rounded-lg object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="section-label">App Área do Condômino</p>
          <h2 className="heading-xl mt-4 text-3xl md:text-4xl">
            Tudo o que seu condomínio precisa na palma da mão
          </h2>
          <p className="mt-5 text-base leading-relaxed text-secondary">
            O aplicativo Área do Condômino reúne informações, documentos e serviços do condomínio em
            um só lugar, com acesso para síndicos, conselheiros e moradores.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          <ul className="grid gap-5 sm:grid-cols-2">
            {recursos.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <Icon className="size-6 text-secondary" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">{desc}</p>
              </li>
            ))}
          </ul>

          <div className="relative rounded-lg bg-cream p-8">
            <img
              src={appImg}
              alt="Ilustração de uma mão segurando um celular com o aplicativo Área do Condômino"
              width={1200}
              height={1200}
              loading="lazy"
              className="mx-auto w-full max-w-xs rounded-lg object-cover"
            />
            <h3 className="absolute left-8 top-8 text-2xl font-extrabold uppercase leading-tight text-primary">
              <span className="block tracking-[0.55em]">Baixe o</span>
              <span className="block tracking-[0.14em]">aplicativo</span>
            </h3>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.condor.superlogica&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy"
              >
                Baixar para Android
              </a>
              <a
                href="https://apps.apple.com/br/app/condom%C3%ADnio-%C3%A1rea-do-cond%C3%B4mino/id1160849001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-navy"
              >
                Baixar para iOS
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="heading-xl text-2xl md:text-3xl">Feedback de moradores e síndicos</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary">
            Esta seção apresenta depoimentos de clientes, evidenciando suas experiências e o grau
            de satisfação com nossos serviços.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {depoimentosHome.map((d) => (
              <li
                key={d.autor}
                className="flex flex-col rounded-lg border border-border bg-card p-7 shadow-card"
              >
                <img
                  src={d.img}
                  alt={d.alt}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-16 shrink-0 rounded-full object-cover"
                />
                <blockquote className="mt-5 text-sm leading-relaxed text-secondary">
                  "{d.texto}"
                </blockquote>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {d.autor}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-2xl font-extrabold uppercase tracking-[0.02em] md:text-3xl">
            Pronto para uma gestão condominial mais transparente?
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-background px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary transition-opacity hover:opacity-90"
          >
            Solicite uma Proposta
          </a>
        </div>
      </section>
    </>
  );
}
