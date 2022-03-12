import { Static, Type } from "@sinclair/typebox";
import { RouteType } from "./types";

const User = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: "email" })),
});
type UserType = Static<typeof User>;

const Users = Type.Object({
  users: Type.Array(User),
});

export const getUsers: RouteType<{ Reply: Static<typeof Users> }> = {
  method: "GET",
  url: "/user",
  schema: {
    response: {
      200: Users,
    },
  },
  handler: async (request, reply) => {
    return reply.status(200).send({
      users: [
        { name: "user1", mail: "user1@test.com" },
        { name: "user2", mail: "user2@test.com" },
      ],
    });
  },
};

export const getUser: RouteType<{ Reply: UserType }> = {
  method: "GET",
  url: "/user/:id",
  schema: {
    response: {
      200: User,
    },
  },
  handler: async (request, reply) => {
    return reply.status(200).send({ name: "user1", mail: "user@test.com" });
  },
};

export const createUser: RouteType<{ Body: UserType; Reply: UserType }> = {
  method: "POST",
  url: "/user",
  schema: {
    body: User,
    response: {
      200: User,
    },
  },
  handler: (request, reply) => {
    const { body: user } = request;
    reply.status(200).send(user);
  },
};
