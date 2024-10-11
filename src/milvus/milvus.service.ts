class MilvusService {
  private readonly key: string;
  private readonly baseUrl = "https://apiintegracao.milvus.com.br/api";

  constructor(key: string) {
    this.key = key;
  }

  async getClients() {
    const url = `${this.baseUrl}/cliente/busca`;
    const resp = await fetch(url, {
      headers: {
        Authorization: this.key,
      },
    });
    if (!resp.ok) {
      console.error("Error fetching clients" + resp.statusText);
      throw new Error("Error fetching clients" + resp.statusText);
    }
    const clients: MilvusClientResponse = await resp.json();
    console.log(clients);
    return clients.lista;
  }

  async getDevicesByPage(page: number = 1) {
    const path = "/dispositivos/listagem?total_registros=1000&order_by=id&is_descending=false&pagina=";
    const url = `${this.baseUrl}${path}${page}`;

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: this.key,
      },
    });
    const devices: MilvusDeviceResponse = await resp.json();
    return devices;
  }

  async getAllDevices() {
    let page = 1;
    let devices: MilvusDevice[] = [];
    let response = await this.getDevicesByPage(page);
    devices = devices.concat(response.lista);
    while (response.meta.paginate.current_page < response.meta.paginate.last_page) {
      page++;
      response = await this.getDevicesByPage(page);
      devices = devices.concat(response.lista);
    }
    return devices;
  }
}

export default MilvusService;
