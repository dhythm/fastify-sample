import { RouteType } from "./types";

export const ping: RouteType = {
  method: "GET",
  url: "/ping",
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
        },
      },
    },
  },
  handler: async (request, reply) => {
    return { pong: "it worked!" };
  },
};
