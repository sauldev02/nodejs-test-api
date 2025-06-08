import "module-alias/register";
import { configureEnvironment, env } from "./config/env-setup";
configureEnvironment();
import express from "express";
import prisma from "@infra/database/prisma/client";

const app = express();
const port = env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente!!!" });
});

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Conexión a la base de datos establecida");

    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  }
};

startServer();
