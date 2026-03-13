import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardsController {
  async admin({ inertia }: HttpContext) {
    return inertia.render('dashboards/admin' as any, {})
  }

  async manager({ inertia }: HttpContext) {
    return inertia.render('dashboards/manager' as any, {})
  }

  async member({ inertia }: HttpContext) {
    return inertia.render('dashboards/member' as any, {})
  }
}
