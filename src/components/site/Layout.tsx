import { ReactNode } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}
