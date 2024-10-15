import cron from "node-cron";
import SourceFacade from "../sources/source.facade";

const monthlyTask = cron.schedule(
  "0 2 * 1 *",
  async () => {
    const terabyteSource = new SourceFacade();
    await terabyteSource.syncSecurityEvents();
  },
  {
    timezone: "America/Sao_Paulo",
  }
);

export default monthlyTask;
