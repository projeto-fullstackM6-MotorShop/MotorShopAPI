import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("announces")
class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  brand: string;

  @Column({ type: "varchar" })
  model: string;

  @Column({ type: "varchar" })
  fabrication_year: string;

  @Column({ type: "varchar" })
  km: string;

  @Column({ type: "varchar" })
  color: string;

  @Column({ type: "varchar" })
  fuel_type: string;

  @Column({ type: "decimal" })
  price: number;

  @Column({ type: "decimal" })
  fipe: number;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  cover_img: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @Column({ type: "boolean", default: true })
  is_active: boolean;

  @Column({ type: "boolean", default: false })
  is_good_price: boolean;
}

export default Announcement;
