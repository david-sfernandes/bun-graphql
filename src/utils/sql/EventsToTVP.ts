import sql from "mssql";

export default function eventsToTVP(events: Record<string, string>[]) {
  const tvp = new sql.Table("EventsInputTable");

  tvp.columns.add("deviceName", sql.NVarChar(255));
  tvp.columns.add("module", sql.NVarChar(255));
  tvp.columns.add("companyName", sql.NVarChar(255));
  tvp.columns.add("endpoint", sql.NVarChar(255));
  tvp.columns.add("occurrences", sql.Int);
  tvp.columns.add("type", sql.NVarChar(255));
  tvp.columns.add("username", sql.NVarChar(255));
  tvp.columns.add("lastOccurrence", sql.DateTime);

  for (const event of events) {
    tvp.rows.add(
      event["Nome do Endpoint"],
      event.Módulo,
      event["Nome da Empresa"],
      event["FQDN do Endpoint"],
      Number.parseInt(event["Ocorrências"], 10),
      event["Tipo de Evento"],
      event.Usuário,
      new Date(event["Ultima ocorrência"]),
    );
  }

  return tvp;
}
