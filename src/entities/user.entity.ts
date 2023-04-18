import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Announcement from "./announce.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar", unique: true, length: 11 })
  cpf: string;

  @Column({ type: "varchar", length: 11 })
  phone: string;

  @Column({ type: "varchar" })
  birth_date: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "boolean", default: false })
  is_seller: boolean;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @OneToMany(() => Announcement, (announce) => announce.user)
  annoucements: Announcement[];
}

export default User;
