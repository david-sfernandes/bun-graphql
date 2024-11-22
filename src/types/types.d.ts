type Role = "CLIENT" | "ADMIN" | "TECHNICIAN" | "MANAGER" | "BOT";

type JwtPayload = {
  sub: string;
  name: string;
  scope: Role;
  clients: number[];
  iat: number;
  exp: number;
};

type PrismaUser = {
  email: string;
  id: string;
  password: string;
  name: string | null;
  role: $Enums.Role;
  updatedAt: Date;
  createdAt: Date;
};
