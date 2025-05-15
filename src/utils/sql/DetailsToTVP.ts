import sql from 'mssql';

export default function detailsToTVP(detailsList: MilvusDeviceDetails[]) {
  const tvp = new sql.Table('DetailsInputTable');

  tvp.columns.add("id", sql.Int)
  tvp.columns.add("groupId", sql.Int)
  tvp.columns.add("ramal", sql.NVarChar(255))
  tvp.columns.add("imei1", sql.NVarChar(255))
  tvp.columns.add("imei2", sql.NVarChar(255))
  tvp.columns.add("domain", sql.NVarChar(255))
  tvp.columns.add("totalRam", sql.NVarChar(255))
  tvp.columns.add("totalStorage", sql.NVarChar(255))
  tvp.columns.add("usedStorage", sql.NVarChar(255))
  tvp.columns.add("purchaseDate", sql.DateTime)
  tvp.columns.add("warrantyDate", sql.DateTime)
  tvp.columns.add("clientVersion", sql.NVarChar(255))
  tvp.columns.add("businessUnitId", sql.Int)

  for (const detail of detailsList) {
    tvp.rows.add(
      detail.id,
      detail.grupo_dispositivo_id || null,
      detail.ramal || "",
      detail.mobile_sim1_imei || "",
      detail.mobile_sim2_imei || "",
      detail.dominio || "",
      detail.ram_total || "",
      detail.mobile_storage_interno_total || "",
      detail.mobile_storage_interno_utilizado || "",
      detail.data_compra ? new Date(detail.data_compra) : null,
      detail.data_garantia ? new Date(detail.data_garantia) : null,
      detail.versao_client || "",
      detail.unidade_negocio_id || null
    );
  }

  return tvp;
}