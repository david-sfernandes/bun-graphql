import { beforeAll, expect, test } from "bun:test";

import BitdefenderService from "@/src/bitdefender/bitdefender.service";

const key = process.env.BITDEFENDER_KEY_TERABYTE || "";
const secReportId = process.env.BITDEFENDER_SEC_REPORT_ID || "";

let testCompanyGroups: SecurityGroup[] = [];
let bitdefenderService: BitdefenderService;

beforeAll(async () => {
  bitdefenderService = new BitdefenderService(key, secReportId);
  testCompanyGroups = (await bitdefenderService.getCompaniesGroups()).slice(
    0,
    3
  );
});

test("Get network groups", async () => {
  const groups = await bitdefenderService.getNetworkGroups();

  expect(groups).toBeInstanceOf(Array);
  expect(groups.length).toBeGreaterThan(0);
});

test("Get companies groups", async () => {
  const groups = await bitdefenderService.getCompaniesGroups();

  expect(groups).toBeInstanceOf(Array);
  expect(groups.length).toBeGreaterThan(0);
});

test("Get sub folders", async () => {
  const subFolders = await bitdefenderService.getSubFolders(testCompanyGroups);

  expect(subFolders).toBeInstanceOf(Array);
  expect(subFolders.length).toBeGreaterThan(0);
});

test("Get status by group", async () => {
  const subFolders = await bitdefenderService.getSubFolders(testCompanyGroups);
  const status = await bitdefenderService.getStausByGroup(subFolders[0].id);

  expect(status).toBeInstanceOf(Object);
});

test.only("Get security report URL", async () => {
  const url = await bitdefenderService.getReportUrl();
  console.log("URL: ", url);
  expect(url).toBeString();
  expect(url).toMatch(/http/);
});

test.only("Return null if security report ID is not set", async () => {
  const bitdefenderService = new BitdefenderService(key);
  const url = await bitdefenderService.getReportUrl();

  expect(url).toBeNull();
});