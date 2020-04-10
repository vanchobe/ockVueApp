<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item
          link
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Epic Bags App</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row>
          <v-col>
            <v-fade-transition mode="out-in">
              <router-view></router-view>
            </v-fade-transition>
          </v-col>
          <!-- <v-col>dve</v-col> -->
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    links: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-plus", text: "Add Bag", route: "/add-bags" },
    ],
  }),
};
</script>
