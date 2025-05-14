import sql from 'mssql';

export default function devicesToTVP(devices: MilvusDevice[]) {
  const tvp = new sql.Table('DeviceInputTable');

  tvp.columns.add('id', sql.Int);
  tvp.columns.add('name', sql.NVarChar(255));
  tvp.columns.add('nickname', sql.NVarChar(255));
  tvp.columns.add('mac', sql.NVarChar(255));
  tvp.columns.add('brand', sql.NVarChar(255));
  tvp.columns.add('os', sql.NVarChar(255));
  tvp.columns.add('processor', sql.NVarChar(255));
  tvp.columns.add('username', sql.NVarChar(255));
  tvp.columns.add('serial', sql.NVarChar(255));
  tvp.columns.add('model', sql.NVarChar(255));
  tvp.columns.add('type', sql.NVarChar(255));
  tvp.columns.add('isActive', sql.Bit);
  tvp.columns.add('syncedAt', sql.DateTime);
  tvp.columns.add('client', sql.NVarChar(255));

  for (const device of devices) {
    tvp.rows.add(
      device.id,
      device.hostname || "",
      device.apelido || "",
      device.macaddres || "",
      device.marca || "",
      device.sistema_operacional || "",
      device.processador || "",
      device.usuario_logado || "",
      device.numero_serial || "",
      device.modelo_notebook || "",
      device.tipo_dispositivo_text,
      device.is_ativo,
      new Date(device.data_ultima_atualizacao),
      device.nome_fantasia
    );
  }

  return tvp;
}