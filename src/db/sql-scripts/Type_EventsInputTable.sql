DROP TYPE EventsInputTable

CREATE TYPE EventsInputTable AS TABLE (
    [deviceName] NVARCHAR(255),
    [module] NVARCHAR(255),
    [companyName] NVARCHAR(255),
    [endpoint] NVARCHAR(255),
    [occurrences] INT,
    [type] NVARCHAR(255),
    [username] NVARCHAR(255),
    [lastOccurrence] DATETIME
);