-- DropIndex
DROP INDEX "BusinessUnit_clientId_key";

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
