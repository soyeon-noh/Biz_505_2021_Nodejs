module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define("tbl_order", {
    o_seq: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    o_table: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    o_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    o_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    o_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    o_buyer: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
  });

  // order.associate = (models) => {
  //   order.belongsTo(models.tbl_product);
  // };

  return order; // return을 빼먹지말기
};
