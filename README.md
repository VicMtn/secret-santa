# Secret Santa - Base AdonisJS + Inertia

Socle de depart pour une application Secret Santa multi-famille.

## Stack

- AdonisJS v7
- Inertia + Vue 3
- Tailwind / CSS Inertia starter
- Firestore (via `firebase-admin`)
- Deploiement cible: Cloud Run + Firestore

## Convention d'architecture

- `app/controllers`: HTTP uniquement (validation + reponse)
- `app/services`: regles metier
- `app/repositories`: acces donnees (Firestore)
- `app/validators`: schemas VineJS
- `app/policies`: autorisations par role

## Phase 0 livree

- Routes skeleton onboarding famille et dashboards roles:
  - `families.create`, `families.join`
  - `events.create`
  - `dashboards.admin`, `dashboards.manager`, `dashboards.member`
- Pages Inertia minimales correspondantes
- Configuration Firestore de base:
  - `config/firestore.ts`
  - `app/services/firestore_service.ts`
  - `app/repositories/firestore_base_repository.ts`

## Variables d'environnement (Firestore)

Completer `.env` depuis `.env.example`:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `FIREBASE_USE_EMULATOR`
- `FIRESTORE_EMULATOR_HOST`

### Mode local recommande

- Utiliser l'emulateur Firestore avec:
  - `FIREBASE_USE_EMULATOR=true`
  - `FIRESTORE_EMULATOR_HOST=127.0.0.1:8080`

## Lancer le projet

```bash
npm install
npm run dev
```

## Prochaine etape (S1)

- Creation/rejoindre famille en persistance Firestore
- Hash des secrets famille
- Policies rolees `admin/manager/member`
