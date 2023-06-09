<template>
  <ul>
    <li
      v-for="spotlight in spotlights"
      :key="spotlight.id"
    >
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import type { RootObjet } from '@/api/types';

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

const spotlights = ref<Spotlight[]>([]);

const getSpotlights = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}`;
  const response = await axios.get<RootObjet>(url);
  spotlights.value = response.data.spotlights;
};

onMounted(getSpotlights);
</script>
