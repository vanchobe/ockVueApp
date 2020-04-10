<template>
  <div>
    <h1>Edit Bag</h1>
    <form action="" method="put">
      <v-text-field
        v-model="bagForm.name"
        type="text"
        label="Bag Name"
      ></v-text-field>

      <v-text-field
        v-model="bagForm.image"
        type="text"
        label="Image"
      ></v-text-field>

      <v-text-field
        v-model="bagForm.price"
        type="number"
        label="Price"
      ></v-text-field>

      <v-text-field
        v-model="bagForm.description"
        type="text"
        label="Description"
      ></v-text-field>

      <v-row>
        <v-col cols="12" sm="4" md="4">
          <v-checkbox
            v-model="bagForm.products"
            label="Tomatoes"
            color="red"
            value="tomatoes"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="bagForm.products"
            label="Cucambers"
            color="green"
            value="cucambers"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <v-checkbox
            v-model="bagForm.products"
            label="Potatoes"
            color="red"
            value="potatoes"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="bagForm.products"
            label="Grape"
            color="orange"
            value="grape"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-btn @submit.prevent @click="updateBag(bag[0].id)">Update Bag</v-btn>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bag: {},
      bagForm: {
        name: "",
        image: "",
        price: "",
        description: "",
        products: [],
      },
    };
  },
  methods: {
    getBag(id) {
      axios
        .get("http://localhost:3002/bags?id=" + id)
        .then(
          (bags) => (
            (this.bag = bags.data),
            (this.bagForm.name = bags.data[0].name),
            (this.bagForm.image = bags.data[0].image),
            (this.bagForm.price = bags.data[0].price),
            (this.bagForm.description = bags.data[0].description),
            (this.bagForm.products = bags.data[0].products)
          )
        )
        .catch((e) => {
          console.log(e);
        });
    },
    updateBag(id) {
      axios
        .put("http://localhost:3002/bags/" + id, this.bagForm)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getBag(this.$route.params.id);
  },
};
</script>

<style></style>
