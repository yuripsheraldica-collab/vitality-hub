import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/instituto", label: "Instituto" },
  { to: "/equipe", label: "Equipe" },
  { to: "/especialidades", label: "Especialidades" },
  { to: "/resultados", label: "Resultados" },
  { to: "/academico", label: "Acadêmico" },
  { to: "/news", label: "News" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur border-b border-border py-3" : "py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center shrink-0" aria-label="Instituto Evolução">
          <img
            src={logo}
            alt="Instituto Evolução"
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-9 mix-blend-multiply" : "h-11 brightness-0 invert"
            }`}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[10px] font-medium tracking-[0.18em] uppercase whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-sage"
                    : scrolled
                      ? "text-muted-foreground hover:text-navy"
                      : "text-white/75 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/centro-de-cuidados"
            className="text-[10px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap px-4 py-2.5 bg-navy text-white hover:bg-sage transition-colors"
          >
            Área do Paciente
          </Link>
        </nav>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-cream border-t border-border">
          <nav className="container-x flex flex-col py-4 gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-xs tracking-[0.18em] uppercase py-2 text-navy/80">
                {l.label}
              </Link>
            ))}
            <Link to="/centro-de-cuidados" onClick={() => setOpen(false)} className="text-xs tracking-[0.2em] uppercase py-3 px-4 bg-navy text-white text-center">
              Área do Paciente
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
