-- DROP PROCEDURE UpsertEvents;

CREATE PROCEDURE UpsertEvents
    @Events EventsInputTable READONLY
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM dbo.SecurityEvent;

    INSERT INTO dbo.SecurityEvent
        ([deviceName], [module], [companyName], [endpoint], [occurrences], [type], [username], [lastOccurrence], [deviceId])
    SELECT
        e.[deviceName],
        e.[module],
        e.[companyName],
        e.[endpoint],
        e.[occurrences],
        e.[type],
        e.[username],
        e.[lastOccurrence],
        d.id as deviceId
    FROM @Events e
        OUTER APPLY (SELECT TOP 1
            d.id
        FROM dbo.Device d
        WHERE UPPER(e.[deviceName]) = UPPER(d.name)
        ORDER BY d.id) AS d;

END;