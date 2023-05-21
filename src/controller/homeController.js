import pool from "../config/connectDB";


let getPage = async (req, res) => {
    let data = [];
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', {
      userData: rows
    })
}

let getDatailPage = async (req,res) => {
  let id = req.params.userId;
  let [user] = await pool.execute('select * from users where id = ?',[id]);
  return res.send(JSON.stringify(user))
}

let createUser = async(req,res) => {
  let {firstName, lastName, email, address} = req.body
  await pool.execute('insert into users(firstName, lastName, email, address) values (?,?,?,?)', [firstName, lastName, email, address]);
  return res.redirect('/');
}

let deleteUser = async(req,res) => {
  let userId = req.body.userId;
  await pool.execute('delete from users where id=?', [userId])
  return res.redirect('/')
}

let editUser = async(req, res) => {
  let id = req.params.userId;
  let [userId] = await pool.execute('select * from users where id=?',[id]);
  return res.render('update.ejs', {dataUser: userId[0]});
}

let updateUser = async(req,res) => {
  let {firstName, lastName, email, address, id} = req.body;
  await pool.execute('update users set firstName=?,lastName=?,email=?,address=? where id=?',[firstName,lastName,email,address,id])
  return res.redirect('/')
}
module.exports = {
    getPage: getPage,
    getDatailPage: getDatailPage,
    createUser: createUser,
    deleteUser: deleteUser,
    editUser: editUser,
    updateUser: updateUser,
}