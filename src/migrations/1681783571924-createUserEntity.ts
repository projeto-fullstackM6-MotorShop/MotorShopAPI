import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserEntity1681783571924 implements MigrationInterface {
    name = 'createUserEntity1681783571924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(11) NOT NULL, "birth_date" character varying NOT NULL, "password" character varying NOT NULL, "is_seller" boolean NOT NULL DEFAULT false, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying NOT NULL, "model" character varying NOT NULL, "fabrication_year" character varying NOT NULL, "km" character varying NOT NULL, "color" character varying NOT NULL, "fuel_type" character varying NOT NULL, "price" numeric NOT NULL, "fipe" numeric NOT NULL, "description" character varying NOT NULL, "cover_img" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "is_good_price" boolean NOT NULL DEFAULT false, "userId" uuid, CONSTRAINT "PK_9d7389225221375f560773aa115" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "announces" ADD CONSTRAINT "FK_967f35a377367271b6f9ffc47c6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announces" DROP CONSTRAINT "FK_967f35a377367271b6f9ffc47c6"`);
        await queryRunner.query(`DROP TABLE "announces"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
