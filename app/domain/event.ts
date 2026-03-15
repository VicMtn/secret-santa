import { type Timestamp } from 'firebase-admin/firestore'

export interface FirestoreEventData {
  familyId: string
  year: number
  name: string
  budgetMin: number
  budgetMax: number
  status: 'draft' | 'active' | 'locked' | 'drawn'
  createdAt: Timestamp
}

export interface EventModel {
  id: string
  familyId: string
  year: number
  name: string
  budgetMin: number
  budgetMax: number
  status: 'draft' | 'active' | 'locked' | 'drawn'
  createdAt: Timestamp
}
