
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
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

// app.get('/categories/:id/:coinId', (req, res) => {
//   const id = +req.params.coinId;

//   connection.query(
//     `SELECT * FROM coins WHERE id = ${id}`, (err, data) => {
//       if (!err) {
//         // console.log("data: ", data)
//         res.json(data)
//       } else {
//         res.status(500).json()
//       }
//     }
//   )
// })


app.get('/categories/:id/:coinId', (req, res) => {
  const coinId = +req.params.coinId;

  connection.query(
    `SELECT * FROM coins WHERE id = ${coinId};`, (err, coin) => {
      if (!err) {
        connection.query(
          `SELECT * FROM text WHERE text_id=${coinId}`, (err, text_text) => {
            if (!err) {
              res.json({
                coin: coin[0],
                text_text
              });
            } else {
              console.log('error: ', err);
              res.status(500).json();
            }
          }
        );
      }
    }
  )}
);


app.get('/search/:title', (req, res) => {
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
  
  
  app.get('/all/', (req, res) => {
  
    connection.query(
      `SELECT * FROM coins`, (err, data) => {
        if (!err) {
          // console.log("data: ", data);
          res.json(data);
        } else {
          res.status(500).json();
        }
      }
    );
  });

  
app.get('/all/:id', (req, res) => {
  const id = req.params.id;

  connection.query(
    `SELECT * FROM coins WHERE id = ${id}`, (err, data) => {
      if (!err) {
        res.json(data);
      } else {
        res.status(500).json();
      }
    }
  );
});


app.delete('/all/:id', (req, res) => {
  const id = req.params.id;

  connection.query(
    `DELETE FROM coins WHERE id = ${id}`, (err, data) => {
      if (!err) {
        res.json(data);
      } else {
        res.status(500).json();
      }
    }
  );
});

app.put('/all/:id', (req, res) => {
  const id = +req.params.id;
  const coin = req.body; // данные монеты, переданные в теле запроса

  connection.query(
    `UPDATE coins SET ? WHERE id = ?`, 
    [coin, id], // передача списка значений в запросе
    (err, result) => {
      if (!err) {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Coin not found' });
        } else {
          res.status(200).json(result);
        }
      } else {
        console.log(err);
        res.status(500).json({ error: 'Error updating coin' });
      }
    }
  );
});
app.post('/all', (req, res) => {
  const coin = req.body; // данные монеты, переданные в теле запроса

  connection.query(
    'INSERT INTO coins SET ?', 
    coin, // передача объекта с данными монеты в запросе
    (err, result) => {
      if (!err) {
        res.status(201).json({ message: 'Coin added successfully', coin });
      } else {
        console.log(err);
        res.status(500).json({ error: 'Error adding coin' });
      }
    }
  );
});




app.listen(PORT, () => {
  console.log('listening to port: ', PORT)
})




