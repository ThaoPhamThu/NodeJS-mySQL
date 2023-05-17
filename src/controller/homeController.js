import connection from "../config/connectDB";


let getPage = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
      
         function(err, results, fields) {
          console.log(results); 
          data = results.map((row) => {return row});
          return res.render('index.ejs', {
            data: JSON.stringify(data)
          });
        }
    )
}

module.exports = {
    getPage: getPage,
}