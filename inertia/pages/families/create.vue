<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Create Family" />

  <section class="hero">
    <h1>Creer une famille</h1>
    <p>Phase 0: page squelette de creation de famille.</p>
  </section>

  <form action="/families" class="card" method="post">
    <label for="name">Nom de la famille</label>
    <input id="name" name="name" type="text" required />

    <label for="familyPassword">Mot de passe famille</label>
    <input id="familyPassword" name="familyPassword" type="password" required />

    <button type="submit">Creer</button>
  </form>

  <p>
    <a href="/families/join">Rejoindre une famille existante</a>
  </p>
</template>
