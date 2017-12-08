<template>
  <v-app id="app">
    <v-navigation-drawer app
                         fixed
                         clipped
                         v-model="isDrawerVisible">
    </v-navigation-drawer>
    <v-toolbar app
               clipped-left
               fixed
               dark
               color="primary">
      <v-toolbar-title class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="toggleDrawer">
        </v-toolbar-side-icon>
        <span class="hidden-xs-only">Vue Grid Layout</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid
                   grid-list-lg>
        <v-layout row
                  wrap>
          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Simple Grid</h3>
                  <div>First and last items are streatched to fill all tracks.</div>
                </div>
              </v-card-title>
              <v-card-text>
                <v-grid class="grid grid-a"
                        template-columns="2fr 1fr 1fr"
                        auto-rows="120px"
                        gap="10px">
                  <v-grid-item :column-start="1"
                               :column-end="4">
                    One
                  </v-grid-item>
                  <v-grid-item>Two</v-grid-item>
                  <v-grid-item>Three</v-grid-item>
                  <v-grid-item>Four</v-grid-item>
                  <v-grid-item :column-start="-1"
                               :column-end="-4">
                    Five
                  </v-grid-item>
                </v-grid>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Using Grid Areas</h3>
                  <div>First and last items are streatched to fill areas.</div>
                </div>
              </v-card-title>
              <v-card-text>
                <v-grid class="grid grid-b"
                        template-columns="1fr 1fr 1fr"
                        :template-areas="['a a b', 'a a b']"
                        auto-rows="100px"
                        gap="10px">
                  <v-grid-item area="a">One</v-grid-item>
                  <v-grid-item>Two</v-grid-item>
                  <v-grid-item>Three</v-grid-item>
                  <v-grid-item>Four</v-grid-item>
                  <v-grid-item area="b">Five</v-grid-item>
                </v-grid>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Align Grid Items</h3>
                  <div>Use align and justify to center item.</div>
                </div>
              </v-card-title>
              <v-card-text>
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
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Align Grid Content</h3>
                  <div>Use align and justify to align grid content.</div>
                </div>
              </v-card-title>
              <v-card-text>
                <v-grid class="grid grid-d"
                        :template-columns="[{ repeat: { count: 3, value: '100px' } }]"
                        :template-rows="[{ repeat: { count: 3, value: '100px' } }]"
                        :template-areas="['a a b', 'a a b', 'c d d']"
                        gap="10px"
                        align-content="space-between"
                        justify-content="space-around">
                  <v-grid-item area="a">One</v-grid-item>
                  <v-grid-item area="b">Two</v-grid-item>
                  <v-grid-item area="c">Three</v-grid-item>
                  <v-grid-item area="d">Four</v-grid-item>
                </v-grid>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Writing Mode</h3>
                  <div>Changing writing mode is simple with grid layout without changing items.</div>
                </div>
              </v-card-title>
              <v-card-text>
                <v-grid class="grid grid-e"
                        :template-columns="[{ repeat: { count: 3, value: '100px' } }]"
                        :template-rows="[{ repeat: { count: 3, value: '100px' } }]"
                        :template-areas="['a a b', 'a a b', 'c d d']"
                        gap="10px"
                        align-content="space-between"
                        justify-content="space-around"
                        writing-mode="vertical-rl">
                  <v-grid-item area="a">One</v-grid-item>
                  <v-grid-item area="b">Two</v-grid-item>
                  <v-grid-item area="c">Three</v-grid-item>
                  <v-grid-item area="d">Four</v-grid-item>
                </v-grid>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Custom Tags</h3>
                  <div>You can use custom tags for grid and grid items.</div>
                </div>
              </v-card-title>
              <v-card-text>
                <v-grid class="grid grid-f"
                        template-columns="1fr 2fr"
                        :auto-rows="['50px', '120px']"
                        gap="10px">
                  <v-grid-item tag="header">Header</v-grid-item>
                  <v-grid-item>One</v-grid-item>
                  <v-grid-item>Two</v-grid-item>
                  <v-grid-item>Three</v-grid-item>
                  <v-grid-item tag="footer">Footer</v-grid-item>
                </v-grid>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        isDrawerVisible: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.isDrawerVisible = !this.isDrawerVisible;
      },
    },
  };
</script>
