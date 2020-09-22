const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('libro', {

		inv: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},

		titulo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		
		autor: {
			type: DataTypes.STRING
		},

		editorial: {
			type: DataTypes.STRING
		},

		año: {
			type: DataTypes.INTEGER
		},

		tema: {
			type: DataTypes.STRING
		}
	});
};
