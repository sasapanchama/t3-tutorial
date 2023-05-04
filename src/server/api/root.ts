import { createTRPCRouter } from '~/server/api/trpc';
 
import { todoRouter } from "~/server/api/routers/todo";

// 定義したルータをサーバのプライマリルーターに渡す。
const appRouter = createTRPCRouter({
  todo: todoRouter,
});

// API の型定義をエクスポートする
export type AppRouter = typeof appRouter;