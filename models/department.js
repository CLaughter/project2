module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define(
    "Department",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      },
      description: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );

  Department.associate = function(models) {
    Department.hasOne(models.User, { onDelete: "SET NULL" });
  };
  return Department;
};
