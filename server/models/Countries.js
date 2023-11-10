const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({
	c_name: {
		type: String,
		// unique: true,
		required: true,
	},
	network: {
		type: String,
		required: true,
		
	},
  vpmn: {
		type: String,
		required: true,
		
	},
  imsi: {
		type: Number,
		required: true,
		
	},
  dataCost: {
		type: Number,
		required: true,
		
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const Country = mongoose.model('CountryData', CountrySchema);
module.exports = Country