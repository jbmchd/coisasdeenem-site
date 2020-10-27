export default {
  path: "/",
  redirect: "/dashboard",
  component: () => import("@/view/layout/Layout"),
  children: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/view/pages/Dashboard.vue")
    }
  ]
};
