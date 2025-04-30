BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000),
    [role] NVARCHAR(1000) NOT NULL CONSTRAINT [User_role_df] DEFAULT 'CLIENT',
    [isActive] BIT NOT NULL CONSTRAINT [User_isActive_df] DEFAULT 1,
    [password] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT GETDATE(),
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Invite] (
    [id] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [token] NVARCHAR(1000) NOT NULL,
    [role] NVARCHAR(1000) NOT NULL CONSTRAINT [Invite_role_df] DEFAULT 'CLIENT',
    [usedAt] DATETIME2,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Invite_createdAt_df] DEFAULT GETDATE(),
    [updatedAt] DATETIME2 NOT NULL,
    [expiresAt] DATETIME2 NOT NULL,
    CONSTRAINT [Invite_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Invite_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [Invite_token_key] UNIQUE NONCLUSTERED ([token])
);

-- CreateTable
CREATE TABLE [dbo].[Client] (
    [id] INT NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [companyName] NVARCHAR(1000) NOT NULL,
    [category] CHAR(1) NOT NULL CONSTRAINT [Client_category_df] DEFAULT 'D',
    [cnpj] NVARCHAR(1000) NOT NULL,
    [isActive] BIT NOT NULL CONSTRAINT [Client_isActive_df] DEFAULT 0,
    [contractDeviceQty] INT NOT NULL CONSTRAINT [Client_contractDeviceQty_df] DEFAULT 0,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Client_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Device] (
    [id] INT NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [nickname] NVARCHAR(1000) NOT NULL,
    [mac] NVARCHAR(1000) NOT NULL,
    [brand] NVARCHAR(1000) NOT NULL,
    [os] NVARCHAR(1000) NOT NULL,
    [processor] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [serial] NVARCHAR(1000) NOT NULL,
    [model] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [isActive] BIT NOT NULL,
    [updatedAt] DATETIME2 NOT NULL,
    [syncedAt] DATETIME2 NOT NULL CONSTRAINT [Device_syncedAt_df] DEFAULT GETDATE(),
    [clientId] INT NOT NULL,
    CONSTRAINT [Device_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SecurityStatus] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [mac] NVARCHAR(1000) NOT NULL,
    [group] NVARCHAR(1000) NOT NULL,
    [isManaged] BIT NOT NULL,
    [isManagedWithBest] BIT NOT NULL,
    [syncedAt] DATETIME2 NOT NULL CONSTRAINT [SecurityStatus_syncedAt_df] DEFAULT GETDATE(),
    [deviceId] INT,
    CONSTRAINT [SecurityStatus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[DeviceDetail] (
    [id] INT NOT NULL,
    [groupId] INT,
    [ramal] NVARCHAR(1000) NOT NULL,
    [imei1] NVARCHAR(1000) NOT NULL,
    [imei2] NVARCHAR(1000) NOT NULL,
    [domain] NVARCHAR(1000) NOT NULL,
    [totalRam] NVARCHAR(1000) NOT NULL,
    [totalStorage] NVARCHAR(1000) NOT NULL,
    [usedStorage] NVARCHAR(1000) NOT NULL,
    [purchaseDate] DATETIME2,
    [warrantyDate] DATETIME2,
    [clientVersion] NVARCHAR(1000) NOT NULL,
    [businessUnitId] INT,
    [updatedAt] DATETIME2 NOT NULL,
    [deviceId] INT,
    CONSTRAINT [DeviceDetail_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SecurityEvent] (
    [id] INT NOT NULL IDENTITY(1,1),
    [deviceName] NVARCHAR(1000) NOT NULL,
    [endpoint] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [occurrences] INT NOT NULL,
    [lastOccurrence] DATETIME2 NOT NULL,
    [module] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [companyName] NVARCHAR(1000) NOT NULL,
    [deviceId] INT,
    CONSTRAINT [SecurityEvent_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Recomendation] (
    [id] INT NOT NULL IDENTITY(1,1),
    [text] TEXT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Recomendation_createdAt_df] DEFAULT GETDATE(),
    [updatedAt] DATETIME2 NOT NULL,
    [clientId] INT NOT NULL,
    CONSTRAINT [Recomendation_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Disclaimer] (
    [id] INT NOT NULL IDENTITY(1,1),
    [text] TEXT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Disclaimer_createdAt_df] DEFAULT GETDATE(),
    [updatedAt] DATETIME2 NOT NULL,
    [clientId] INT NOT NULL,
    CONSTRAINT [Disclaimer_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[BusinessUnit] (
    [id] INT NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [street] NVARCHAR(1000) NOT NULL,
    [clientId] INT NOT NULL,
    CONSTRAINT [BusinessUnit_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[MicrosoftSku] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [MicrosoftSku_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[MicrosoftAccount] (
    [id] NVARCHAR(1000) NOT NULL,
    [displayName] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL,
    [clientId] INT NOT NULL,
    CONSTRAINT [MicrosoftAccount_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[MicrosoftSubscribedSku] (
    [id] NVARCHAR(1000) NOT NULL,
    [qty] INT NOT NULL,
    [used] INT NOT NULL,
    [updatedAt] DATETIME2 NOT NULL,
    [skuId] NVARCHAR(1000) NOT NULL,
    [clientId] INT NOT NULL,
    CONSTRAINT [MicrosoftSubscribedSku_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [MicrosoftSubscribedSku_skuId_clientId_key] UNIQUE NONCLUSTERED ([skuId],[clientId])
);

-- CreateTable
CREATE TABLE [dbo].[_ClientToInvite] (
    [A] INT NOT NULL,
    [B] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [_ClientToInvite_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateTable
CREATE TABLE [dbo].[_ClientToUser] (
    [A] INT NOT NULL,
    [B] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [_ClientToUser_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateTable
CREATE TABLE [dbo].[_MicrosoftAccountToMicrosoftSku] (
    [A] NVARCHAR(1000) NOT NULL,
    [B] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [_MicrosoftAccountToMicrosoftSku_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_ClientToInvite_B_index] ON [dbo].[_ClientToInvite]([B]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_ClientToUser_B_index] ON [dbo].[_ClientToUser]([B]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_MicrosoftAccountToMicrosoftSku_B_index] ON [dbo].[_MicrosoftAccountToMicrosoftSku]([B]);

-- AddForeignKey
ALTER TABLE [dbo].[Device] ADD CONSTRAINT [Device_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SecurityStatus] ADD CONSTRAINT [SecurityStatus_deviceId_fkey] FOREIGN KEY ([deviceId]) REFERENCES [dbo].[Device]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[DeviceDetail] ADD CONSTRAINT [DeviceDetail_deviceId_fkey] FOREIGN KEY ([deviceId]) REFERENCES [dbo].[Device]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SecurityEvent] ADD CONSTRAINT [SecurityEvent_deviceId_fkey] FOREIGN KEY ([deviceId]) REFERENCES [dbo].[Device]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Recomendation] ADD CONSTRAINT [Recomendation_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Disclaimer] ADD CONSTRAINT [Disclaimer_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[BusinessUnit] ADD CONSTRAINT [BusinessUnit_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[MicrosoftAccount] ADD CONSTRAINT [MicrosoftAccount_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[MicrosoftSubscribedSku] ADD CONSTRAINT [MicrosoftSubscribedSku_skuId_fkey] FOREIGN KEY ([skuId]) REFERENCES [dbo].[MicrosoftSku]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[MicrosoftSubscribedSku] ADD CONSTRAINT [MicrosoftSubscribedSku_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[Client]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_ClientToInvite] ADD CONSTRAINT [_ClientToInvite_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[Client]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_ClientToInvite] ADD CONSTRAINT [_ClientToInvite_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[Invite]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_ClientToUser] ADD CONSTRAINT [_ClientToUser_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[Client]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_ClientToUser] ADD CONSTRAINT [_ClientToUser_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_MicrosoftAccountToMicrosoftSku] ADD CONSTRAINT [_MicrosoftAccountToMicrosoftSku_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[MicrosoftAccount]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_MicrosoftAccountToMicrosoftSku] ADD CONSTRAINT [_MicrosoftAccountToMicrosoftSku_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[MicrosoftSku]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
