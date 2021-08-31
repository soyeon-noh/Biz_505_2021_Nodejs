module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "tbl_product",
    {
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
    },
    { timestamps: false } // createdAt, updatedAt 만들지 않기
  );

  // //FK 설정
  // product.associate = (models) => {
  //   product.hasMany(models.tbl_order, { foreignKey: "o_pcode" });
  // };

  return product; // return을 빼먹지말기
};
