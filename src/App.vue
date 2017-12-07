<template>
  <div id="app">
    <v-grid class="grid"
            template-columns="2fr 1fr 1fr"
            :auto-rows="['50px', '120px']"
            gap="10px">
      <v-grid-item :column-start="1"
                   :column-end="4">
      </v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item :column-start="1"
                   :column-end="4">
      </v-grid-item>
    </v-grid>
    <v-grid class="grid"
            template-columns="1fr 1fr 1fr"
            auto-rows="100px"
            :template-areas="['a a b', 'a a b']"
            gap="10px">
      <v-grid-item area="a"></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item area="b"></v-grid-item>
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
