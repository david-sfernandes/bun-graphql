-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "_ClientToInvite" ADD CONSTRAINT "_ClientToInvite_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ClientToInvite_AB_unique";

-- AlterTable
ALTER TABLE "_ClientToUser" ADD CONSTRAINT "_ClientToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ClientToUser_AB_unique";

-- AlterTable
ALTER TABLE "_MicrosoftAccountToMicrosoftSku" ADD CONSTRAINT "_MicrosoftAccountToMicrosoftSku_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_MicrosoftAccountToMicrosoftSku_AB_unique";
