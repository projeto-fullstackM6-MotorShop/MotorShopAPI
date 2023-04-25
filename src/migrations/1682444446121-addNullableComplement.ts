import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNullableComplement1682444446121 implements MigrationInterface {
    name = 'AddNullableComplement1682444446121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "complement" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "complement" SET NOT NULL`);
    }

}
