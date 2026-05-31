import express from "express";
import cors from "cors";
import prisma from "./prisma.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend  NowRunning");
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
export default app;