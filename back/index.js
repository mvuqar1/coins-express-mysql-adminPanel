
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


// app.get('/search', (req, res) => {

//   const title=req.query.search


//   connection.query(
//     `SELECT * FROM coins WHERE title LIKE '%${title}%'`,
//     (err, data) => {
//       if (!err) {
//         // console.log("data: ", data);
//         res.json(data);
//       } else {
//         res.status(500).json();
//       }
//     }
//     );
//   });



// app.get('/search/:object',(req, res) => {
//   const { search, country, metal, quality, fromPrice, toPrice, fromYear, toYear } = JSON.parse(req.params.object);

//   const conditions = [];

//   if (search) {
//     conditions.push(`title LIKE '%${search}%'`);
//   }

//   if (country) {
//     conditions.push(`country='${country}'`);
//   }

//   if (metal) {
//     conditions.push(`metal='${metal}'`);
//   }

//   if (quality) {
//     conditions.push(`quality='${quality}'`);
//   }

//   if (fromPrice) {
//     conditions.push(`price >= '${fromPrice}'`);
//   }

//   if (toPrice) {
//     conditions.push(`price <= '${toPrice}'`);
//   }

//   if (fromYear) {
//     conditions.push(`year >= '${fromYear}'`);
//   }

//   if (toYear) {
//     conditions.push(`year <= '${toYear}'`);
//   }

//   let sql = `SELECT * FROM coins`;

//   if (conditions.length > 0) {
//     sql += ` WHERE ${conditions.join(' AND ')}`;
//   }

//   try {
//     const results =connection.query(sql);
//     res.json(results);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json();
//   }
// });


app.get('/search', (req, res) => {
  // ?country=Canadian&metal=Nickel&sdfsd=fsdfsd
  const searchQuery = req.query; // { country: cana }
  const searchQueryArr = []

  if (searchQuery.length === 0) {
    console.log("first")
    connection.query('SELECT * FROM coins;', (err, data) => {
      if (!err) {
        res.json(data)
      } else {
        res.status(500).send()
        console.log(err)
      }
    })
  } else {
    if (searchQuery.country) {
      searchQueryArr.push(`issuing_country LIKE '%${searchQuery.country}%'`)
    }
    if (searchQuery.search) {
      searchQueryArr.push(`title LIKE '%${searchQuery.search}%' OR short_desc LIKE '%${searchQuery.search}%'`)
    }
    if (searchQuery.metal) {
      searchQueryArr.push(`composition LIKE '%${searchQuery.metal}%'`)
    }
    if (searchQuery.quality) {
      searchQueryArr.push(`quality LIKE '%${searchQuery.quality}%'`)
    }
    if (searchQuery.fromPrice) {
      searchQueryArr.push(`price >= '${searchQuery.fromPrice}'`)
    }
    if (searchQuery.toPrice) {
      searchQueryArr.push(`price <= '${searchQuery.toPrice}'`)
    }
    if (searchQuery.fromYear) {
      searchQueryArr.push(`year >= '${searchQuery.fromYear}'`)
    }
    if (searchQuery.toYear) {
      searchQueryArr.push(`year <= '${searchQuery.toYear}'`)
    }

    console.log(searchQueryArr)
    const finalQuery = searchQueryArr.join(' AND ')

    connection.query(`SELECT * FROM coins WHERE ${finalQuery};`, (err, data) => {
      if (!err) {
        res.json(data)
      } else {
        res.status(500).send()
        console.log(err)
      }
    })

  }


})

// app.get('/search/:object', (req, res) => {
//   const { search, country, metal, quality, fromPrice, toPrice, fromYear, toYear } = JSON.parse(req.params.object);
//   console.log(search, country, metal, quality, fromPrice, toPrice, fromYear, toYear)

//   let sqlQuery = 'SELECT * FROM coins WHERE 1=1';

//   if (search) {
//     sqlQuery += ` AND title LIKE '%${search}%'`;
//   }

