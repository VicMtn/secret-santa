<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Homepage" />

  <section class="hero">
    <h1>Secret Santa - Phase 0</h1>
    <p>
      Socle AdonisJS + Inertia initialise pour demarrer le flux multi-famille.
    </p>
  </section>

  <nav class="cards">
    <a href="/families/create">
      <h3>Creer une famille &nbsp;›</h3>
      <p>Point d entree admin famille</p>
    </a>
    <a href="/families/join">
      <h3>Rejoindre une famille &nbsp;›</h3>
      <p>Point d entree participant</p>
    </a>
    <a href="/dashboards/manager">
      <h3>Dashboard responsable &nbsp;›</h3>
      <p>Squelette du pilotage evenement</p>
    </a>
  </nav>
</template>
