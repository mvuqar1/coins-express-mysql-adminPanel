
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

const PORT = 3001;


const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, // опционально, если вы используете порт отличный от стандартного
    user: "root",
    password: "test",
    database: "final_project"
  });

connection.connect((err) => {
    if (err) {
        console.error("Ошибка подключения к базе данных: " + err.stack);
        return;
    }
    console.log("Соединение с базой данных успешно установлено");
});


// app.get("/",(req,res)=>{
// //   res.send("from page")
//   connection.query('SELECT * FROM categories',(err,data)=>{
//     if(!err){
//       res.json(data)
//     }
//   })
// })
  

app.get('/categories', (req, res) => {
    connection.query(
        "SELECT * FROM categories", (err, data) => {
            res.json(data)
        }
    )
})

app.get('/categories/:id', (req, res) => {
    const id = +req.params.id;

    connection.query(
        `SELECT * FROM coins WHERE category_id = ${id}`, (err, data) => {
            if (!err) {
                // console.log("data: ", data)
                res.json(data)
            } else {
                res.status(500).json()
            }
        }
    )
})
app.get('/categories/:id/:coinId', (req, res) => {
    const id = +req.params.coinId;

    connection.query(
        `SELECT * FROM coins WHERE id = ${id}`, (err, data) => {
            if (!err) {
                console.log("data: ", data)
                res.json(data)
            } else {
                res.status(500).json()
            }
        }
    )
})
app.get('/all/', (req, res) => {
  
    connection.query(
      `SELECT * FROM coins`,(err, data) => {
        if (!err) {
          // console.log("data: ", data);
          res.json(data);
        } else {
          res.status(500).json();
        }
      }
    );
  });
app.get('/all/:title', (req, res) => {
    const title = req.params.title.toLowerCase();
  
    connection.query(
      `SELECT * FROM coins WHERE title LIKE '%${title}%'`,
      (err, data) => {
        if (!err) {
          // console.log("data: ", data);
          res.json(data);
        } else {
          res.status(500).json();
        }
      }
    );
  });
  



app.listen(PORT, () => {
    console.log('listening to port: ', PORT)
})



  
  