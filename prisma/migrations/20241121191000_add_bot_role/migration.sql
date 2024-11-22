-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'BOT';

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
