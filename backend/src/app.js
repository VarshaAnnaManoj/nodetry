import express from "express";
import cors from "cors";
import prisma from "./prisma.js";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(cors());
app.use(express.json());

/*
  Fix for __dirname in ES Modules
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
  Load Swagger YAML
*/
const swaggerDocument = YAML.load(
  path.join(__dirname, "../swagger/swagger.yaml")
);

/*
  Swagger Route
*/
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

/*
  Routes
*/

app.get("/", (req, res) => {
  res.send("Backend Now Running");
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "API is Working"
  });
});

app.get("/api/states", async (req, res) => {
  try {
    const users = await prisma.states.findMany();

    res.json(users);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch states"
    });
  }
});

/*
  Server
*/
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger Docs: http://localhost:${PORT}/api-docs`);
});
