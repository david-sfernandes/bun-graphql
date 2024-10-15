/*
  Warnings:

  - You are about to drop the column `inviteId` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Client` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_inviteId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_userId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "inviteId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';

-- CreateTable
CREATE TABLE "_ClientToInvite" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClientToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToInvite_AB_unique" ON "_ClientToInvite"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToInvite_B_index" ON "_ClientToInvite"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToUser_AB_unique" ON "_ClientToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToUser_B_index" ON "_ClientToUser"("B");

-- AddForeignKey
ALTER TABLE "_ClientToInvite" ADD CONSTRAINT "_ClientToInvite_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToInvite" ADD CONSTRAINT "_ClientToInvite_B_fkey" FOREIGN KEY ("B") REFERENCES "Invite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToUser" ADD CONSTRAINT "_ClientToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToUser" ADD CONSTRAINT "_ClientToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
