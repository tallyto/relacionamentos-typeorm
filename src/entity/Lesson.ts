import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import Content from "./Content";
import Class from "./Class";

@Entity()
export default class Lesson {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  // 1 migração
  @OneToOne(type => Content, lesson => Lesson)
  content: Content

  // 2 migração
  @ManyToOne((type) => Class, (lesson) => Lesson, {eager: true})
  classe: Class;

  @CreateDateColumn({ name: "created_At" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_At" })
  updatedAt: Date;
}
