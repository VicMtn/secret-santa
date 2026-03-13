import env from '#start/env'

const useEmulator = env.get('FIREBASE_USE_EMULATOR') ?? false

const firestoreConfig = {
  projectId: env.get('FIREBASE_PROJECT_ID'),
  clientEmail: env.get('FIREBASE_CLIENT_EMAIL'),
  privateKey: env.get('FIREBASE_PRIVATE_KEY'),
  useEmulator,
  emulatorHost: env.get('FIRESTORE_EMULATOR_HOST'),
}

export default firestoreConfig
