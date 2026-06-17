import { useState } from "react";
import Layout from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const INTRANET_URL = "https://evolucao-financeiro-central.lovable.app";

export default function Intranet() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (user === "admin" && pass === "IEadmin2026!") {
      window.location.href = INTRANET_URL;
    } else {
      setError("Usuário ou senha inválidos.");
    }
  }

  return (
    <Layout>
      <section className="container-x py-24 min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-md border border-sage/20 bg-white p-10">
          <h1 className="font-display text-3xl text-navy mb-2">Intranet</h1>
          <p className="text-sm text-navy/60 mb-8 font-light">Acesso restrito à equipe do Instituto Evolução.</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="user">Usuário</Label>
              <Input id="user" value={user} onChange={(e) => setUser(e.target.value)} autoComplete="username" required />
            </div>
            <div>
              <Label htmlFor="pass">Senha</Label>
              <Input id="pass" type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" required />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" className="w-full">Entrar</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}