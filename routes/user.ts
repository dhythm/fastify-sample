import { Type } from "@sinclair/typebox";
import { RouteType } from "./types";

const User = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: "email" })),
});

const Users = Type.Object({
  users: Type.Array(User),
});
// type UserType = Static<typeof User>;

export const getUsers: RouteType = {
  method: "GET",
  url: "/user",
  schema: {
    response: {
      200: Users,
    },
  },
  handler: async (request, reply) => {
    return reply
      .status(200)
      .send({ users: [{ name: "name", mail: "user@test.com" }] });
  },
};

export const getUser: RouteType = {
  method: "GET",
  url: "/user/:id",
  schema: {
    response: {
      200: User,
    },
  },
  handler: async (request, reply) => {
    return reply.status(200).send({ name: "name", mail: "user@test.com" });
  },
};
