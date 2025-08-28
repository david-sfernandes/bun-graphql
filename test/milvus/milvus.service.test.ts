import { expect, test } from "bun:test";
import MilvusService from "@/services/milvus.service";

const key = Bun.env.MILVUS_KEY_TERABYTE || "";

const milvusService = new MilvusService(key);

test("Get client list", async () => {
  const clients = await milvusService.getClients();

  expect(clients).toBeInstanceOf(Array);
  expect(clients.length).toBeGreaterThan(0);
});

test("Get first page of tickets by client", async () => {
  const tickets = await milvusService.getTicketsByPage(87070, 1);

  expect(tickets).toBeInstanceOf(Object);
});

test.only("Get client tickets", async () => {
  const tickets: Ticket[] = await milvusService.getTickets(87070);

  expect(tickets).toBeInstanceOf(Array);
  expect(tickets.length).toBeGreaterThan(0);
});
