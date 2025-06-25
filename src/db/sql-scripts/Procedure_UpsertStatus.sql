-- DROP PROCEDURE UpsertDevices;

CREATE PROCEDURE UpsertStatus
    @StatusList StatusInputTable READONLY
AS
BEGIN
    SET NOCOUNT ON;

    MERGE INTO dbo.SecurityStatus AS Target
    USING (
        SELECT
        s.id,s.[group], s.isManaged, s.isManagedWithBest, s.mac, s.name,
        CURRENT_TIMESTAMP AS syncedAt,
        d.id as deviceId
        FROM @StatusList s
        OUTER APPLY (SELECT TOP 1 d.id FROM dbo.Device d WHERE UPPER(s.name) = UPPER(d.name) OR s.mac = d.mac ORDER BY d.id) AS d
    ) AS Source
    ON Target.id = Source.id

    WHEN MATCHED THEN
        UPDATE SET
            [id] = Source.[id],
            [group] = Source.[group],
            [isManaged] = Source.[isManaged],
            [isManagedWithBest] = Source.[isManagedWithBest],
            [mac] = Source.[mac],
            [name] = Source.[name],
            [deviceId] = Source.[deviceId],
            [syncedAt] = Source.[syncedAt]

    WHEN NOT MATCHED BY Target THEN
        INSERT ([id], [group], [isManaged], [isManagedWithBest], [mac], [name], [deviceId], [syncedAt])
        VALUES (
            Source.[id], Source.[group], Source.[isManaged], Source.[isManagedWithBest], 
            Source.[mac], Source.[name], Source.[deviceId],[syncedAt]
        );

END;


