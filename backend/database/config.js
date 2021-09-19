module.exports = {
    HOST: "netbanking.cu0buaumd8bx.us-east-2.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "admin123",
    DB: "netbanking",
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
