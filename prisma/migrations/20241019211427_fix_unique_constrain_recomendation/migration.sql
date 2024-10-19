-- DropIndex
DROP INDEX "Disclaimer_clientId_key";

-- DropIndex
DROP INDEX "Recomendation_clientId_key";

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
