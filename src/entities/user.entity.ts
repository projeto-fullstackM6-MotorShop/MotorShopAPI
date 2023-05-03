import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Announcement from "./announce.entity";
import Address from "./address.entity";
import Comment from "./comment.entity";

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
  description: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "boolean", default: false })
  is_seller: boolean;

  @Column({ type: "varchar", nullable: true })
  reset_token: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @OneToMany(() => Announcement, (announcements) => announcements.user)
  annoucements: Announcement[];

  @OneToOne(() => Address, (address) => address.user)
  address: Address;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}

export default User;
