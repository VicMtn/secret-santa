import type { HttpContext } from '@adonisjs/core/http'

export default class FamiliesController {
  async create({ inertia }: HttpContext) {
    return inertia.render('families/create' as any, {})
  }

  async store({ response, session }: HttpContext) {
    session.flash('success', 'Phase 0: creation de famille branchée (squelette).')
    return response.redirect().toPath('/dashboards/admin')
  }

  async join({ inertia }: HttpContext) {
    return inertia.render('families/join' as any, {})
  }

  async attachMember({ response, session }: HttpContext) {
    session.flash('success', 'Phase 0: rattachement famille branché (squelette).')
    return response.redirect().toPath('/dashboards/member')
  }
}
