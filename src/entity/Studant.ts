import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm'
import Class from './Class'
import { type } from 'os'

@Entity()
export default class Student{
  @PrimaryGeneratedColumn('uuid')
  id:string
 
  @Column()
  name: string

  @Column()
  key: string
  
  @ManyToMany(type=> Class)
  @JoinTable()
  classe: Class
 
  @CreateDateColumn({name: "created_At"})
  createdAt:Date

  @UpdateDateColumn({name: "updated_At"})
  updatedAt: Date
}