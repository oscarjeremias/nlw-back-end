import express from "express";
import { createFeedBack } from "./functions/createFeedBack";
import { submitEmail } from "./functions/submitEmail";
const app = express();
app.use(express.json());

const port = 5500;

app.post("/feedback", (req, res) => {
  createFeedBack(req);
  submitEmail(req);
  res.status(201).send("create sucess");
});

app.listen(port, () => {
  console.log(`Servidor em pé na porta ${port}`);
});
