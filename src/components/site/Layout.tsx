import { ReactNode } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

export default function Layout({ children, solidNav = false }: { children: ReactNode; solidNav?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav solid={solidNav} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
