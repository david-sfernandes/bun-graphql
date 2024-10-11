import prisma from "../db/prisma";
import MilvusService from "../milvus/milvus.service";
import cleanNumericString from "../utils/cleanNumericString";

class SourceFacade {
  private readonly MilvusKey: string;
  private milvusService;
  private readonly ONE_HOUR_IN_MS = 60 * 60 * 1000;

  constructor() {
    this.MilvusKey = Bun.env.MILVUS_KEY_TERABYTE || "";
    this.milvusService = new MilvusService(this.MilvusKey);
  }

  async syncClients() {
    const clients = await this.milvusService.getClients();
    for (const client of clients) {
      await prisma.client.upsert({
        where: { id: client.id },
        update: {
          name: client.nome_fantasia || "",
          companyName: client.razao_social,
          cnpj: cleanNumericString(client.cnpj_cpf || ""),
        },
        create: {
          id: client.id,
          name: client.nome_fantasia || "",
          companyName: client.razao_social,
          cnpj: cleanNumericString(client.cnpj_cpf || ""),
        },
      });
    }
    return clients.length;
  }

  async syncDevices() {
    const devices = await this.milvusService.getAllDevices();
    let errQty = 0;

    for (const device of devices) {
      try {
        await prisma.device.upsert({
          where: { id: device.id },
          update: {
            name: device.hostname || "",
            nickname: device.apelido || "",
            mac: device.macaddres || "",
            brand: device.marca || "",
            os: device.sistema_operacional || "",
            processor: device.processador || "",
            username: device.usuario_logado || "",
            serial: device.numero_serial || "",
            model: device.modelo_notebook || "",
            type: device.tipo_dispositivo_text,
            isActive: device.is_ativo,
          },
          create: {
            id: device.id,
            name: device.hostname || "",
            nickname: device.apelido || "",
            mac: device.macaddres || "",
            brand: device.marca || "",
            os: device.sistema_operacional || "",
            processor: device.processador || "",
            username: device.usuario_logado || "",
            serial: device.numero_serial || "",
            model: device.modelo_notebook || "",
            type: device.tipo_dispositivo_text,
            isActive: device.is_ativo,
            client: {
              connect: {
                id: (
                  await prisma.client.findFirstOrThrow({
                    where: {
                      name: {
                        contains: device.nome_fantasia,
                      },
                    },
                  })
                ).id,
              },
            },
          },
        });
      } catch (error) {
        errQty++;
      }
    }

    if (errQty > 0) console.error(`Error on sync ${errQty} devices`);

    return devices.length - errQty;
  }

  async deleteOldDevices() {
    const devices = await prisma.device.findMany({
      where: {
        updatedAt: {
          lt: new Date(Date.now() - this.ONE_HOUR_IN_MS),
        },
      },
    });
    console.log(`- Deleted ${devices.length} old devices`);
  }

  async syncAll() {
    const updatedClients = await this.syncClients();
    console.log(`< Updated ${updatedClients} clients`);
    const updatedDevices = await this.syncDevices();
    console.log(`< Updated ${updatedDevices} devices`);
  }
}

export default SourceFacade;
