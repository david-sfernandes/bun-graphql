import { test, expect, mock } from "bun:test";
import MilvusService from "../../src/milvus/milvus.service";

const key = Bun.env.MILVUS_KEY_TERABYTE || "";

const milvusService = new MilvusService(key);

test("Get client list", async () => {
  const clients = await milvusService.getClients();
  
  expect(clients).toBeInstanceOf(Array);
  expect(clients.length).toBeGreaterThan(0);
});

