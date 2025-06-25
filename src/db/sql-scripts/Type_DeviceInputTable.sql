CREATE TYPE DeviceInputTable AS TABLE (
  [id] INT,
  [name] NVARCHAR(255),
  [nickname] NVARCHAR(255),
  [mac] NVARCHAR(255),
  [brand] NVARCHAR(255),
  [os] NVARCHAR(255),
  [processor] NVARCHAR(255),
  [username] NVARCHAR(255),
  [serial] NVARCHAR(255),
  [model] NVARCHAR(255),
  [type] NVARCHAR(255),
  [isActive] BIT,
  [syncedAt] DATETIME,
  [client] NVARCHAR(255)
);