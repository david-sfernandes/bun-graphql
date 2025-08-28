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
  console.log(chalk.green(`< Updated ${countStatus} network security status`));
  await terabyteSource.cleanOldSecurityStatus();
}

async function syncCompanySecurityStatus() {
  const terabyteSource = new SourceFacade();
  const countStatus = await terabyteSource.syncCompanySecurityStatus();
  console.log(chalk.green(`< Updated ${countStatus} company security status`));
}

async function syncAticaSecurityStatus() {
  const aticaKey = Bun.env.BITDEFENDER_KEY_ATICA;
  const terabyteSource = new SourceFacade(aticaKey, "597f6fccfc06d0c8068b457d");

  const countStatus = await terabyteSource.syncNetworkSecurityStatus();
  console.log(chalk.green(`< Updated ${countStatus} network security status`));
}

const dailyTask1 = cron.schedule("0 1,15 * * *", syncClientDeviceStatus, {
  timezone: "America/Sao_Paulo",
});

const dailyTask2 = cron.schedule("10 1,15 * * *", syncCompanySecurityStatus, {
  timezone: "America/Sao_Paulo",
});

const dailyTask3 = cron.schedule("25 1,15 * * *", syncAticaSecurityStatus, {
  timezone: "America/Sao_Paulo",
});

export {
  dailyTask1,
  dailyTask2,
  dailyTask3,
  syncClientDeviceStatus,
  syncCompanySecurityStatus,
  syncAticaSecurityStatus,
};
