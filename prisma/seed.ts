import prisma from "@/db/prisma"
import hashPassword from "@/utils/auth/hashPassword"
import clientData from "./clients.json"
import commentsData from "./comments.json"
import recomendationData from "./recomendations.json"
import skuData from "./sku.json"
import unitsData from "./units.json"
import { syncClientDeviceStatus, syncCompanySecurityStatus } from "@/cron/daily"
import { syncDeviceDetails } from "@/cron/weekly"
import { syncSecurityEvents } from "@/cron/monthly"

async function createUsers() {
  const adminUser = Bun.env.ADMIN_USERNAME;
  const adminPass = Bun.env.ADMIN_PASSWORD;
  const adminName = Bun.env.ADMIN_NAME;

  const botUser = Bun.env.BOT_USERNAME;
  const botPass = Bun.env.BOT_PASSWORD;
  const botName = Bun.env.BOT_NAME;

  if (!adminUser || !adminPass || !adminName) {
    console.log("Admin user, password or name not set in environment variables")
    return;
  }
  if (!botUser || !botPass || !botName) {
    console.log("Bot user, password or name not set in environment variables");
    return;
  }

  const adminHash = await hashPassword(adminPass)
  const botHash = await hashPassword(botPass)
  await prisma.user.create({
    data: {
      email: adminUser, password: adminHash, isActive: true, role: "ADMIN", name: adminName
    }
  })
  await prisma.user.create({
    data: {
      email: botUser, password: botHash, isActive: true, role: "BOT", name: botName
    }
  })
}

async function seedClients() {
  let created = 0;
  let skipped = 0;
  const clients = clientData.map((c) => ({
    id: c.id,
    name: c.name,
    companyName: c.company_name,
    category: c.category || "D",
    cnpj: c.cnpj,
    isActive: c.is_active,
    contractDeviceQty: c.contract_device_qty
  }))
  for (const client of clients) {
    try {
      await prisma.client.upsert({ where: { id: client.id }, create: client, update: client })
      created++
    } catch (error) {
      skipped++
    }
  }
  console.log(`Seed clients result: ${created} created and ${skipped} skipped`)
}

async function seedRecomendations() {
  const recomendations = recomendationData.map((r) => ({
    clientId: r.client_id,
    text: r.recomendation,
    createdAt: new Date(r.create_at),
  }))
  await prisma.recomendation.createMany({ data: recomendations })
}

async function seedComments() {
  const comments = commentsData.map((c) => ({
    text: c.comment,
    clientId: c.client_id,
    createdAt: new Date(c.create_at),
  }))
  await prisma.disclaimer.createMany({ data: comments })
}

async function seedUnits() {
  const comments = unitsData.map((u) => ({
    id: u.id,
    description: u.description,
    clientId: u.client_id,
    street: u.street,
  }))
  await prisma.businessUnit.createMany({ data: comments })
}

async function seedSku() {
  const skus = skuData.map((u) => ({
    id: u.id,
    name: u.name,
  }))
  await prisma.microsoftSku.createMany({ data: skus })
}

async function run() {
  console.log("Seeding database...")
  // await createUsers()
  await seedClients()
  await seedRecomendations()
  await seedComments()
  await seedUnits()
  await seedSku()
  await syncClientDeviceStatus()
  await syncCompanySecurityStatus()
  await syncDeviceDetails()
  await syncSecurityEvents()
  console.log("End seed")
}

run()