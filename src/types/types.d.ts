type MilvusClient = {
  id: number;
  nome_fantasia: string?;
  razao_social: string;
  cnpj_cpf: string?;
  token: string;
};

type MilvusClientResponse = {
  lista: MilvusClient[];
};

type MilvusDeviceMeta = {
  paginate: {
    current_page: number;
    total: number;
    to: number;
    from: number;
    last_page: number;
    per_page: string;
  }
}

type MilvusDevice = {
  apelido: string?;
  data_compra: string;
  data_garantia: string;
  data_criacao: string;
  data_ultima_atualizacao: string;
  domain: string;
  fabricante: string?;
  hostname: string?;
  id: number;
  ip_interno: string;
  is_ativo: boolean;
  ip_externo: string;
  macaddres: string?;
  marca: string?;
  modelo_notebook: string?;
  numero_serial: string?;
  nome_fantasia: string;
  observacao: string;
  placa_mae: string;
  placa_mae_serial: string;
  processador: string?;
  placa_mae_modelo: string;
  sistema_operacional: string?;
  sistema_operacional_licenca: string;
  total_processadores: number;
  tipo_dispositivo_text: string;
  tipo_dispositivo_icone: string;
  usuario_logado: string?;
  versao_client: string;
};

type MilvusDeviceResponse = {
  meta: MilvusDeviceMeta;
  lista: MilvusDevice[];
};
