import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ClipboardList,
  Users,
  MessageSquare,
  Receipt,
  Handshake,
  Landmark,
  BookOpenCheck,
  ScrollText,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de Administração Condominial em Maringá-PR | C.A.C." },
      {
        name: "description",
        content:
          "Serviços da administradora de condomínios em Maringá: prestação de contas, folha de pagamento, boletos, cobrança, assembleias, consultoria e implantação.",
      },
      { property: "og:title", content: "Serviços de Administração Condominial em Maringá-PR | C.A.C." },
      {
        property: "og:description",
        content:
          "Administrativo, gestão de pessoal, controle financeiro, suporte em assembleias e serviços extras de consultoria e implantação.",
      },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const prestados = [
  {
    icon: ClipboardList,
    title: "Administrativo",
    desc: "Prestações de contas mensais físicas e digitais, com organização documental completa do condomínio.",
  },
  {
    icon: Users,
    title: "Gestão Pessoal",
    desc: "Folha de pagamento dos funcionários e cumprimento das obrigações trabalhistas e acessórias.",
  },
  {
    icon: MessageSquare,
    title: "Canal de Contato",
    desc: "Notificações e comunicados enviados por e-mail e pelo aplicativo Área do Condômino.",
  },
  {
    icon: Receipt,
    title: "Controle",
    desc: "Emissão de boletos, cobrança, acompanhamento da inadimplência e cálculo de rateio.",
  },
  {
    icon: Handshake,
    title: "Suporte",
    desc: "Participação em assembleias ordinárias e extraordinárias e elaboração das respectivas atas.",
  },
  {
    icon: Landmark,
    title: "Gestão de Impostos",
    desc: "Controle de impostos e emissão das guias para pagamentos.",
  },
];

const extras = [
  {
    icon: BookOpenCheck,
    title: "Consultoria",
    desc: "Interpretação de normativas legais e orientação preventiva ao síndico na tomada de decisão.",
  },
  {
    icon: ScrollText,
    title: "Assessoria",
    desc: "Elaboração e atualização de regimento interno e convenção do condomínio.",
  },
  {
    icon: Building2,
    title: "Implantação",
    desc: "Apoio na estruturação do condomínio recém-entregue pela construtora, do zero à rotina.",
  },
];

function Servicos() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="section-label">Serviços</p>
          <h1 className="heading-xl mt-5 max-w-2xl text-4xl md:text-5xl">
            Assessoria condominial completa
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary">
            Da rotina administrativa às demandas jurídicas e financeiras, a C.A.C. assume a operação
            do condomínio com processos claros e tecnologia de apoio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="heading-xl text-2xl md:text-3xl">Serviços prestados</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {prestados.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="rounded-lg border border-border bg-card p-7 shadow-card">
              <Icon className="size-6 text-secondary" aria-hidden="true" />
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="heading-xl text-2xl md:text-3xl">Serviços extras</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {extras.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="rounded-lg border border-border bg-card p-7 shadow-card">
                <Icon className="size-6 text-secondary" aria-hidden="true" />
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-primary">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary">{desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <Link to="/contato" className="btn-navy">
              Solicite uma Proposta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
