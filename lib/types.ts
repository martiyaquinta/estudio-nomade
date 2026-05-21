export interface BankAccount {
  cbu?: string;
  alias?: string;
  titular?: string;
  banco?: string;
}

export interface Invitation {
  id: string;
  templateId: number;
  eventType: string;
  title: string;
  names: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapUrl?: string; // URL de Google Maps embed
  message: string;
  ceremonyTime?: string;
  receptionTime?: string;
  rsvpEnabled: boolean;
  galleryEnabled: boolean;
  countdownEnabled: boolean;
  photoUrls?: string[]; // URLs de fotos para el carrusel
  bankAccount?: BankAccount; // Datos bancarios para regalos
  dressCode?: string; // Código de vestimenta
  hashtag?: string; // Hashtag para fotos en redes sociales
  giftMessage?: string; // Mensaje personalizado para sección de regalos
  createdAt: string;
  updatedAt: string;
}

export interface Template {
  id: number;
  name: string;
  category: string;
  color: string;
}
