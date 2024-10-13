/*
  Warnings:

  - The primary key for the `SecurityStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "SecurityStatus" DROP CONSTRAINT "SecurityStatus_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SecurityStatus_pkey" PRIMARY KEY ("id");
