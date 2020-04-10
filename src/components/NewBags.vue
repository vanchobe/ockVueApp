<template>
  <div>
    <h1>New Bag</h1>
    <form action="" method="post">
      <v-text-field label="Name" v-model="bagForm.name" type="text" />
      <v-text-field label="Image" v-model="bagForm.image" type="text" />

      <v-text-field label="Price" v-model="bagForm.price" type="number" />
      <v-text-field
        label="Description"
        v-model="bagForm.description"
        type="text"
      />

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
      <v-btn @submit.prevent @click="submitBags">Submit Form</v-btn>
    </form>
    <div v-if="!isHidden">
      <div v-if="message">
        <v-alert type="success">
          Bag was added successfully.
        </v-alert>
      </div>
      <div v-else>
        <v-alert type="error">
          Bag's name already exist.
        </v-alert>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState, mapGetters } from "vuex";
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
  data() {
    return {
      bagForm: {
        name: "",
        image: "",
        price: "",
        description: "",
        products: [],
      },
      message: false,
      hasName: false,
      isHidden: true,
    };
  },
  methods: {
    ...mapActions({
      fetchBags: "bags/fetchBags",
    }),

    submitBags() {
      this.isHidden = false;
      setTimeout(() => {
        this.isHidden = true;
      }, 4000);
      this.checkBags();
      if (this.hasName) {
        this.message = false;
      } else {
        axios
          .post("http://localhost:3002/bags", {
            name: this.bagForm.name,
            image: this.bagForm.image,
            price: this.bagForm.price,
            description: this.bagForm.description,
            products: this.bagForm.products,
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        this.bagForm.name = "";
        this.bagForm.image = "";
        this.bagForm.price = "";
        this.bagForm.description = "";
        this.bagForm.products = [];
        this.message = true;
      }
      this.fetchBags();
    },
    checkBags() {
      for (let key in this.bags) {
        let element = this.bags[key];

        if (element.name === this.bagForm.name) {
          this.hasName = true;
          break;
        }
      }
    },
  },
  created() {
    this.fetchBags();
  },
};
</script>

<style></style>
