const proxy =  require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    "/api/",
    proxy({
      target: "http://164.92.73.44/",
      changeorigin: true,
      pathrewrite: {
        "^/api/": "/"
      },
    })
  );
};