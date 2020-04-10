import Vue from "vue";
import VueRouter from "vue-router";
import BagsList from "../components/BagsList.vue";
import NewBags from "../components/NewBags.vue";
import BagPage from "../components/BagPage.vue";
import UpdateBag from "../components/UpdateBag.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BagsList",
    component: BagsList,
  },
  {
    path: "/add-bags",
    component: NewBags,
  },
  { path: "/update/:id", component: UpdateBag },
  { path: "/view-bag/:id", component: BagPage },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
