/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', {}).as('home')

router
  .group(() => {
    router
      .get('signup', [() => import('#controllers/new_account_controller'), 'create'])
      .as('new_account.create')
    router
      .post('signup', [() => import('#controllers/new_account_controller'), 'store'])
      .as('new_account.store')

    router
      .get('login', [() => import('#controllers/session_controller'), 'create'])
      .as('session.create')
    router
      .post('login', [() => import('#controllers/session_controller'), 'store'])
      .as('session.store')
  })
  .use(middleware.guest())

router
  .group(() => {
    router
      .post('logout', [() => import('#controllers/session_controller'), 'destroy'])
      .as('session.destroy')

    // Phase 0 skeleton routes for Secret Santa roles and onboarding
    router
      .get('families/create', [() => import('#controllers/families_controller'), 'create'])
      .as('families.create')
    router
      .post('families', [() => import('#controllers/families_controller'), 'store'])
      .as('families.store')
    router
      .get('families/join', [() => import('#controllers/families_controller'), 'join'])
      .as('families.join')
    router
      .post('families/join', [() => import('#controllers/families_controller'), 'attachMember'])
      .as('families.attach_member')

    router
      .get('events/create', [() => import('#controllers/events_controller'), 'create'])
      .as('events.create')
    router
      .post('events', [() => import('#controllers/events_controller'), 'store'])
      .as('events.store')

    router
      .get('dashboards/admin', [() => import('#controllers/dashboards_controller'), 'admin'])
      .as('dashboards.admin')
    router
      .get('dashboards/manager', [() => import('#controllers/dashboards_controller'), 'manager'])
      .as('dashboards.manager')
    router
      .get('dashboards/member', [() => import('#controllers/dashboards_controller'), 'member'])
      .as('dashboards.member')
  })
  .use(middleware.auth())
