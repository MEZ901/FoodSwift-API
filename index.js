const app = require("./src/frameworks/express/app");
const config = require("./src/frameworks/config");

const port = config.PORT || 8080;

app.listen(port, () => {
  console.log(`----------------------------------------------`);
  console.log(`🚀 Server running on http://localhost:${port}/`);
  console.log(`----------------------------------------------`);
});
