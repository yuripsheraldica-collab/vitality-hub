import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-sage/15">
      <div className="container-x grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Instituto Evolução" className="h-24 w-auto invert brightness-0 opacity-95 mb-4" />
          <p className="text-sm text-white/50 leading-relaxed font-light">
            Centro multidisciplinar de saúde e bem-estar de alto padrão. 100% particular, com hora marcada e sem espera.
          </p>
          <p className="mt-4 text-xs text-white/30">R. João Kuhl Filho, 101 — Limeira, SP</p>
          <p className="mt-2 text-xs text-white/30">Seg a Sex · 07h às 20h<br />Sábado · 08h às 12h</p>
        </div>
        <FooterCol title="O Instituto" links={[
          ["Nossa história", "/instituto"],
          ["A equipe", "/equipe"],
          ["Especialidades", "/especialidades"],
          ["Resultados", "/resultados"],
        ]} />
        <FooterCol title="Conhecimento" links={[
          ["Acadêmico", "/academico"],
          ["News", "/news"],
          ["Intranet", "/intranet"],
          ["Central de Inteligência", "https://evolucao-os.lovable.app"],
        ]} />
        <FooterCol title="Contato" links={[
          ["Centro de Cuidados", "/centro-de-cuidados"],
          ["WhatsApp", "https://wa.me/5519900000000"],
          ["@instituto.evolucao", "https://www.instagram.com/instituto.evolucao/"],
        ]} />
      </div>
      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[11px] tracking-wider text-white/30">© {new Date().getFullYear()} Instituto Evolução — Limeira, SP</span>
        <div className="flex items-center gap-5">
          <Link
            to="/intranet"
            className="text-[11px] tracking-[0.18em] uppercase text-white/40 hover:text-sage transition-colors"
          >
            Intranet
          </Link>
          <a href="https://www.instagram.com/instituto.evolucao/" target="_blank" rel="noopener" className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-sage hover:text-sage transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://wa.me/5519900000000" target="_blank" rel="noopener" className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-sage hover:text-sage transition-colors">
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-base mb-4 text-white">{title}</h4>
      <ul className="space-y-2">
        {links.map(([label, to]) => (
          <li key={label}>
            {to.startsWith("http") ? (
              <a href={to} target="_blank" rel="noopener" className="text-sm font-light text-white/50 hover:text-sage transition-colors">{label}</a>
            ) : (
              <Link to={to} className="text-sm font-light text-white/50 hover:text-sage transition-colors">{label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
