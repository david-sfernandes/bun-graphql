-- DROP PROCEDURE UpsertDevices;

CREATE PROCEDURE UpsertDevices
    @Devices DeviceInputTable READONLY
AS
BEGIN
    SET NOCOUNT ON;

    MERGE INTO dbo.device AS Target
    USING (
        SELECT
        d.id, d.name, d.nickname, d.mac, d.brand, d.os, d.processor,
        d.[username], d.serial, d.model, d.[type], d.isActive, d.syncedAt,
        CURRENT_TIMESTAMP AS updatedAt,
        d.client,
        c.id as clientId
        FROM @Devices d
        OUTER APPLY (SELECT TOP 1 c.id FROM dbo.client c WHERE c.name = d.client ORDER BY c.id) AS c
        WHERE c.id IS NOT NULL
    ) AS Source
    ON Target.id = Source.id

    WHEN MATCHED THEN
        UPDATE SET
            [name] = Source.name,
            nickname = Source.nickname,
            mac = Source.mac,
            brand = Source.brand,
            os = Source.os,
            processor = Source.processor,
            [username] = Source.[username],
            [serial] = Source.serial,
            model = Source.model,
            [type] = Source.[type],
            isActive = Source.isActive,
            updatedAt = Source.updatedAt,
            syncedAt = Source.syncedAt

    WHEN NOT MATCHED BY Target THEN
        INSERT (
            id, [name], nickname, mac, brand, os, processor, [username], [serial], model, [type],
            isActive, updatedAt, syncedAt, clientId
        )
        VALUES (
            Source.id, Source.name, Source.nickname, Source.mac, Source.brand, Source.os,
            Source.processor, Source.[username], Source.serial, Source.model, Source.[type],
            Source.isActive, Source.updatedAt, Source.syncedAt, Source.clientId
        )

    WHEN NOT MATCHED BY Source THEN DELETE;

END;