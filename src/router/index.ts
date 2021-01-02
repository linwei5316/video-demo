import Vue from "vue";
import Router from "vue-router";
import App from "@/App.vue";
import Index from "@/pages/Index.vue"

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: '',
          component: Index,
        },
        {
          path: "*",
          //TODO redirect index
          redirect: "/error",
        }
      ]
    },
  ],
})

export default router;
