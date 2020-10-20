const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy(["/api/", "/gauth", "/login"], { target: "http://localhost:8080" })
  );
};
