import cron from "node-cron";
import SourceFacade from "../sources/source.facade";

async function syncSecurityEvents() {
  const terabyteSource = new SourceFacade();
  await terabyteSource.syncSecurityEvents();
}

const monthlyTask = cron.schedule(
  "0 2 * 1 *", // 2:00 AM on the first day of the month
  syncSecurityEvents,
  { timezone: "America/Sao_Paulo" },
);

export { monthlyTask, syncSecurityEvents };
