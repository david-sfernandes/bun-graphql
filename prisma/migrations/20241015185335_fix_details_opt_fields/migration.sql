-- AlterTable
ALTER TABLE "DeviceDetail" ALTER COLUMN "groupId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
