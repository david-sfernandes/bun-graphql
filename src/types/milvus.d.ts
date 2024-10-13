type MilvusClient = {
  id: number;
  nome_fantasia: string?;
  razao_social: string;
  cnpj_cpf: string?;
  token: string;
};

type MilvusClientResp = {
  lista: MilvusClient[];
};

type MilvusMeta = {
  paginate: {
    current_page: number;
    total: number;
    to: number;
    from: number;
    last_page: number;
    per_page: string;
  };
};

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

type MilvusDeviceResp = {
  meta: MilvusMeta;
  lista: MilvusDevice[];
};

type MilvusTicket = {
  id: number;
  tipo_ticket: string;
  categoria_primaria: string;
  categoria_secundaria: string;
  total_avaliacao: number;
  tecnico: string;
  mesa_trabalho: string;
  data_solucao: string;
  dispositivo_vinculado: { hostname: string };
  data_resposta: string;
  setor: string;
  prioridade: string;
  codigo: number;
  cliente: string;
  assunto: string;
  contato: string;
  data_criacao: string;
  total_horas: string;
  origem: string;
  status: string;
  urgencia: string;
  sla: MilvusSla?;
  status_sla_resposta: string;
  status_sla_solucao: string;
};

type MilvusTicketResp = {
  meta: MilvusMeta;
  lista: MilvusTicket[];
};

type MilvusSla = {
  resposta: {
    tempo_gasto: string;
  };
  solucao: {
    tempo_gasto: string;
  };
};

type MilvusPayload = {
  assunto?: string;
  cliente_id?: number;
  data_hora_criacao_inicial?: string;
  data_hora_criacao_final?: string;
  chamado_categoria_primaria?: string;
  chamado_categoria_secundaria?: string;
};

type MilvusBusinessUnitResp = {
  status_code: number;
  dropdown: {
    id: number;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    descricao: string;
  };
};

type MilvusDeviceDetails = {
  id: number;
  cliente_id: number;
  dominio: string;
  mobile_sim1_imei: string;
  mobile_sim2_imei: string;
  ramal: string;
  grupo_dispositivo_id: number;
  unidade_negocio_id: number;
  data_exclusao: string;
  ram_total: string;
  mobile_storage_interno_total: string;
  mobile_storage_interno_utilizado: string;
  data_compra: string;
  data_garantia: string;
  versao_client: string;
};

type MilvusDeviceDetailsResp = {
  lista: MilvusDeviceDetails[];
};
