import app from "./app";
import { config, prisma } from "./config/index";

app.listen(config.port, () => {
  console.log("server started");
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});
