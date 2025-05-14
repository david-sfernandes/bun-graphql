import chalk from "chalk";
import cron from "node-cron";
import SourceFacade from "../sources/source.facade";

async function syncClientDeviceStatus() {
  const terabyteSource = new SourceFacade();
  const countClients = await terabyteSource.syncClients();
  console.log(chalk.blue(`< Updated ${countClients} clients`));
  const countDevices = await terabyteSource.syncDevices();
  console.log(chalk.magenta(`< Updated ${countDevices} devices`));
  const countStatus = await terabyteSource.syncNetworkSecurityStatus();
  console.log(
    chalk.green(`< Updated ${countStatus} network security status`),
  );
}

async function syncCompanySecurityStatus() {
  const terabyteSource = new SourceFacade();
  const countStatus = await terabyteSource.syncCompanySecurityStatus();
  console.log(
    chalk.green(`< Updated ${countStatus} company security status`),
  );
}

async function dailyCleanup() {
  const terabyteSource = new SourceFacade();
  const countDevices = await terabyteSource.();
  console.log(chalk.red(`< Deleted ${countDevices} old devices`));
}


const dailyTask1 = cron.schedule(
  "0 0 * * *",
  syncClientDeviceStatus,
  { timezone: "America/Sao_Paulo" },
);

const dailyTask2 = cron.schedule(
  "10 0 * * *",
  syncCompanySecurityStatus,
  { timezone: "America/Sao_Paulo" },
);

const dailyCleanupTask = cron.schedule(
  "0 1 * * *",
  async () => dailyCleanup(),
  { timezone: "America/Sao_Paulo" },
);

export { dailyTask1, dailyTask2, dailyCleanup, syncClientDeviceStatus, syncCompanySecurityStatus, dailyCleanupTask };