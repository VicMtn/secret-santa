<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Admin Dashboard" />

  <section class="hero">
    <h1>Dashboard Admin</h1>
    <p>Phase 0: squelette admin famille.</p>
  </section>

  <nav class="cards">
    <a href="/families/create">Creer une famille</a>
    <a href="/events/create">Creer un evenement</a>
  </nav>
</template>
