import fastify, { FastifyInstance } from "fastify";
import { ping } from "./routes/ping";
// import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance = fastify({ logger: true });

server.route(ping);

const start = async () => {
  try {
    await server.listen(3000);
    // const address = server.server.address();
    // const port = typeof address === "string" ? address : address?.port;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
