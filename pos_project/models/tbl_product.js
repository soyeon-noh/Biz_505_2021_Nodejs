module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("tbl_product", {
    p_code: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    p_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    p_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    p_rem: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
  });

  product.associate = (models) => {
    product.belongsTo(models.tbl_order);
  };

  return product; // return을 빼먹지말기
};
