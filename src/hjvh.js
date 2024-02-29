<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MyComponent extends Vue {
  items: any[] = [];

  mounted() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('');
      const data = await response.json();
      this.items = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
</script>
