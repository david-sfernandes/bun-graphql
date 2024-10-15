-- DropForeignKey
ALTER TABLE "DeviceDetail" DROP CONSTRAINT "DeviceDetail_businessUnitId_fkey";

-- AlterTable
ALTER TABLE "DeviceDetail" ALTER COLUMN "businessUnitId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';

-- AddForeignKey
ALTER TABLE "DeviceDetail" ADD CONSTRAINT "DeviceDetail_businessUnitId_fkey" FOREIGN KEY ("businessUnitId") REFERENCES "BusinessUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
