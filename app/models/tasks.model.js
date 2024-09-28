module.exports = (sequelize, Sequelize) => {
  const Tasks = sequelize.define("Tasks", {
    Task_Id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Ma_Dvi: {
      type: Sequelize.STRING
    },
    Ma_Hd: {
      type: Sequelize.STRING
    },
    So_So: {
      type: Sequelize.STRING
    },
    Ma_Vt: {
      type: Sequelize.STRING
    },
    Ma_May: {
      type: Sequelize.STRING
    },
    So_Tke: {
      type: Sequelize.STRING
    },
    Ngay_Bd: {
      type: Sequelize.DATE
    },
    Ngay_Kt: {
      type: Sequelize.DATE
    },
    Ngay_Can_Giao: {
      type: Sequelize.DATE
    },
    So_Luong_Dh: {
      type: Sequelize.DOUBLE
    },
    So_Luong_Sm: {
      type: Sequelize.DOUBLE
    },
    San_Luong_Ngay: {
      type: Sequelize.DOUBLE
    },
    So_Ct_Yc: {
      type: Sequelize.STRING
    },
    Kho_khan: {
      type: Sequelize.INTEGER
    },
    Chat_luong: {
      type: Sequelize.INTEGER
    },
    Hieu_Suat: {
      type: Sequelize.INTEGER
    },
    Toc_Do: {
      type: Sequelize.INTEGER
    },
    Loai_Dh: {
      type: Sequelize.STRING
    },
    Vung_May: {
      type: Sequelize.STRING
    },
    Ma_Mau: {
      type: Sequelize.STRING
    },
    Tinh_Chat: {
      type: Sequelize.STRING
    },
    Cap_Mau: {
      type: Sequelize.STRING
    },
    Ghi_Chu: {
      type: Sequelize.STRING
    },
    Id_Parent: {
      type: Sequelize.STRING
    },
    Create_Log: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.STRING
    },
    updatedAt: {
      type: Sequelize.STRING
    }

  });

  return Tasks;
};
