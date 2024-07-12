import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
 
export const devConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'host.docker.internal',
  port: 3307,
  username: 'root',
  password: 'password',
  database: 'docker_nest_js',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
}