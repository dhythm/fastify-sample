import { FastifySchema, RouteOptions } from "fastify";
import { RouteGenericInterface } from "fastify/types/route";
import { IncomingMessage, Server, ServerResponse } from "http";

export type RouteType<T extends RouteGenericInterface = RouteGenericInterface> =
  RouteOptions<
    Server,
    IncomingMessage,
    ServerResponse,
    T,
    unknown,
    FastifySchema
  >;
