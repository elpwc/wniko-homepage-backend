import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';

@Table
export class TechnologyModel extends Model {
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
    type: DataTypes.STRING(64),
    defaultValue: 'lightblue',
  })
  color: string;

  @Column({
    type: DataTypes.STRING(1024),
  })
  description: string;
}
