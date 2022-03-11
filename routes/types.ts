import { FastifySchema, RouteOptions } from "fastify";
import { RouteGenericInterface } from "fastify/types/route";
import { IncomingMessage, Server, ServerResponse } from "http";

export type RouteType = RouteOptions<
  Server,
  IncomingMessage,
  ServerResponse,
  RouteGenericInterface,
  unknown,
  FastifySchema
>;
