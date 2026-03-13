<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Create Event" />

  <section class="hero">
    <h1>Creer un evenement</h1>
    <p>Phase 0: page squelette de creation d evenement.</p>
  </section>

  <form action="/events" class="card" method="post">
    <label for="name">Nom de l evenement</label>
    <input id="name" name="name" type="text" required />

    <label for="year">Annee</label>
    <input id="year" name="year" type="number" min="2026" required />

    <button type="submit">Creer l evenement</button>
  </form>
</template>
