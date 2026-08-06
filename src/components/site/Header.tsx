import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/cac-logo.png.asset.json";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between">
        <Link to="/" className="flex min-w-0 items-center" aria-label="C.A.C. — página inicial">
          <img
            src={logo.url}
            alt="Logotipo da C.A.C. Consultoria e Apoio a Condomínios"
            width={220}
            height={64}
            className="h-9 w-auto shrink-0 md:h-11"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:flex md:items-center md:gap-9">
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
          <Link to="/contato" className="btn-navy !px-6 !py-3">
            Solicite uma Proposta
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 justify-self-end rounded-md border border-border p-2 text-primary md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

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
          </ul>
        </nav>
      )}
    </header>
  );
}
