import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});
