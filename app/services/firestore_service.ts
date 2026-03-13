import firestoreConfig from '#config/firestore'
import { applicationDefault, cert, getApp, getApps, initializeApp } from 'firebase-admin/app'
import type { App } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { Firestore } from 'firebase-admin/firestore'

let firebaseApp: App | null = null
let firestoreClient: Firestore | null = null

function ensureFirebaseApp() {
  if (firebaseApp) {
    return firebaseApp
  }

  if (getApps().length > 0) {
    firebaseApp = getApp()
    return firebaseApp
  }

  const privateKey = firestoreConfig.privateKey?.replace(/\\n/g, '\n')

  if (
    firestoreConfig.projectId &&
    firestoreConfig.clientEmail &&
    privateKey &&
    !firestoreConfig.useEmulator
  ) {
    firebaseApp = initializeApp({
      credential: cert({
        projectId: firestoreConfig.projectId,
        clientEmail: firestoreConfig.clientEmail,
        privateKey,
      }),
      projectId: firestoreConfig.projectId,
    })
    return firebaseApp
  }

  firebaseApp = initializeApp({
    credential: applicationDefault(),
    projectId: firestoreConfig.projectId,
  })

  return firebaseApp
}

export function makeFirestoreClient() {
  if (firestoreConfig.useEmulator && firestoreConfig.emulatorHost) {
    process.env.FIRESTORE_EMULATOR_HOST = firestoreConfig.emulatorHost
  }

  if (firestoreClient) {
    return firestoreClient
  }

  const app = ensureFirebaseApp()
  firestoreClient = getFirestore(app)
  return firestoreClient
}
