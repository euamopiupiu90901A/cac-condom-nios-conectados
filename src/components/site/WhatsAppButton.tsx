const WHATSAPP_URL =
  "https://wa.me/5544997005146?text=" +
  encodeURIComponent("Olá! Gostaria de solicitar uma proposta para meu condomínio.");

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a C.A.C. pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-9" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.47.13-.62.15-.15.5-.52.62-.7.12-.17.06-.35 0-.5-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.44s1.06 2.82 1.21 3.02c.15.2 2.06 3.28 5.01 4.47 2.95 1.18 2.95.79 3.48.74.53-.05 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35zM12.02 21.5h-.01a9.44 9.44 0 0 1-4.8-1.32l-.34-.2-3.56.93.95-3.48-.22-.36a9.42 9.42 0 0 1-1.44-5.03c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 6.68 2.77 9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.45-9.47 9.45zM20.4 3.6A11.35 11.35 0 0 0 12.02.25C5.76.25.67 5.34.67 11.6c0 2 .52 3.95 1.52 5.67L.5 23.75l6.63-1.74a11.3 11.3 0 0 0 5.39 1.37h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.03z" />
      </svg>
    </a>
  );
}
