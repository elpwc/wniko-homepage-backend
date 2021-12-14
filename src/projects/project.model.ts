import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';

@Table
export class ProjectModel extends Model {
  @Column({
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataTypes.STRING(1024),
  })
  name: string;

  @Column({
    type: DataTypes.STRING(1024),
  })
  url: string;

  @Column({
    type: DataTypes.STRING(1024),
  })
  githuburl: string;

  @Column({
    type: DataTypes.STRING(1024),
  })
  description: string;

  @Column({
    type: DataTypes.STRING(1024),
  })
  imageUrl: string;

  @Column({
    type: DataTypes.TIME,
  })
  starttime: Date;

  @Column({
    type: DataTypes.STRING(256),
  })
  version: string;

  @Column({ type: DataTypes.STRING(10240) })
  technologies: string;
}
