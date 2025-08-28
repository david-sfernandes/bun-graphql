import { expect, test } from "bun:test";
import SourceFacade from "@/sources/source.facade";

const terabyteSource = new SourceFacade();

test(
  "Sync clients",
  async () => {
    const updatedClients = await terabyteSource.syncClients();

    expect(updatedClients).toBeGreaterThan(0);
  },
  { timeout: 60000 },
);

test(
  "Sync devices",
  async () => {
    const updatedDevices = await terabyteSource.syncDevices();

    expect(updatedDevices).toBeGreaterThan(0);
  },
  { timeout: 300000 },
);

test(
  "Sync all network security status",
  async () => {
    const updatedStatus = await terabyteSource.syncNetworkSecurityStatus();

    expect(updatedStatus).toBeGreaterThan(0);
  },
  { timeout: 180000 },
);

test.only(
  "Sync all companies security status",
  async () => {
    const updatedStatus = await terabyteSource.syncCompanySecurityStatus();

    expect(updatedStatus).toBeGreaterThan(0);
  },
  { timeout: 180000 },
);

test(
  "Sync security events",
  async () => {
    const updatedEvents = await terabyteSource.syncSecurityEvents();

    expect(updatedEvents).toBeGreaterThan(0);
  },
  { timeout: 60000 },
);

test(
  "Sync device details",
  async () => {
    const updatedDetails = await terabyteSource.syncDeviceDetails();

    expect(updatedDetails).toBeGreaterThan(0);
  },
  { timeout: 180000 },
);
