import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Package from "../views/Package.vue";
import PackageList from "../views/PackageList.vue"
import Haji from "../views/Haji.vue"
import Tour from "../views/Tour.vue"
import Galeri1 from "../views/Galeri1.vue"
import Galeri2 from "../views/Galeri2.vue"
import Galeri3 from "../views/Galeri3.vue"
import Galeri4 from "../views/Galeri4.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/package/:id",
    name: "Package",
    component: Package,
  },
  {
    path: "/package-list",
    name: "Package List",
    component: PackageList,
  },
  {
    path: "/haji",
    name: "Haji",
    component: Haji,
  },
  {
    path: "/tour",
    name: "Tour",
    component: Tour,
  },
  {
    path: "/galeri-1",
    name: "Galeri1",
    component: Galeri1,
  },
  {
    path: "/galeri-2",
    name: "Galeri2",
    component: Galeri2,
  },
  {
    path: "/galeri-3",
    name: "Galeri3",
    component: Galeri3,
  },
  {
    path: "/galeri-4",
    name: "Galeri4",
    component: Galeri4,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