//   if (country) {
//     sqlQuery += ` AND country='${country}'`;
//   }

//   if (metal) {
//     sqlQuery += ` AND metal='${metal}'`;
//   }

//   if (quality) {
//     sqlQuery += ` AND quality='${quality}'`;
//   }

//   if (fromPrice) {
//     sqlQuery += ` AND price >= '${fromPrice}'`;
//   }

//   if (toPrice) {
//     sqlQuery += ` AND price <= '${toPrice}'`;
//   }

//   if (fromYear) {
//     sqlQuery += ` AND year >= '${fromYear}'`;
//   }

//   if (toYear) {
//     sqlQuery += ` AND year <= '${toYear}'`;
//   }

//   connection.query(sqlQuery, (err, data) => {
//     console.log("first")
//     if (!err) {
//       console.log("good")
//       res.json(data);
//     } else {
//       res.status(500).json();
//     }
//   });
// });
// app.get('/search/:object', (req, res) => {
//   const { search, country, metal, quality, fromPrice, toPrice, fromYear, toYear } = JSON.parse(req.params.object);
//   console.log(search, country, metal, quality, fromPrice, toPrice, fromYear, toYear)

//   let sqlQuery = 'SELECT * FROM coins WHERE 1=1';

//   if (search) {
//     sqlQuery += ` AND title LIKE '%${search}%'`;
//   }

//   if (country) {
//     sqlQuery += ` AND country='${country}'`;
//   }

//   if (metal) {
//     sqlQuery += ` AND metal='${metal}'`;
//   }

//   if (quality) {
//     sqlQuery += ` AND quality='${quality}'`;
//   }

//   if (fromPrice) {
//     sqlQuery += ` AND price >= '${fromPrice}'`;
//   }

//   if (toPrice) {
//     sqlQuery += ` AND price <= '${toPrice}'`;
//   }

//   if (fromYear) {
//     sqlQuery += ` AND year >= '${fromYear}'`;
//   }

//   if (toYear) {
//     sqlQuery += ` AND year <= '${toYear}'`;
//   }

//   connection.query(sqlQuery, (err, data) => {
//     console.log("first")
//     if (!err) {
//       console.log("good")
//       res.json(data);
//     } else {
//       res.status(500).json();
//     }
//   });
// });


//   app.get('/search/:title', (req, res) => {
//     const searchQuery = req.query;
//     const searchQueryArr = []
//     if (searchQuery.country) {
//         searchQueryArr.push(`issuing_country LIKE '%${searchQuery.country}%'`)
//     }
//     if (searchQuery.search) {
//         searchQueryArr.push(`title LIKE '%${searchQuery.search}%' OR short_desc LIKE '%${searchQuery.search}%'`)
//     }
//     if (searchQuery.metal) {
//         searchQueryArr.push(`composition LIKE '%${searchQuery.metal}%'`)
//     }
//     if (searchQuery.quality) {
//         searchQueryArr.push(`quality LIKE '%${searchQuery.quality}%'`)
//     }
//     if (searchQuery.fromPrice) {
//         searchQueryArr.push(`price > '${searchQuery.fromPrice}'`)
//     }
//     if (searchQuery.toPrice) {
//         searchQueryArr.push(`price < '${searchQuery.toPrice}'`)
//     }
//     if (searchQuery.fromYear) {
//         searchQueryArr.push(`year > '${searchQuery.fromYear}'`)
//     }
//     if (searchQuery.toYear) {
//         searchQueryArr.push(`year < '${searchQuery.toYear}'`)
//     }
//     const finalQuery = searchQueryArr.join(' AND ')
//     connection.query(`SELECT * FROM coins
//         JOIN coin_details ON coin_details.coin_id = coins.id
//         WHERE ${finalQuery};
//     `, (err, data) => {
//         if (!err) {
//             res.json(data)
//         } else {
//             res.json(500)
//             console.log(err)
//         }

//     })
// })
  
  
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




