import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "@/lib/contact";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  nome: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(30),
  assunto: z.string().trim().min(2).max(120),
  mensagem: z.string().trim().min(5, "Mensagem muito curta").max(2000),
});

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "Informações gerais", mensagem: "" });
  const set = (k: string) => (e: any) => setForm({ ...form, [k]: e.target.value });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast({ title: "Verifique os campos", description: first ?? "Dados inválidos" });
      return;
    }
    const subject = encodeURIComponent(`[Site] ${parsed.data.assunto} — ${parsed.data.nome}`);
    const body = encodeURIComponent(
      `Nome: ${parsed.data.nome}\nE-mail: ${parsed.data.email}\nTelefone: ${parsed.data.telefone}\n\nMensagem:\n${parsed.data.mensagem}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast({ title: "Abrindo seu e-mail…", description: "Sua mensagem será enviada para " + CONTACT_EMAIL });
  }

  return (
    <Layout>
      <PageHero
        eyebrow="Contato"
        title={<>Vamos <em className="text-sage-light italic font-light">conversar</em></>}
        subtitle="Tire dúvidas, agende sua avaliação ou converse com a nossa equipe. Respondemos em até 2 horas úteis."
      />
      <section className="py-20 bg-cream">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <div className="space-y-8">
            <div>
              <h2 className="section-heading">Fale com o <em>Instituto</em></h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Escolha o canal que preferir. Nossa equipe está pronta para te receber com a mesma atenção do nosso atendimento clínico.</p>
            </div>
            <div className="space-y-5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="flex items-center gap-4 p-5 bg-white border border-border hover:border-sage transition-colors">
                <MessageCircle className="w-5 h-5 text-sage" />
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-sage">WhatsApp</div>
                  <div className="text-navy font-medium">+55 (19) 99161-2513</div>
                </div>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 p-5 bg-white border border-border hover:border-sage transition-colors">
                <Mail className="w-5 h-5 text-sage" />
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-sage">E-mail</div>
                  <div className="text-navy font-medium">{CONTACT_EMAIL}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 bg-white border border-border">
                <MapPin className="w-5 h-5 text-sage" />
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-sage">Endereço</div>
                  <div className="text-navy font-medium">R. João Kuhl Filho, 101 — Limeira, SP</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white border border-border">
                <Phone className="w-5 h-5 text-sage" />
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-sage">Horário</div>
                  <div className="text-navy font-medium">Seg a Sáb · 08h às 20h</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white border border-border p-10 space-y-5">
            <h3 className="font-display text-2xl text-navy">Envie sua mensagem</h3>
            {[
              ["nome", "Nome completo", "text"],
              ["email", "E-mail", "email"],
              ["telefone", "Telefone / WhatsApp", "tel"],
              ["assunto", "Assunto", "text"],
            ].map(([k, l, t]) => (
              <div key={k}>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{l}</label>
                <input required type={t} value={(form as any)[k]} onChange={set(k)} className="w-full bg-transparent border-b border-border py-3 text-navy outline-none focus:border-sage transition-colors" />
              </div>
            ))}
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Mensagem</label>
              <textarea required rows={5} value={form.mensagem} onChange={set("mensagem")} className="w-full bg-transparent border border-border p-3 text-navy outline-none focus:border-sage transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full btn-primary">Enviar mensagem →</button>
            <p className="text-xs text-muted-foreground">Ao enviar, sua mensagem será encaminhada para {CONTACT_EMAIL}.</p>
          </form>
        </div>
      </section>
    </Layout>
  );
}
