CREATE TYPE DetailsInputTable AS TABLE (
    id INT,
    groupId INT,
    ramal NVARCHAR(255),
    imei1 NVARCHAR(255),
    imei2 NVARCHAR(255),
    domain NVARCHAR(255),
    totalRam NVARCHAR(255),
    totalStorage NVARCHAR(255),
    usedStorage NVARCHAR(255),
    purchaseDate DATETIME,
    warrantyDate DATETIME,
    clientVersion NVARCHAR(255),
    businessUnitId INT
);