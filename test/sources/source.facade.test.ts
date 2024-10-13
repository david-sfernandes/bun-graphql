import SourceFacade from "@/src/sources/source.facade";
import { expect, test } from "bun:test";

const terabyteSource = new SourceFacade();

test(
  "Sync clients",
  async () => {
    const updatedClients = await terabyteSource.syncClients();

    expect(updatedClients).toBeGreaterThan(0);
  },
  { timeout: 60000 }
);

test(
  "Sync devices",
  async () => {
    const updatedDevices = await terabyteSource.syncDevices();

    expect(updatedDevices).toBeGreaterThan(0);
  },
  { timeout: 300000 }
);

test.only(
  "Sync all security status",
  async () => {
    const updatedStatus = await terabyteSource.syncSecurityStatus();

    expect(updatedStatus).toBeGreaterThan(0);
  },
  { timeout: 180000 }
);
