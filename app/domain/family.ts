import { type Timestamp } from 'firebase-admin/firestore'

export interface FirestoreFamilyData {
  name: string
  membersIds: string[]
  familyPasswordHash: string
  createdAt: Timestamp
  isActive: boolean
}

export interface FamilyModel {
  id: string
  name: string
  membersIds: string[]
  familyPasswordHash: string
  createdAt: Timestamp
  isActive: boolean
  updatedAt: Timestamp
}
