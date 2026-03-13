<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Join Family" />

  <section class="hero">
    <h1>Rejoindre une famille</h1>
    <p>Phase 0: page squelette de rattachement a une famille.</p>
  </section>

  <form action="/families/join" class="card" method="post">
    <label for="familyCode">Code famille</label>
    <input id="familyCode" name="familyCode" type="text" required />

    <label for="familyPassword">Mot de passe famille</label>
    <input id="familyPassword" name="familyPassword" type="password" required />

    <button type="submit">Rejoindre</button>
  </form>

  <p>
    <a href="/families/create">Creer une nouvelle famille</a>
  </p>
</template>
