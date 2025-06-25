CREATE TYPE StatusInputTable AS TABLE (
  [id] NVARCHAR(255),
  [group] NVARCHAR(255),
  [isManaged] BIT,
  [isManagedWithBest] BIT,
  [mac] NVARCHAR(255),
  [name] NVARCHAR(255)
);