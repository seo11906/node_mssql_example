module.exports = {
  HOST: "14.161.8.65",
  PORT: "1800",
  USER: "mntor",
  PASSWORD: "mntor123A@",
  DB: "MONITOR",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
