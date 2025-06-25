-- DROP PROCEDURE UpsertDetails;

CREATE PROCEDURE UpsertDetails
    @DetailsList DetailsInputTable READONLY
AS
BEGIN
    SET NOCOUNT ON;

    MERGE INTO dbo.DeviceDetail AS Target
    USING (
        SELECT
        d.id, d.groupId, d.ramal, d.imei1, d.imei2, d.domain, d.totalRam, d.totalStorage,
        d.usedStorage, d.purchaseDate, d.warrantyDate, d.clientVersion, d.businessUnitId,
        CURRENT_TIMESTAMP AS updatedAt
    FROM @DetailsList d
    INNER JOIN dbo.Device dv ON dv.id = d.id) AS Source
    ON Target.id = Source.id

    WHEN MATCHED THEN
        UPDATE SET
            id = Source.id,
            groupId = Source.groupId,
            ramal = Source.ramal,
            imei1 = Source.imei1,
            imei2 = Source.imei2,
            domain = Source.domain,
            totalRam = Source.totalRam,
            totalStorage = Source.totalStorage,
            usedStorage = Source.usedStorage,
            purchaseDate = Source.purchaseDate,
            warrantyDate = Source.warrantyDate,
            clientVersion = Source.clientVersion,
            businessUnitId = Source.businessUnitId,
            updatedAt = Source.updatedAt,
            deviceId = Source.id

    WHEN NOT MATCHED BY Target THEN
        INSERT (id, groupId, ramal, imei1, imei2, domain, totalRam, totalStorage, usedStorage, purchaseDate, warrantyDate, clientVersion, businessUnitId, updatedAt, deviceId)
        VALUES (
            Source.id, Source.groupId, Source.ramal, Source.imei1, Source.imei2, Source.domain, Source.totalRam, Source.totalStorage, Source.usedStorage, Source.purchaseDate, 
            Source.warrantyDate, Source.clientVersion, Source.businessUnitId, Source.updatedAt, Source.id
        )
    WHEN NOT MATCHED BY Source THEN DELETE;
END;