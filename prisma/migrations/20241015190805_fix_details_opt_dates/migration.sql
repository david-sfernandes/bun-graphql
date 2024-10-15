-- AlterTable
ALTER TABLE "DeviceDetail" ALTER COLUMN "purchaseDate" DROP NOT NULL,
ALTER COLUMN "warrantyDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';
