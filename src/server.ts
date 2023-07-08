import express from "express";
import { Signale } from "signale";

import { loadRouter } from "./event/LoadRouter";

const app = express();

const signale = new Signale();

app.use(express.json());

app.use("/load", loadRouter);

app.listen(4000, () => {
  signale.success("Server online in port 4000");
});
