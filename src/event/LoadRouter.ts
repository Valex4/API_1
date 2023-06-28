import amqp from "amqplib";
import express from "express";

const config = {
  protocol: "amqp",
  hostname: "34.235.104.181",
  port: 5672,
  username: "guest",
  password: "guest",
};

const objeto: { name: string; status: string } = {
  name: "Moco",
  status: "Moco",
};

export const loadRouter = express.Router();

loadRouter.get("/", async function loadEvent(req, res) {
  const conn = await amqp.connect(config);
  console.log("Conexión exitosa");
  const channel = await conn.createChannel();
  console.log("Canal creado exitosamente");
  await channel.sendToQueue(
    "InitialEvent",
    Buffer.from(JSON.stringify(objeto))
  );
  console.log("Mensaje enviado");
  await channel.close();
  await conn.close();
  res.status(200).send("OK");
});
