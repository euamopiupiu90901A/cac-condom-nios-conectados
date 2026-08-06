import { createFileRoute, Link } from "@tanstack/react-router";

import equipeImg from "@/assets/sobre-equipe.jpg";
import dep1 from "@/assets/depoimento-1.jpg";
import dep2 from "@/assets/depoimento-2.jpg";
import dep3 from "@/assets/depoimento-3.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a C.A.C. | Assessoria Condominial Maringá-PR" },
      {
        name: "description",
        content:
          "Quase 40 anos de mercado em administração de condomínios em Maringá-PR: transparência, tecnologia e atendimento personalizado a síndicos e condôminos.",
      },
      { property: "og:title", content: "Sobre a C.A.C. | Assessoria Condominial Maringá-PR" },
      {
        property: "og:description",
        content:
          "História, missão e depoimentos de quem confia na administradora de condomínios C.A.C. em Maringá.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

const depoimentos = [
  {
    img: dep1,
    alt: "Ilustração de uma síndica satisfeita com a gestão do condomínio",
    texto:
      "Desde que contratamos a administradora, a gestão do nosso condomínio ficou muito mais eficiente. Eles cuidam de tudo com profissionalismo e transparência, e nossa equipe se sente totalmente apoiada.",
    autor: "Maria S., síndica",
  },
  {
    img: dep2,
    alt: "Ilustração de um condômino aprovando a organização do condomínio",
    texto:
      "Antes, gerenciar o condomínio era estressante. Com a administradora, tudo ficou mais organizado, transparente e eficiente.",
    autor: "Carlos M., condômino",
  },
  {
    img: dep3,
    alt: "Ilustração de uma moradora elogiando o atendimento da administradora",
    texto:
      "O trabalho da administradora é impecável! As assembleias são organizadas, as finanças transparentes e qualquer problema é resolvido com agilidade.",
    autor: "Ana P., moradora",
  },
];

function Sobre() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="section-label">Sobre nós</p>
          <h1 className="heading-xl mt-5 max-w-2xl text-4xl md:text-5xl">
            Quase 40 anos cuidando de condomínios em Maringá
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="heading-xl text-2xl md:text-3xl">Nossa história</h2>
          <p className="mt-6 text-base leading-relaxed text-secondary">
            A C.A.C. — Consultoria e Apoio a Condomínios nasceu em Maringá e construiu, ao longo de
            quase quatro décadas, uma trajetória sólida na administração condominial. Hoje somos
            responsáveis por uma carteira de cerca de 69 condomínios, entre residenciais e
            comerciais, atendidos por uma equipe multidisciplinar.
          </p>
          <h2 className="heading-xl mt-12 text-2xl md:text-3xl">Missão</h2>
          <p className="mt-6 text-base leading-relaxed text-secondary">
            Levar transparência e tecnologia para a gestão condominial, oferecendo informação clara,
            contas auditáveis e ferramentas digitais que aproximam síndicos, conselhos e moradores.
          </p>
          <h2 className="heading-xl mt-12 text-2xl md:text-3xl">Nosso diferencial</h2>
          <p className="mt-6 text-base leading-relaxed text-secondary">
            Atendimento personalizado: cada condomínio conta com acompanhamento próximo, respostas
            rápidas e estratégias desenhadas para a sua realidade — nunca soluções genéricas.
          </p>
        </div>

        <img
          src={equipeImg}
          alt="Equipe da C.A.C. reunida analisando documentos de prestação de contas"
          width={1400}
          height={900}
          loading="lazy"
          className="w-full rounded-lg object-cover shadow-soft"
        />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="heading-xl text-2xl md:text-3xl">Depoimentos</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d) => (
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
                  “{d.texto}”
                </blockquote>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {d.autor}
                </p>
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
