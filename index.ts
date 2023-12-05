require("dotenv").config();

const server = require("./src/index.ts");
const PORT = process.env.PORT || 3500;

server.listen(PORT, async () => {
  console.log(`GraphQL server listening on port : ${PORT}`);
});
