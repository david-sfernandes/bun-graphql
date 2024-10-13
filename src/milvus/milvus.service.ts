import { firstDayOfMonth, lastDayOfMonth } from "../utils/dateUtils";

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
      console.error("Error fetching clients" + resp.statusText);
      throw new Error("Error fetching clients" + resp.statusText);
    }
    const clients: MilvusClientResp = await resp.json();
    return clients.lista;
  }

  async getDevicesByPage(page: number = 1) {
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

  async getClientTickets(clientId: number) {
    const tickets: MilvusTicket[] = [];
    let page = 1;
    let response = await this.getClientTicketsByPage(clientId, page);
    tickets.push(...response.lista);
    while (
      response.meta.paginate.current_page < response.meta.paginate.last_page
    ) {
      page++;
      response = await this.getClientTicketsByPage(clientId, page);
      tickets.push(...response.lista);
    }
    return tickets;
  }

  async getClientTicketsByPage(clientId: number, page: number = 1) {
    const url = `${this.baseUrl}/chamado/listagem?is_descending=true&order_by=codigo&total_registros=200&pagina=${page}`;
    const payload = this.buildPayload({
      cliente_id: clientId,
      data_hora_criacao_inicial: `${firstDayOfMonth()} 00:00:00`,
      data_hora_criacao_final: `${lastDayOfMonth()} 23:59:59`,
    });
    const resp = await fetch(url, {
      method: "POST",
      headers: this.headers,
      body: payload,
    });
    const tickets: MilvusTicketResp = await resp.json();
    return tickets;
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

  private buildPayload(payload: MilvusPayload) {
    const reqPayload = { filtro_body: payload };
    return JSON.stringify(reqPayload);
  }
}

export default MilvusService;
