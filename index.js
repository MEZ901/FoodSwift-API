const app = require("./src/frameworks/express/app");
const { PORT } = require("./src/frameworks/config/environment");

app.listen(PORT, () => {
  console.log(`----------------------------------------------`);
  console.log(`🚀 Server running on http://localhost:${PORT}/`);
  console.log(`----------------------------------------------`);
});
