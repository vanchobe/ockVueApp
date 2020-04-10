<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-img height="250" :src="bag[0].image"></v-img>

      <v-card-title>{{ bag[0].name }} </v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 subtitle-1">${{ bag[0].price }}</div>

        <div>{{ bag[0].description }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Products</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <div v-if="!Array.isArray(bag[0].products)">
            <v-chip>{{ bag[0].products }}</v-chip>
          </div>
          <div v-else>
            <v-chip v-for="(product, id) in bag[0].products" :key="id">{{
              product
            }}</v-chip>
          </div>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="deleteBags(bag[0].id)"
        >
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bag: {},
    };
  },
  methods: {
    getBag(id) {
      axios
        .get("http://localhost:3002/bags?id=" + id)
        .then((bags) => (this.bag = bags.data))
        .catch((e) => {
          console.log(e);
        });
    },
    deleteBags(id) {
      axios
        .delete("http://localhost:3002/bags/" + id, this.bags)
        .then(() => this.$router.push({ path: "/" }))
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getBag(this.$route.params.id);
  },
};
</script>

<style scoped></style>
