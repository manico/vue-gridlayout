<template>
  <div id="app">
    <!-- Simple -->
    <v-grid class="grid grid-a"
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
    <!-- Areas -->
    <v-grid class="grid grid-b"
            template-columns="1fr 1fr 1fr"
            :template-areas="['a a b', 'a a b']"
            auto-rows="100px"
            gap="10px">
      <v-grid-item area="a"></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item></v-grid-item>
      <v-grid-item area="b"></v-grid-item>
    </v-grid>
    <!-- Align item -->
    <v-grid class="grid grid-c"
            :template-columns="[{ repeat: { count: 4, value: '1fr' } }]"
            :template-areas="['. a a .', '. a a .']"
            auto-rows="200px"
            gap="10px">
      <v-grid-item area="a"
                   align="center"
                   justify="center">
        Centered
      </v-grid-item>
    </v-grid>
    <!-- Align content -->
    <v-grid class="grid grid-d"
            :template-columns="[{ repeat: { count: 3, value: '100px' } }]"
            :template-rows="[{ repeat: { count: 3, value: '100px' } }]"
            :template-areas="['a a b', 'a a b', 'c d d']"
            gap="10px"
            align-content="space-between"
            justify-content="space-around">
      <v-grid-item area="a"></v-grid-item>
      <v-grid-item area="b"></v-grid-item>
      <v-grid-item area="c"></v-grid-item>
      <v-grid-item area="d"></v-grid-item>
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
