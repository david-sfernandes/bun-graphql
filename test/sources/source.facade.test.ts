import SourceFacade from "@/src/sources/source.facade";
import { expect, test } from "bun:test";

const terabyteSource = new SourceFacade();

// test(
//   "Sync clients",
//   async () => {
//     const updatedClients = await terabyteSource.syncClients();

//     expect(updatedClients).toBeGreaterThan(0);
//   },
//   {
//     timeout: 60000,
//   }
// );

test(
  "Sync devices",
  async () => {
    const updatedDevices = await terabyteSource.syncDevices();

    expect(updatedDevices).toBeGreaterThan(0);
  },
  {
    timeout: 300000,
  }
);
