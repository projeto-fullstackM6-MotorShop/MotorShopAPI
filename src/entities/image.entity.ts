import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("images")
export class Image {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ nullable: false, unique: false })
	imageUrl: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
