var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    user_name: String , 
    user_email: String,
    user_mobile: String,
    user_collage: String,
    user_university: String,
    user_team_name: String,
    user_team_id: String,
    
});

module.exports = mongoose.model('devlopers' , myschema);