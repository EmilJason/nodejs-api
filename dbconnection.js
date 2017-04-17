var mysql = require('mysql');
var connection=mysql.createPool({

  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'vpn_db'


});
module.exports=connection;