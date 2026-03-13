<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Member Dashboard" />

  <section class="hero">
    <h1>Dashboard Participant</h1>
    <p>Phase 0: squelette participant (inscription et exclusions arrivent en S2).</p>
  </section>

  <nav class="cards">
    <a href="/families/join">Rejoindre une famille</a>
    <a href="/events/create">Voir evenement</a>
  </nav>
</template>
