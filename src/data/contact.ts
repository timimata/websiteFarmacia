export type ContactType = 'location' | 'phone' | 'email'

export interface ContactInfoItem {
  type: ContactType
  label: string
  value: string
  subvalue: string
}

export interface OpeningHour {
  day: string
  time: string
}

export const pharmacyContact = {
  name: 'Farmácia Ascensão Nunes',
  addressLine1: 'Rua Anta da Agualva 12A',
  addressLine2: '2735-579 Agualva-Cacém',
  city: 'Sintra, Portugal',
  phone: '963 013 294',
  phoneHref: 'tel:963013294',
  email: 'f.ascensao.nunes@gmail.com',
  topBarHours: 'Seg–Sex: 09h00–20h00',
  mapsQuery:
    'https://maps.google.com/?q=Rua+Anta+da+Agualva+12A+Agualva-Cacém',
  mapsDirections:
    'https://www.google.com/maps/dir//Rua+Anta+da+Agualva+12A,+2735-579+Agualva-Cacém',
}

export const contactInfo: ContactInfoItem[] = [
  {
    type: 'location',
    label: 'Localização',
    value: pharmacyContact.addressLine1,
    subvalue: pharmacyContact.addressLine2,
  },
  {
    type: 'phone',
    label: 'Telefone',
    value: pharmacyContact.phone,
    subvalue: 'Chamada para rede móvel nacional',
  },
  {
    type: 'email',
    label: 'Email',
    value: pharmacyContact.email,
    subvalue: 'Resposta rápida garantida',
  },
]

export const openingHours: OpeningHour[] = [
  { day: 'Segunda a Sexta', time: '09h00 – 20h00' },
  { day: 'Sábado', time: '09h00 – 19h00' },
  { day: 'Domingo e Feriados', time: '10h00 – 13h00 | 14h00 – 19h00' },
]
