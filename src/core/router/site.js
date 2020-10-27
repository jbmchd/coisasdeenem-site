export default [
  {
    path: "*",
    redirect: "/404"
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/view/pages/error/Error-1.vue")
  }
];
