-- AlterTable
CREATE SEQUENCE disclaimer_id_seq;
ALTER TABLE "Disclaimer" ALTER COLUMN "id" SET DEFAULT nextval('disclaimer_id_seq');
ALTER SEQUENCE disclaimer_id_seq OWNED BY "Disclaimer"."id";

-- AlterTable
ALTER TABLE "Invite" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '7 days';

-- AlterTable
CREATE SEQUENCE recomendation_id_seq;
ALTER TABLE "Recomendation" ALTER COLUMN "id" SET DEFAULT nextval('recomendation_id_seq');
ALTER SEQUENCE recomendation_id_seq OWNED BY "Recomendation"."id";
