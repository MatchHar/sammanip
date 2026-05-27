<template>
  <img
    src="/branding/samman-network-unavailable-512.png"
    alt=""
    aria-hidden="true"
    class="object-contain"
    :style="{ width: isMobile ? '100px' : '150px', height: isMobile ? '100px' : '150px' }">
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/store';

const store = useMainStore();
const isMobile = computed(() => store.isMobile);
</script>
