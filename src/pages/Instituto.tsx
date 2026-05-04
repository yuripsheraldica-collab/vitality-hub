import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import recepcao from "@/assets/recepcao.jpg";
import fachada from "@/assets/fachada.jpg";

export default function Instituto() {
  return (
    <Layout>
      <PageHero eyebrow="O Instituto" title={<>Criado para ser <em className="text-sage-light italic font-light">diferente</em><br />desde o primeiro dia.</>} subtitle="Nascemos de uma insatisfação genuína com o modelo tradicional de saúde — e nos dedicamos a reinventar cada detalhe da experiência de cuidar." />

      <section className="py-24 bg-cream">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <img src={fachada} alt="Fachada do Instituto Evolução" className="w-full aspect-[4/3] object-cover" />
          <div>
            <h2 className="section-heading">Nossa <em>história</em></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              <strong className="text-navy font-medium">O Instituto Evolução nasceu de uma insatisfação genuína</strong> com o modelo tradicional de saúde. Filas que desrespeitam, consultas cronometradas, ambientes que intimidam.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Reunimos profissionais que compartilham a mesma visão: que <strong className="text-navy font-medium">saúde de verdade exige tempo, escuta e integração</strong>. Cada especialidade conversa com as outras. Cada paciente tem um olhar completo sobre si.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-x">
          <h2 className="section-heading text-center">Nossa <em>linha do tempo</em></h2>
          <div className="mt-16 grid md:grid-cols-4 gap-px bg-border">
            {[["2018","Fundação","Abrimos as portas com a missão de redefinir o padrão de saúde em Limeira."],
              ["2020","Expansão multidisciplinar","Integração de fisioterapia, pilates e academia ao núcleo médico."],
              ["2022","Novo espaço","Inauguração das novas instalações — conforto e privacidade real."],
              ["Hoje","Referência","Centenas de histórias de transformação na região."]].map(([y,t,d]) => (
              <div key={y} className="bg-white p-8">
                <div className="font-display text-3xl text-sage">{y}</div>
                <h4 className="mt-3 font-medium text-navy">{t}</h4>
                <p className="mt-2 text-sm text-muted-foreground font-light leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-heading heading-light">Nosso <em>manifesto</em></h2>
            <blockquote className="mt-8 border-l-2 border-sage pl-6 font-display italic text-2xl text-white/85 leading-relaxed">
              "Você não está aqui para ser atendido. Está aqui para evoluir."
            </blockquote>
            <p className="mt-8 text-white/55 leading-relaxed">
              Somos particular por filosofia. Acreditamos que cuidado verdadeiro não cabe nas restrições de um plano. Aqui, quem define o ritmo é você.
            </p>
          </div>
          <img src={recepcao} alt="Recepção do Instituto" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>
    </Layout>
  );
}
