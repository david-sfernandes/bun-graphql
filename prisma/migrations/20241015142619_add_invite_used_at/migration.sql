/*
  Warnings:

  - You are about to drop the column `used` on the `Invite` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invite" DROP COLUMN "used",
ADD COLUMN     "usedAt" TIMESTAMP(3),
ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
