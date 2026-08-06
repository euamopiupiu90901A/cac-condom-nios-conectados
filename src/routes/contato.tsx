import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Administradora de Condomínios Maringá — C.A.C." },
      {
        name: "description",
        content:
          "Fale com a C.A.C., administradora de condomínios em Maringá-PR. Av. Brasil, 4312, Centro. Telefone (44) 3031-0406 e WhatsApp (44) 9 9700-5146.",
      },
      { property: "og:title", content: "Contato | Administradora de Condomínios Maringá — C.A.C." },
      {
        property: "og:description",
        content: "Solicite uma proposta de assessoria condominial em Maringá-PR.",
      },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  condominio: z.string().trim().min(2, "Informe o condomínio").max(120),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  mensagem: z.string().trim().min(5, "Escreva sua mensagem").max(1000),
});

import { WHATSAPP_URL } from "@/lib/whatsapp";

function Contato() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    form.reset();
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
  }

  const field =
    "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary";
  const label = "text-xs font-bold uppercase tracking-[0.14em] text-primary";

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="section-label">Contato</p>
          <h1 className="heading-xl mt-5 max-w-2xl text-4xl md:text-5xl">
            Solicite uma proposta
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary">
            Conte um pouco sobre o seu condomínio. Nossa equipe responde com uma proposta sob medida
            para a sua realidade.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={onSubmit} noValidate className="rounded-lg border border-border p-7 shadow-card">
          <h2 className="heading-xl text-xl">Envie sua mensagem</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="nome">
                Nome
              </label>
              <input id="nome" name="nome" className={field} maxLength={100} />
              {errors['nome'] && <p className="mt-2 text-xs text-destructive">{errors['nome']}</p>}
            </div>
            <div>
              <label className={label} htmlFor="condominio">
                Condomínio
              </label>
              <input id="condominio" name="condominio" className={field} maxLength={120} />
              {errors['condominio'] && (
                <p className="mt-2 text-xs text-destructive">{errors['condominio']}</p>
              )}
            </div>
            <div>
              <label className={label} htmlFor="telefone">
                Telefone
              </label>
              <input id="telefone" name="telefone" type="tel" className={field} maxLength={20} />
              {errors['telefone'] && <p className="mt-2 text-xs text-destructive">{errors['telefone']}</p>}
            </div>
            <div>
              <label className={label} htmlFor="email">
                E-mail
              </label>
              <input id="email" name="email" type="email" className={field} maxLength={255} />
              {errors['email'] && <p className="mt-2 text-xs text-destructive">{errors['email']}</p>}
            </div>
          </div>

          <div className="mt-6">
            <label className={label} htmlFor="mensagem">
              Mensagem
            </label>
            <textarea id="mensagem" name="mensagem" rows={5} className={field} maxLength={1000} />
            {errors['mensagem'] && <p className="mt-2 text-xs text-destructive">{errors['mensagem']}</p>}
          </div>

          <button type="submit" className="btn-navy mt-8 w-full sm:w-auto">
            Enviar mensagem
          </button>
        </form>

        <div className="bg-cream rounded-lg p-8">
          <h2 className="heading-xl text-xl">Dados de contato</h2>
          <ul className="mt-8 space-y-6 text-sm text-secondary">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                Av. Brasil, 4312, 6º andar, sala 611 e 612
                <br />
                Centro – Maringá-PR
              </address>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="leading-relaxed">
                <a href="tel:+554430310406" className="hover:text-primary">
                  (44) 3031-0406
                </a>
                <br />
                <a href="tel:+554491739741" className="hover:text-primary">
                  (44) 9173-9741
                </a>
              </span>
            </li>
            <li className="flex gap-4">
              <MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                WhatsApp (44) 9 9700-5146
              </a>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href="mailto:contato@caccondominios.com.br" className="hover:text-primary">
                contato@caccondominios.com.br
              </a>
            </li>
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy mt-10 w-full"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
