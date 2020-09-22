const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('libro', {

		inv: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},

		titulo: {
			type: DataTypes.STRING
		},
		
	});
};
