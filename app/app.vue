<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
import { NuxtLayout } from '#components';

</script>

<style>
  @font-face {
    font-family: Geist;
    src: url('/fonts/Geist-VariableFont_wght.ttf');
    font-weight: 400;
    font-style: normal;
  }

  body{
    background-color: #000;
    color: #fff;
    font-family: Geist;
  }
</style>
