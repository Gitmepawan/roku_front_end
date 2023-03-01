const express = require('express');
const router = express.Router();

// import the sql package
const sql = require('mysql');
const creds = require('../config/user');
// create a pool potential connections and use the user crediantls to connect to your instance og mysql
// onyour mchine

 const pool  = sql.createPool(creds);


router.get('/', (req, res) => {
    console.log.apply(req);
    res.json({message: 'hit ums API root'});
})

// retrive all user from database

router.get('/users', (req, res) => {
    console.log(req.params.user);
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM users', function (error, results) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
          
          // remove any sensative info from the database(s)
          // delete results[0].password;
          // delete results[0].fname;
          // delete results[0].lname;

         
          // if (results[0].avatar === null){
          //   results[0].avatar = "temp_avatar.jpg"
          // }   
          // console.log(results);
          // Don't use the connection here, it has been returned to the pool.
          res.json(results);
        });
    });

  
})




// retrive one user from  a database based on user ID or another field


module.exports = router;