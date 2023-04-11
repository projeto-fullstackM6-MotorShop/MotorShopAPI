import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1681252329914 implements MigrationInterface {
    name = 'migrations1681252329914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "announces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying NOT NULL, "model" character varying NOT NULL, "fabrication_year" character varying NOT NULL, "km" character varying NOT NULL, "color" character varying NOT NULL, "fuel_type" character varying NOT NULL, "price" numeric NOT NULL, "fipe" numeric NOT NULL, "description" character varying NOT NULL, "cover_img" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "is_good_price" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_9d7389225221375f560773aa115" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "announces"`);
    }

}
