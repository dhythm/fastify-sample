import fastify, { FastifyInstance } from "fastify";
import fastifySwagger from "fastify-swagger";
import { createItem, getItems } from "./routes/item";
import { ping } from "./routes/ping";
import { createUser, getUser, getUsers } from "./routes/user";
// import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance = fastify({ logger: true });

server.register(fastifySwagger, {
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "Test swagger",
      description: "Testing the Fastify swagger API",
      version: "0.1.0",
    },
    // externalDocs: {
    //   url: "https://swagger.io",
    //   description: "Find more info here",
    // },
    // host: "localhost",
    // schemes: ["http"],
    // consumes: ["application/json"],
    // produces: ["application/json"],
    // tags: [
    //   { name: "user", description: "User related end-points" },
    //   { name: "code", description: "Code related end-points" },
    // ],
    // definitions: {
    //   User: {
    //     type: "object",
    //     required: ["id", "email"],
    //     properties: {
    //       id: { type: "string", format: "uuid" },
    //       firstName: { type: "string" },
    //       lastName: { type: "string" },
    //       email: { type: "string", format: "email" },
    //     },
    //   },
    // },
    // securityDefinitions: {
    //   apiKey: {
    //     type: "apiKey",
    //     name: "apiKey",
    //     in: "header",
    //   },
    // },
  },
  //   uiConfig: {
  //     docExpansion: "full",
  //     deepLinking: false,
  //   },
  //   uiHooks: {
  //     onRequest: function (_request, _reply, next) {
  //       next();
  //     },
  //     preHandler: function (_request, _reply, next) {
  //       next();
  //     },
  //   },
  //   staticCSP: true,
  //   transformStaticCSP: (header) => header,
  exposeRoute: true,
});

server.route(ping);
server.route(getUsers);
server.route(getUser);
server.route(createUser);
server.route(getItems);
server.route(createItem);

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
