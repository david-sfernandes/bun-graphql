-- AlterTable
ALTER TABLE "BusinessUnit" ALTER COLUMN "street" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
