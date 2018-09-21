const routes = [
  {
    path: "/",
    page: "/",
  },
  {
    path: "/:category",
    page: "/about",
  },
  {
    path: "/*",
    page: "/404",
  },
];


module.exports = {
  arrayRoutes() {
    return routes;
  },
};
