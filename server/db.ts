import mysql from "mysql2/promise";

const pool = mysql.createPool({
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
  database: "island_sanctuary",
});

export default pool;
