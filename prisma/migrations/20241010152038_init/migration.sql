-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN', 'TECHNICIAN', 'MANAGER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "category" CHAR(1) NOT NULL DEFAULT 'D',
    "cnpj" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "contractDeviceQty" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "mac" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "syncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecurityStatus" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "mac" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "isManaged" BOOLEAN NOT NULL,
    "isManagedWithBest" BOOLEAN NOT NULL,
    "syncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "SecurityStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceDetail" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "DeviceDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecurityEvent" (
    "id" SERIAL NOT NULL,
    "deviceName" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "occurrences" INTEGER NOT NULL,
    "lastOccurrence" TIMESTAMP(3) NOT NULL,
    "module" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,

    CONSTRAINT "SecurityEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recomendation" (
    "id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Recomendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disclaimer" (
    "id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Disclaimer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessUnit" (
    "id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "street" BOOLEAN NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "BusinessUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MicrosoftSku" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MicrosoftSku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MicrosoftAccount" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "MicrosoftAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MicrosoftSubscribedSku" (
    "id" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "used" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "skuId" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "MicrosoftSubscribedSku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MicrosoftAccountToMicrosoftSku" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DeviceDetail_deviceId_key" ON "DeviceDetail"("deviceId");

-- CreateIndex
CREATE UNIQUE INDEX "Recomendation_clientId_key" ON "Recomendation"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Disclaimer_clientId_key" ON "Disclaimer"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessUnit_clientId_key" ON "BusinessUnit"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "_MicrosoftAccountToMicrosoftSku_AB_unique" ON "_MicrosoftAccountToMicrosoftSku"("A", "B");

-- CreateIndex
CREATE INDEX "_MicrosoftAccountToMicrosoftSku_B_index" ON "_MicrosoftAccountToMicrosoftSku"("B");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecurityStatus" ADD CONSTRAINT "SecurityStatus_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceDetail" ADD CONSTRAINT "DeviceDetail_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recomendation" ADD CONSTRAINT "Recomendation_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disclaimer" ADD CONSTRAINT "Disclaimer_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessUnit" ADD CONSTRAINT "BusinessUnit_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MicrosoftAccount" ADD CONSTRAINT "MicrosoftAccount_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MicrosoftSubscribedSku" ADD CONSTRAINT "MicrosoftSubscribedSku_skuId_fkey" FOREIGN KEY ("skuId") REFERENCES "MicrosoftSku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MicrosoftSubscribedSku" ADD CONSTRAINT "MicrosoftSubscribedSku_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MicrosoftAccountToMicrosoftSku" ADD CONSTRAINT "_MicrosoftAccountToMicrosoftSku_A_fkey" FOREIGN KEY ("A") REFERENCES "MicrosoftAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MicrosoftAccountToMicrosoftSku" ADD CONSTRAINT "_MicrosoftAccountToMicrosoftSku_B_fkey" FOREIGN KEY ("B") REFERENCES "MicrosoftSku"("id") ON DELETE CASCADE ON UPDATE CASCADE;
