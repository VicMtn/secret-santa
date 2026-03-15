import { type Timestamp } from 'firebase-admin/firestore'

export interface FirestoreMemberData {
  familyId: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  role: 'manager' | 'participant'
  status: 'active' | 'inactive'
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface MemberModel {
  id: string
  familyId: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  role: 'manager' | 'participant'
  status: 'active' | 'inactive'
  createdAt: Timestamp
  updatedAt: Timestamp
}
