-- AlterTable
ALTER TABLE "Invite" ADD COLUMN     "used" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
