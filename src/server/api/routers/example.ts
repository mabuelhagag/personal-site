import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string(), link: z.string().url().nullable() }))
    .query(async ({ input }) => {
      return new Promise((res, _) =>
        setTimeout(res, Math.floor(Math.random() * 3500)),
      ).then(() => ({
        word: `${input.text} `,
        link: input.link,
      }));
    }),
});
