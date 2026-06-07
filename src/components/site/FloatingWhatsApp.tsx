import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/contact";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle className="w-7 h-7" strokeWidth={2} fill="currentColor" />
    </a>
  );
}