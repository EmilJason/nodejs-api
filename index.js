var express = require('express');
var app = express();

/*connect to mysql*/
var db = require('./dbconnection'); 

// db.query('SELECT * FROM `tbl_server`', function (err, rows, fields) {
//   if (err) throw err
//  for (var i in rows) {
//         console.log('Post Titles: ', rows[i].location);
//     }
// });



// app.get('/', function (req, res) {
//   res.send('Hello World!')
// });
// /*books*/

// app.get('/api/books', function (req, res) {
//   res.send('get books');
// });
// app.get('/api/books/:_id', function (req, res) {
// 	var id = req.params._id;
//   res.send('get books with id '+id);
// });

// app.post('/api/books', function (req, res) {
//   res.send('post books');
// });

// app.put('/api/books', function (req, res) {
//   res.send('put books');
// });

// app.delete('/api/books', function (req, res) {
//   res.send('delete books');
// });

var Servers = require('./routes/Servers');

app.use('/Servers',Servers);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

