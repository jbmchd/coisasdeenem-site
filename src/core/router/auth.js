export default [
  {
    path: "/",
    component: () => import("@/view/pages/auth/login_pages/Login-1"),
    children: [
      {
        name: "login",
        path: "/login",
        component: () => import("@/view/pages/auth/login_pages/Login-1")
      },
      {
        name: "register",
        path: "/register",
        component: () => import("@/view/pages/auth/login_pages/Login-1")
      }
    ]
  }
];
