import prisma from "@/db/prisma";
import BitdefenderService from "@/services/bitdefender.service";
import MilvusService from "@/services/milvus.service";
import cleanNumericString from "@/utils/cleanNumericString";
import chalk from "chalk";

class SourceFacade {
  private readonly milvusKey: string;
  private readonly bitdefenderKey: string;
  private readonly securityReportId: string;
  private milvusService;
  private bitdefenderService;
  private readonly ONE_HOUR_IN_MS = 60 * 60 * 1000;

  constructor() {
    this.milvusKey = Bun.env.MILVUS_KEY_TERABYTE || "";
    this.bitdefenderKey = Bun.env.BITDEFENDER_KEY_TERABYTE || "";
    this.securityReportId = Bun.env.BITDEFENDER_SEC_REPORT_ID || "";

    this.bitdefenderService = new BitdefenderService(
      this.bitdefenderKey,
      this.securityReportId,
    );
    this.milvusService = new MilvusService(this.milvusKey);
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

  async syncDeviceDetails() {
    // const deviceDetails = await this.milvusService.getDeviceDetails();
    const deviceDetails = [
      {
        id: 162209,
        cliente_id: 86589,
        grupo_dispositivo_id: null,
        hostname: "TNKSPNB8",
        data_criacao: "2019-08-21T18:36:17.000Z",
        data_ultima_atualizacao: "2025-04-30T19:04:24.000Z",
        ip_interno: "192.168.1.144",
        mobile_is_tablet: false,
        ip_externo: "200.155.132.250",
        cpu_usage: "0%",
        is_vm: false,
        dominio: "",
        sistema_operacional: "Microsoft Windows 11 Pro",
        sistema_operacional_licenca: "W4G8Q-89NGW-F7BDB-42VYH-BDWXC",
        sistema_operacional_servicepack: "10.0.22631.0",
        ram_total: "16 GB",
        ram_usage: "76,75%",
        placa_mae: "Dell Inc.",
        placa_mae_serial: "/6LGLVN2/BRCMJ0082R003D/",
        processador: "Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz",
        macaddres: "20:04:0F:FE:5D:51",
        versao_client: "106.0.0.0",
        temperatura_cpu: "43,80",
        observacao: "",
        is_servidor: false,
        teamviewer_id: "555826868",
        TipoDispositivo: 5,
        is_ativo: true,
        is_tablet: false,
        gps_latitude: null,
        gps_longitude: null,
        mobile_sync_tipo: null,
        mobile_sync_tempo: null,
        mobile_bateria_porcentagem: null,
        mobile_bateria_temperatura: null,
        mobile_versao_android: null,
        mobile_versao_ios: null,
        mobile_versao_windows_phone: null,
        mobile_fabricante: null,
        mobile_modelo: null,
        mobile_processador: null,
        mobile_versao_firmware: null,
        mobile_hardware: null,
        mobile_serial: null,
        mobile_macaddress: null,
        mobile_ip: null,
        mobile_gateway: null,
        mobile_netmask: null,
        mobile_dhcp_server: null,
        mobile_dns_primario: null,
        mobile_dns_secundario: null,
        mobile_conexao_movel: null,
        mobile_ssid: null,
        mobile_bssid: null,
        mobile_blueetooth_nome: null,
        mobile_memoria_total: null,
        mobile_memoria_utilizada: null,
        mobile_memoria_disponivel: null,
        mobile_storage_interno_total: "1153,94 GB",
        mobile_storage_interno_utilizado: "126,61 GB",
        mobile_storage_interno_disponivel: "1027,33 GB",
        mobile_storage_externo_total: null,
        mobile_storage_externo_utilizado: null,
        mobile_storage_externo_disponivel: null,
        mobile_is_dual_chip: false,
        mobile_sim1_is_ativo: false,
        mobile_sim2_is_ativo: false,
        mobile_sim1_operadora: null,
        mobile_sim2_operadora: null,
        mobile_sim1_imei: null,
        mobile_sim2_imei: null,
        mobile_sim1_rede: null,
        mobile_sim2_rede: null,
        mobile_sim1_iso: null,
        mobile_sim2_iso: null,
        mobile_tecnologia_transmissao: null,
        mobile_roaming: null,
        mobile_numero_sim1: null,
        mobile_numero_sim2: null,
        mobile_sim1_correiodevoz: null,
        mobile_sim2_correiodevoz: null,
        mobile_sim1_is_roaming: false,
        mobile_sim2_is_roaming: false,
        mobile_wifi_status: null,
        mobile_blueetooth_status: null,
        mobile_view_novo_chamado: null,
        mobile_view_inventario: null,
        mobile_is_view_block_app: null,
        usuario_logado: "FabianoPalharesThink",
        usuario_email_logado: null,
        apelido: "Fabiano Palhares",
        is_agent: true,
        tipo_agent_id: 1,
        total_processadores: 4,
        arquitetura_sistema_operacional: "x64",
        data_exclusao: null,
        possui_antivirus: true,
        numero_serial: "6LGLVN2",
        proxy_endereco: null,
        proxy_porta: null,
        proxy_usuario: null,
        proxy_senha: null,
        sistema_operacional_versao_build: "22631",
        sistema_operacional_disco: "C:\\",
        is_notebook: true,
        total_alertas: 9,
        placa_mae_product: "082HPJ",
        total_maximo_slots: 1,
        placa_mae_modelo: "",
        data_compra: "2019-03-15T15:00:00.000Z",
        data_garantia: "2020-03-15T15:00:00.000Z",
        modelo_notebook: "Inspiron 7572",
        nobreak_id: null,
        localizacao: null,
        TipoNobreak_id: null,
        is_nobreak: null,
        potencia: null,
        voltagem_entrada: null,
        voltagem_saida: null,
        fabricante: null,
        numero_serie_bateria: null,
        tempo_de_troca_bateria: null,
        periferico_rede_id: null,
        is_wireless: null,
        wireless_ssid: null,
        wireless_senha: null,
        is_usb: null,
        patrimonio: "Diretor",
        marca: null,
        modelo: null,
        cod_tercerizada: null,
        rede: null,
        qtd_portas: null,
        TipoPerifericoRedeVelocidade: null,
        TipoPerifericoRede: null,
        is_gerenciavel: null,
        armazenamento: null,
        dispositivo_locado_id: null,
        is_locado: false,
        firewall_ativo: true,
        sistema_operacional_atualizado: false,
        status_vulnerabilidade_id: 1,
        tipo_dispositivo_id: 3,
        porta_sip: null,
        servidor_voip: null,
        numero_telefone: null,
        ramal: null,
        possui_display: false,
        portas_rtp: null,
        usuario: null,
        senha: null,
        update_ativo: true,
        perfil_maquina_id: null,
        possui_snmp: false,
        fabricante_id: null,
        is_home_office: false,
        porta_snmp: null,
        oid_snmp: null,
        tempo_operacao_snmp: null,
        contato_snmp: null,
        agent_getscreen_id: null,
        unidade_negocio_id: null,
        data_ultima_atualizacao_conexao: null,
        winget_instalado: true,
        contato_email: "fabiano.palhares@thinkconstrutora.com.br",
        contato_nome: "Fabiano Palhares",
        identificador_unico: null,
        tipo_criacao_id: null,
      }
    ];
    console.log("Example: ", deviceDetails[0]);
    for (const detail of deviceDetails) {
      const data = {
        clientVersion: detail.versao_client || "",
        domain: detail.dominio || "",
        imei1: detail.mobile_sim1_imei || "",
        imei2: detail.mobile_sim2_imei || "",
        ramal: detail.ramal || "",
        totalRam: detail.ram_total || "",
        totalStorage: detail.mobile_storage_interno_total || "",
        usedStorage: detail.mobile_storage_interno_utilizado || "",
        groupId: detail.grupo_dispositivo_id || null,
        businessUnitId: detail.unidade_negocio_id || null,
        purchaseDate: detail.data_compra ? new Date(detail.data_compra) : null,
        warrantyDate: detail.data_garantia ? new Date(detail.data_garantia) : null,
        deviceId: detail.id
      }
      try {
        await prisma.deviceDetail.upsert({
          where: { id: detail.id },
          update: data,
          create: { ...data, id: detail.id },
        });
      } catch (error) {
        console.error(
          chalk.bgRed(
            `Error on sync device detail: ${detail.id} Unit: ${detail.unidade_negocio_id} \n ${error}`,
          ),
        );
      }
    }
    return deviceDetails.length;
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

  async syncCompanySecurityStatus() {
    const groups = await this.bitdefenderService.getCompaniesGroups();
    await this.syncStatusByGroup(groups);

    const subFolders = await this.bitdefenderService.getSubFolders(groups);
    await this.syncStatusByGroup(subFolders);
    return groups.length;
  }

  async syncNetworkSecurityStatus() {
    const groups = await this.bitdefenderService.getNetworkGroups();
    await this.syncStatusByGroup(groups);

    const subFolders = await this.bitdefenderService.getSubFolders(groups);
    await this.syncStatusByGroup(subFolders);
    return groups.length;
  }

  private async syncStatusByGroup(groups: SecurityGroup[]) {
    for (const group of groups) {
      if (!group.id || !group.name) continue;
      const statusList = await this.bitdefenderService.getStausByGroup(
        group.id,
      );
      await this.upsertStatusList(statusList, group.name);
      console.log(
        chalk.yellow(
          `< Updated ${statusList.length} status from ${group.name}`,
        ),
      );
    }
  }

  private async upsertStatusList(
    statusList: SecurityStatus[],
    groupName: string,
  ) {
    for (const status of statusList) {
      const device = await prisma.device.findFirst({
        where: {
          OR: [{ mac: status.macs[0] }, { name: status.name }],
        },
      });
      await prisma.securityStatus.upsert({
        where: { id: status.id },
        update: {
          group: groupName,
          id: status.id,
          isManaged: status.isManaged,
          isManagedWithBest: status.managedWithBest || status.managedRelay,
          mac: status.macs[0],
          name: status.name,
          syncedAt: new Date(),
        },
        create: {
          group: groupName,
          id: status.id,
          isManaged: status.isManaged,
          isManagedWithBest:
            status?.managedWithBest || status?.managedRelay || false,
          mac: status.macs[0],
          name: status.name,
          syncedAt: new Date(),
          ...(device && {
            device: {
              connect: {
                id: device.id,
              },
            },
          }),
        },
      });
    }
  }

  async syncSecurityEvents() {
    prisma.securityEvent.deleteMany({});
    const events = (await this.bitdefenderService.getSecurityEvents()) || [];
    await this.saveSecurityEvents(events);
    console.log(chalk.magenta(`< Updated ${events.length} security events`));
    return events.length;
  }

  private async saveSecurityEvents(CSVEvents: Record<string, string>[]) {
    const mountedEvents = [];
    const filteredEvents = CSVEvents.filter((event) =>
      this.bitdefenderService.isEventValid(event),
    );

    for (const event of filteredEvents) {
      const device = await prisma.device.findFirst({
        where: {
          OR: [{ mac: event.MAC }, { name: event["Nome do Endpoint"] }],
        },
      });
      mountedEvents.push({
        deviceName: event["Nome do Endpoint"],
        module: event.Módulo,
        companyName: event["Nome da Empresa"],
        endpoint: event["FQDN do Endpoint"],
        occurrences: Number.parseInt(event["Ocorrências"]),
        type: event["Tipo de Evento"],
        username: event.Usuário,
        lastOccurrence: new Date(event["Ultima ocorrência"]),
        deviceId: device?.id || null,
      });
    }
    const insertedRows = await prisma.securityEvent.createMany({
      data: mountedEvents,
    });
    return insertedRows.count;
  }
}

export default SourceFacade;
