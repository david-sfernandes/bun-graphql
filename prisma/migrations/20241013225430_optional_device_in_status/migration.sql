-- DropForeignKey
ALTER TABLE "SecurityStatus" DROP CONSTRAINT "SecurityStatus_deviceId_fkey";

-- AlterTable
ALTER TABLE "SecurityStatus" ALTER COLUMN "deviceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "SecurityStatus" ADD CONSTRAINT "SecurityStatus_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;
