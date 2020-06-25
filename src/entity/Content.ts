import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import Lesson from './Lesson'

@Entity()
export default class Content{
  @PrimaryGeneratedColumn('uuid')
  id:string
 
  @Column()
  description: string

  @Column()
  linkContent: string

  // // 1 migração
  @OneToOne(type => Lesson, content => Content, {eager: true})
  @JoinColumn()
  lesson: Lesson 
 
  @CreateDateColumn({name: "created_At"})
  createdAt:Date

  @UpdateDateColumn({name: "updated_At"})
  updatedAt: Date
}