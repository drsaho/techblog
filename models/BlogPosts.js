const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/');
const { User } = require('./Users');

class BlogPosts extends Model {}

BlogPosts.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		createrId: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: 'id'
			},
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'blogPosts'
	}
);

module.exports = BlogPosts;

// and date created
