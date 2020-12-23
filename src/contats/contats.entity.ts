import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('contats')
export class ContatsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  crm: string;

  @Column()
  tel_fixo: string;

  @Column()
  tel_celular: string;

  @Column()
  cep: string;

  @Column()
  especialidade: string;
}