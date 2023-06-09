import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

const dataKey: any = require("./data-key.json");

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "aws.connect.psdb.cloud",
  port: 3306,
  username: "s76sp15ec3c74p81wv5r",
  password: "pscale_pw_4wT1QAStn4v8fWovQmPXrxK3atByTPN2ch8KYsWRzur",
  database: "login_node",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
  ssl: {
    rejectUnauthorized: false,
  },
});
