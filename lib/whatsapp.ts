const DEFAULT_PHONE_NUMBER = "50369842090";

export function buildWhatsAppLink(message: string, phoneNumber: string = DEFAULT_PHONE_NUMBER) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
