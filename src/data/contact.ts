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
  phone: '21 432 3020',
  phone2: '21 432 4097',
  phoneHref: 'tel:214323020',
  phoneHref2: 'tel:214324097',
  email: 'f.ascensao.nunes@gmail.com',
  topBarHours: 'Seg–Sex: 09h00–20h00',
  mapsQuery:
    'https://maps.google.com/?q=Farmácia+Ascensão+Nunes,+Rua+Anta+da+Agualva+12A,+Agualva-Cacém',
  mapsDirections:
    'https://www.google.com/maps/dir//Farmácia+Ascensão+Nunes,+Rua+Anta+da+Agualva+12A,+2735-579+Agualva-Cacém',
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
    value: `${pharmacyContact.phone} | ${pharmacyContact.phone2}`,
    subvalue: 'Chamada para rede fixa nacional',
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
