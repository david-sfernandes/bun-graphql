import cron from "node-cron";
import SourceFacade from "../sources/source.facade";

const weeklyTask = cron.schedule(
  "30 1 * * 0", // 1:30 AM on Sunday
  async () => {
    const terabyteSource = new SourceFacade();
    await terabyteSource.syncDeviceDetails();
  },
  {
    timezone: "America/Sao_Paulo",
  }
);

export default weeklyTask;
