import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1682382951706 implements MigrationInterface {
    name = 'CreateTables1682382951706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reset_token" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reset_token" SET NOT NULL`);
    }

}
