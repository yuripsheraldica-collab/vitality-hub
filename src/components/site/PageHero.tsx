export default function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <section className="bg-navy text-white py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 79px,hsl(var(--sage)) 79px,hsl(var(--sage)) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,hsl(var(--sage)) 79px,hsl(var(--sage)) 80px)"
      }} />
      <div className="container-x relative">
        <span className="eyebrow !text-sage-light">{eyebrow}</span>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-white/50 leading-relaxed text-base font-light">{subtitle}</p>}
      </div>
    </section>
  );
}
