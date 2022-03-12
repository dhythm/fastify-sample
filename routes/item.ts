import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { RouteType } from "./types";

const Item = z.object({
  name: z.string(),
  price: z.number(),
});
const Items = z.object({ items: z.array(Item) });

type ItemsType = z.infer<typeof Items>;

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
