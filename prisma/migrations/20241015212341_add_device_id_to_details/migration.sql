/*
  Warnings:

  - You are about to drop the column `deviceId` on the `DeviceDetail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DeviceDetail" DROP COLUMN "deviceId";

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
