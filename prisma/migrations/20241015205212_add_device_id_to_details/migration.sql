/*
  Warnings:

  - Added the required column `deviceId` to the `DeviceDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE devicedetail_id_seq;
ALTER TABLE "DeviceDetail" ADD COLUMN     "deviceId" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('devicedetail_id_seq');
ALTER SEQUENCE devicedetail_id_seq OWNED BY "DeviceDetail"."id";

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
