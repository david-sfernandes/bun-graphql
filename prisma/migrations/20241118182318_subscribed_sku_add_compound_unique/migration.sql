/*
  Warnings:

  - A unique constraint covering the columns `[skuId,clientId]` on the table `MicrosoftSubscribedSku` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';

-- CreateIndex
CREATE UNIQUE INDEX "MicrosoftSubscribedSku_skuId_clientId_key" ON "MicrosoftSubscribedSku"("skuId", "clientId");
