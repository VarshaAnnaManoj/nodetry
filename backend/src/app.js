import express from "express";
import cors from "cors";
import prisma from "./prisma.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend Now Running");
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "API is Working"
  });
});

app.get("/api/states", async (req, res) => {
  const users = await prisma.states.findMany();
  res.json(users);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});