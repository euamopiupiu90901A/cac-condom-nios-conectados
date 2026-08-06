import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/cac-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <div className="inline-flex rounded-md bg-background px-4 py-3">
            <img
              src={logo.url}
              alt="Logotipo da C.A.C. Consultoria e Apoio a Condomínios"
              width={220}
              height={64}
              loading="lazy"
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-80">
            Administração e assessoria condominial em Maringá-PR e região há +38 anos, com cerca de 69
            condomínios administrados.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.24em]">Contato</h2>
          <ul className="mt-5 space-y-3 text-sm opacity-90">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>Av. Brasil, 4312, 6º andar, sala 611 e 612, Centro – Maringá-PR</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                <a href="tel:+554430310406" className="hover:underline">
                  (44) 3031-0406
                </a>{" "}
                ·{" "}
                <a href="tel:+554491739741" className="hover:underline">
                  (44) 9173-9741
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href="mailto:contato@caccondominios.com.br" className="hover:underline">
                contato@caccondominios.com.br
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.24em]">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm opacity-90">
            <li>
              <Link to="/" className="hover:underline">
                Início
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:underline">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:underline">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs uppercase tracking-[0.16em] opacity-70">
          © {new Date().getFullYear()} C.A.C. Consultoria e Apoio a Condomínios
        </p>
      </div>
    </footer>
  );
}
