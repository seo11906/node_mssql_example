module.exports = {
  HOST: "",
  PORT: "",
  USER: "",
  PASSWORD: "",
  DB: "MONITOR",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
