<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="500"
      v-for="(currBag, id1) in bags"
      :key="id1"
    >
      <v-img class="white--text align-end" height="200px" :src="currBag.image">
        <v-card-title>{{ currBag.name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{ currBag.id }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ currBag.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>
          <v-btn :to="'/view-bag/' + currBag.id">View Bag</v-btn>
        </v-btn>

        <v-btn color="orange" text>
          <v-btn :to="'/update/' + currBag.id">Edit</v-btn>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      bags: (state) => state.bags.bags,
    }),
    ...mapGetters("bags", {
      bagsIsInRange: "bagsIsInRange",
      availableBags: "availableBags",
    }),
  },
  methods: {
    ...mapActions({
      fetchBags: "bags/fetchBags",
    }),
  },
  created() {
    this.fetchBags();
  },
};
</script>

<style scoped>
.v-card {
  margin-bottom: 1rem;
}
</style>
