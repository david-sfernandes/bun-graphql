import cron from "node-cron";
import SourceFacade from "../sources/source.facade";

async function syncDeviceDetails() {
  const terabyteSource = new SourceFacade();
  const countDevices = await terabyteSource.syncDeviceDetails();
  console.log(`< Updated ${countDevices} devices details`);
}


const weeklyTask = cron.schedule(
  "30 1 * * 0", // 1:30 AM on Sunday
  syncDeviceDetails,
  { timezone: "America/Sao_Paulo" },
);

export { weeklyTask, syncDeviceDetails };
