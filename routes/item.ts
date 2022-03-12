import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { RouteType } from "./types";

const Item = z.object({
  name: z.string(),
  price: z.number(),
});
const Items = z.object({ items: z.array(Item) });

type ItemType = z.infer<typeof Item>;
type ItemsType = z.infer<typeof Items>;

const itemSchema = zodToJsonSchema(Item, "itemSchema");
const jsonSchema = zodToJsonSchema(Items, "schema");

export const getItems: RouteType<{ Reply: ItemsType }> = {
  method: "GET",
  url: "/item",
  schema: jsonSchema.definitions.schema,
  handler: async (request, reply) => {
    return reply.status(200).send({
      items: [
        { name: "item1", price: 100 },
        { name: "item2", price: 200 },
      ],
    });
  },
};

export const createItem: RouteType<{ Body: ItemsType; Reply: ItemsType }> = {
  method: "POST",
  url: "/item",
  schema: {
    body: itemSchema.definitions.itemSchema,
    response: {
      200: itemSchema.definitions.itemSchema,
    },
  },
  handler: (request, reply) => {
    const { body: item } = request;
    reply.status(200).send(item);
  },
};
