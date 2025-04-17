import { firstDayPreviousMonth, lastDayPreviousMonth } from "../utils/dateUtils";

class MilvusService {
  private readonly key: string;
  private readonly baseUrl = "https://apiintegracao.milvus.com.br/api";
  private headers;

  constructor(key: string) {
    this.key = key;
    this.headers = {
      "Content-Type": "application/json",
      Authorization: this.key,
    };
  }

  async getClients() {
    const url = `${this.baseUrl}/cliente/busca`;
    const resp = await fetch(url, { headers: this.headers });
    if (!resp.ok) {
      console.error(`Error fetching clients ${resp.statusText}`);
      throw new Error(`Error fetching clients ${resp.statusText}`);
    }
    const clients: MilvusClientResp = await resp.json();
    return clients.lista;
  }

  async getDevicesByPage(page = 1) {
    const path =
      "/dispositivos/listagem?total_registros=1000&order_by=id&is_descending=false&pagina=";
    const url = `${this.baseUrl}${path}${page}`;

    const resp = await fetch(url, {
      method: "POST",
      headers: this.headers,
    });
    const devices: MilvusDeviceResp = await resp.json();
    return devices;
  }

  async getAllDevices() {
    let page = 1;
    let devices: MilvusDevice[] = [];
    let response = await this.getDevicesByPage(page);
    devices = devices.concat(response.lista);
    while (
      response.meta.paginate.current_page < response.meta.paginate.last_page
    ) {
      page++;
      response = await this.getDevicesByPage(page);
      devices = devices.concat(response.lista);
    }
    return devices;
  }

  async getClientBusinessUnits(clientId: number, key: string) {
    const url = `https://api.milvus.com.br/api/clienteendereco/dropdown?cliente_id=${clientId}`;
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
    });
    const businessUnits: MilvusBusinessUnitResp = await resp.json();
    return businessUnits.dropdown;
  }

  async getDeviceDetails() {
    const url = "https://apiintegracao.milvus.com.br/api/dispositivos/buscar";
    const resp = await fetch(url, {
      headers: this.headers,
    });
    const deviceDetails: MilvusDeviceDetailsResp = await resp.json();
    return deviceDetails.lista;
  }

  async getClientDeviceDetails(client_id: number) {
    const url = `https://apiintegracao.milvus.com.br/api/dispositivos/buscar?cliente=${client_id}`;
    const resp = await fetch(url, { headers: this.headers });
    const deviceDetails: MilvusDeviceDetailsResp = await resp.json();
    return deviceDetails.lista;
  }

  async getTickets(clientId: number) {
    const milvusTickets: MilvusTicketResp = await this.getTicketsByPage(
      clientId,
      1
    );
    const tickets: Ticket[] = this.formatTickets(milvusTickets.lista);
    if (milvusTickets.meta.paginate.last_page === 1) return tickets;
    for (let i = 2; i <= milvusTickets.meta.paginate.last_page; i++) {
      const response = await this.getTicketsByPage(i, clientId);
      tickets.push(...this.formatTickets(response.lista));
    }
    return tickets;
  }

  async getTicketsByPage(clientId: number, page = 1) {
    const payload = this.buildPayload({
      cliente_id: clientId,
      data_hora_criacao_inicial: `${firstDayPreviousMonth()} 00:00:00`,
      data_hora_criacao_final: `${lastDayPreviousMonth()} 23:59:59`,
    });
    const url = `${this.baseUrl}/chamado/listagem?is_descending=true&order_by=codigo&total_registros=200&pagina=${page}`;
    const resp = await fetch(url, {
      method: "POST",
      headers: this.headers,
      body: payload,
    });
    return await resp.json();
  }

  private formatTickets(tickets: MilvusTicket[]) {
    const formattedTickets: Ticket[] = tickets.map((ticket) => ({
      id: ticket.id,
      assunto: ticket.assunto,
      categoria_primaria: ticket.categoria_primaria,
      categoria_secundaria: ticket.categoria_secundaria,
      cliente: ticket.cliente,
      codigo: ticket.codigo,
      data_criacao: ticket.data_criacao,
      contato: ticket.contato,
      data_resposta: ticket.data_resposta,
      data_solucao: ticket.data_solucao,
      mesa_trabalho: ticket.mesa_trabalho,
      prioridade: ticket.prioridade,
      status: ticket.status,
      origem: ticket.origem,
      setor: ticket.setor,
      tecnico: ticket.tecnico,
      tipo_ticket: ticket.tipo_ticket,
      total_avaliacao: ticket.total_avaliacao,
      urgencia: ticket.urgencia,
      total_horas: ticket.total_horas,
      status_sla_resposta: ticket.status_sla_resposta,
      status_sla_solucao: ticket.status_sla_solucao,
      dispositivo_vinculado: ticket.dispositivo_vinculado?.hostname || "",
      sla_resposta_tempo: ticket.sla?.resposta.tempo_gasto || "",
      sla_solucao_tempo: ticket.sla?.solucao.tempo_gasto || "",
    }));

    return formattedTickets;
  }

  private buildPayload(payload: MilvusPayload) {
    const reqPayload = { filtro_body: payload };
    return JSON.stringify(reqPayload);
  }
}

export default MilvusService;
