import { makeFirestoreClient } from '#services/firestore_service'

export default abstract class FirestoreBaseRepository {
  protected db = makeFirestoreClient()

  protected familyCollectionPath(familyId: string) {
    return `families/${familyId}`
  }
}
