import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919XXXXXXXXX";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20am%20interested%20in%20ordering%20charcoal%20from%20Sri%20Balaji%20Premium%20Charcoal.`;

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-elevated transition-smooth hover:scale-105 hover:shadow-[0_0_24px_rgba(234,88,12,0.5)] active:scale-95 font-display font-bold text-sm"
    >
      <MessageCircle className="size-5 shrink-0" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
