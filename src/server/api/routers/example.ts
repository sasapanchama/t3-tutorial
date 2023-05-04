import { z } from "zod";
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

// プロシージャを持つルーターを定義します。
export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    // zod によるバリデーションをかけています
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});