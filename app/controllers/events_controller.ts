import type { HttpContext } from '@adonisjs/core/http'

export default class EventsController {
  async create({ inertia }: HttpContext) {
    return inertia.render('events/create' as any, {})
  }

  async store({ response, session }: HttpContext) {
    session.flash('success', 'Phase 0: creation event branchée (squelette).')
    return response.redirect().toPath('/dashboards/manager')
  }
}
