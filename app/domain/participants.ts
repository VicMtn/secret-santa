import { type Timestamp } from 'firebase-admin/firestore'

export interface FirestoreParticipantData {
  eventId: string
  memberId: string
  contactChannel: 'whatsapp' | 'email' | 'sms'
  contactValue: string
  personnalPasswordHash: string
  isConfirmed: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface ParticipantModel {
  id: string
  eventId: string
  memberId: string
  contactChannel: 'whatsapp' | 'email' | 'sms'
  contactValue: string
  personnalPasswordHash: string
  isConfirmed: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}
