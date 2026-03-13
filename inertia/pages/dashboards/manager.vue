<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Manager Dashboard" />

  <section class="hero">
    <h1>Dashboard Responsable</h1>
    <p>Phase 0: squelette responsable d evenement.</p>
  </section>

  <nav class="cards">
    <a href="/events/create">Creer un evenement</a>
    <a href="/dashboards/member">Voir vue participant</a>
  </nav>
</template>
