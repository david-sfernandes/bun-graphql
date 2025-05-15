import sql from 'mssql';

export default function statusToTVP(statusList: SecurityStatus[], groupName: string) {
  const tvp = new sql.Table('StatusInputTable');

  tvp.columns.add('id', sql.NVarChar(255))
  tvp.columns.add('group', sql.NVarChar(255))
  tvp.columns.add('isManaged', sql.Bit)
  tvp.columns.add('isManagedWithBest', sql.Bit)
  tvp.columns.add('mac', sql.NVarChar(255))
  tvp.columns.add('name', sql.NVarChar(255))

  for (const status of statusList) {
    tvp.rows.add(
      status.id,
      groupName,
      status.isManaged,
      status.managedWithBest || status.managedRelay || false,
      status.macs[0],
      status.name
    );
  }

  return tvp;
}