import {MigrationInterface, QueryRunner} from "typeorm";

export class RelacaoClassStudent1593125154532 implements MigrationInterface {
    name = 'RelacaoClassStudent1593125154532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student_classe_class" ("studentId" uuid NOT NULL, "classId" uuid NOT NULL, CONSTRAINT "PK_537e8c6fb62af966ee1162b7784" PRIMARY KEY ("studentId", "classId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f7ebcae201a3aa8931dcad9673" ON "student_classe_class" ("studentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_692496bfb7212357a36bdbc8f5" ON "student_classe_class" ("classId") `);
        await queryRunner.query(`ALTER TABLE "student_classe_class" ADD CONSTRAINT "FK_f7ebcae201a3aa8931dcad96737" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_classe_class" ADD CONSTRAINT "FK_692496bfb7212357a36bdbc8f51" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_classe_class" DROP CONSTRAINT "FK_692496bfb7212357a36bdbc8f51"`);
        await queryRunner.query(`ALTER TABLE "student_classe_class" DROP CONSTRAINT "FK_f7ebcae201a3aa8931dcad96737"`);
        await queryRunner.query(`DROP INDEX "IDX_692496bfb7212357a36bdbc8f5"`);
        await queryRunner.query(`DROP INDEX "IDX_f7ebcae201a3aa8931dcad9673"`);
        await queryRunner.query(`DROP TABLE "student_classe_class"`);
    }

}
