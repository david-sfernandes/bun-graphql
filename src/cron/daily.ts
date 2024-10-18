import chalk from "chalk";
import cron from "node-cron";
import SourceFacade from "../sources/source.facade";

const dailyTask1 = cron.schedule(
  "0 0 * * *", // 0:00 AM
  async () => {
    const terabyteSource = new SourceFacade();
    const countClients = await terabyteSource.syncClients();
    console.log(chalk.blue(`< Updated ${countClients} clients`));
    const countDevices = await terabyteSource.syncDevices();
    console.log(chalk.magenta(`< Updated ${countDevices} devices`));
    const countStatus = await terabyteSource.syncNetworkSecurityStatus();
    console.log(
      chalk.green(`< Updated ${countStatus} network security status`)
    );
  },
  {
    timezone: "America/Sao_Paulo",
  }
);

const dailyTask2 = cron.schedule(
  "10 0 * * *", // 0:10 AM
  async () => {
    const terabyteSource = new SourceFacade();
    const countStatus = await terabyteSource.syncCompanySecurityStatus();
    console.log(
      chalk.green(`< Updated ${countStatus} company security status`)
    );
  },
  {
    timezone: "America/Sao_Paulo",
  }
);

export { dailyTask1, dailyTask2 };

