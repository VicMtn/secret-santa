import type User from '#models/user'

export default class EventPolicy {
  /**
   * Phase 0 placeholder.
   * Manager/member permissions are hardened in S1/S2.
   */
  canManageEvent(_user: User) {
    return true
  }
}
