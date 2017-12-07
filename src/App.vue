<template>
  <div id="app">
    <v-grid template-columns="2fr 1fr 1fr"
            auto-rows="100px"
            gap="10px">
      <v-grid-item :column-start="1"
                   :column-end="4">
        One
      </v-grid-item>
      <v-grid-item>Two</v-grid-item>
      <v-grid-item>Three</v-grid-item>
      <v-grid-item>Four</v-grid-item>
      <v-grid-item>Five</v-grid-item>
    </v-grid>
  </div>
</template>

<script>
  import { VGrid, VGridItem } from './components/VGrid';

  export default {
    name: 'app',
    components: {
      VGrid,
      VGridItem,
    },
  };
</script>
