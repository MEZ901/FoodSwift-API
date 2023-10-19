const app = require("./src/infrastructure/webserver/app");
const { PORT } = require("./src/infrastructure/config/environment");

app.listen(PORT, () => {
  console.log(`----------------------------------------------`);
  console.log(`🚀 Server running on http://localhost:${PORT}/`);
  console.log(`----------------------------------------------`);
});
