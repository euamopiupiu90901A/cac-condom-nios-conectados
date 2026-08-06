import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/cac-logo.png";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

const BOLETO_URL =
  "https://caccentroapoioa.superlogica.net/clients/areadocondomino/cobranca/index";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-5 pt-5 pb-2">
        <Link to="/" className="flex items-center" aria-label="C.A.C. — página inicial">
          <img
            src={logo}
            alt="Logotipo da C.A.C. Consultoria e Apoio a Condomínios"
            width={811}
            height={233}
            className="h-16 w-auto shrink-0 md:h-20"
          />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="absolute right-5 rounded-md border border-border p-2 text-primary md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <nav
        aria-label="Navegação principal"
        className="mx-auto hidden max-w-6xl flex-wrap items-center justify-start gap-x-8 gap-y-3 px-5 pt-2 pb-3 md:flex"
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: l.to === "/" }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={BOLETO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-navy !px-5 !py-2.5"
        >
          2ª via de boleto
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-navy !px-6 !py-3"
        >
          Solicite uma Proposta
        </a>
      </nav>

      {open && (
        <nav aria-label="Navegação mobile" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={BOLETO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
              >
                2ª via de boleto
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
