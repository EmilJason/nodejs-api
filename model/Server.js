var db = require('../dbconnection'); //reference of dbconnection.js

var Servers={
	
	getAll:function(callback){
		return db.query("SELECT * FROM `tbl_server`",callback);
	},

	getById:function(id,callback){
		return db.query("select * from tbl_server where idsercer=?",[id],callback);
	},
	add:function(Task,callback){
		return db.query("Insert into tbl_server values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
	},
	deleteTask:function(id,callback){
		return db.query("delete from tbl_server where Id=?",[id],callback);
	},
	updateTask:function(id,Task,callback){
		return db.query("update tbl_server set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
	}
	
};
module.exports=Task;