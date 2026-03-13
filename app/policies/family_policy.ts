import type User from '#models/user'

export default class FamilyPolicy {
  /**
   * Phase 0 placeholder.
   * Fine-grained role checks are implemented in S1.
   */
  canManageFamily(_user: User) {
    return true
  }
}
