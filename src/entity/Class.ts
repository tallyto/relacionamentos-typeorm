import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import Lesson from './Lesson'
import { type } from 'os'

@Entity()
export default class Class{
  @PrimaryGeneratedColumn('uuid')
  id:string
  
  @Column()
  name: string
 
  @Column()
  duration: number
  
  // 2 migração 
  @OneToMany(type=>Lesson , classe=> Class)
  lessons: Lesson[];

  @CreateDateColumn({name: "created_At"})
  createdAt:Date

  @UpdateDateColumn({name: "updated_At"})
  updatedAt: Date
}