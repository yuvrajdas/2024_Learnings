const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())


// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yuvrajdas',
  password: 'Welcome@123',
  database: 'mern_crud',
  insecureAuth : true,
});
 
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

app.get('/users', (req, res)=>{
    connection.query(`SELECT * FROM users`, (row, field,info)=>{
        return  res.send({data:field}).status(200)
    })
})

app.delete('/user/:id', (req, res)=>{
    let id = req.params.id;

    connection.query(
        `delete from users where id=${id}`,
        (error, result, field)=>{
            if (error) {
                console.error(error);
                return res.status(500).send({ error: 'An error occurred while deleting the user.' });
            }
            return res.status(200).send({ data: 'Record Deleted successfully...' });
        }
    )
})

app.put('/user/:id', (req, res)=>{
    let id = req.params.id;
    const {fname, email, mobile} = req.body;
   
    connection.query(
        `UPDATE users SET fname='${fname}', email='${email}',mobile='${mobile}' WHERE id='${id}'`,
        (error, results, field)=>{
            if (error) {
                console.error(error);
                return res.status(500).send({ error: 'An error occurred while updating the user.' });
            }
            return res.status(200).send({ data: results });
        }
    )
});


app.post('/user', (req, res) => {
    console.log(req.body);
    const { fname, email, mobile } = req.body;
    connection.query(
        'INSERT INTO users (fname, email, mobile) VALUES (?, ?, ?)',
        [fname, email, mobile],
        (error, results, field) => {
            if (error) {
                console.error(error);
                return res.status(500).send({ error: 'An error occurred while creating the user.' });
            }
            return res.status(201).send({ data: field });
        }
    );
});

 
// Define routes
app.get('/', (req, res) => {
  res.send('Server started');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
