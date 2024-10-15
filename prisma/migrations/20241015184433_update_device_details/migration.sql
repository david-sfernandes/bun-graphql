/*
  Warnings:

  - You are about to drop the column `deviceId` on the `DeviceDetail` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `DeviceDetail` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `DeviceDetail` table. All the data in the column will be lost.
  - Added the required column `businessUnitId` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientVersion` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domain` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imei1` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imei2` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchaseDate` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ramal` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalRam` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalStorage` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usedStorage` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warrantyDate` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DeviceDetail" DROP CONSTRAINT "DeviceDetail_deviceId_fkey";

-- DropIndex
DROP INDEX "DeviceDetail_deviceId_key";

-- AlterTable
ALTER TABLE "DeviceDetail" DROP COLUMN "deviceId",
DROP COLUMN "name",
DROP COLUMN "value",
ADD COLUMN     "businessUnitId" INTEGER NOT NULL,
ADD COLUMN     "clientVersion" TEXT NOT NULL,
ADD COLUMN     "domain" TEXT NOT NULL,
ADD COLUMN     "groupId" INTEGER NOT NULL,
ADD COLUMN     "imei1" TEXT NOT NULL,
ADD COLUMN     "imei2" TEXT NOT NULL,
ADD COLUMN     "purchaseDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ramal" TEXT NOT NULL,
ADD COLUMN     "totalRam" TEXT NOT NULL,
ADD COLUMN     "totalStorage" TEXT NOT NULL,
ADD COLUMN     "usedStorage" TEXT NOT NULL,
ADD COLUMN     "warrantyDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';

-- AddForeignKey
ALTER TABLE "DeviceDetail" ADD CONSTRAINT "DeviceDetail_businessUnitId_fkey" FOREIGN KEY ("businessUnitId") REFERENCES "BusinessUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceDetail" ADD CONSTRAINT "DeviceDetail_id_fkey" FOREIGN KEY ("id") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
