const mongoose = require('mongoose')
const { Schema, model } = mongoose
const universitySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		number_students: {
			type: Number,
			required: true,
		},
		city: {
			type: String,
			required: true
		},
		hasGoodFootballTeam: {
			type: Boolean,
			required: true,
			default: false
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('University', universitySchema)
