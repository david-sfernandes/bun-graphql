import cron from "node-cron";
import SourceFacade from "../sources/source.facade";

const dailyTask = cron.schedule(
  "0 1 * * *",
  async () => {
    const terabyteSource = new SourceFacade();
    await terabyteSource.syncMainData();
  },
  {
    timezone: "America/Sao_Paulo",
  }
);

export default dailyTask;
