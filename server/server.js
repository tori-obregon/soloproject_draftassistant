const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const controller = require('./controller.js');

//parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/bundle.js', express.static(path.join(__dirname, '../dist/bundle.js')));



app.get('/api/data', controller.getUndraftedPlayers, (req, res) => {
    // TODO: respond with the data from the undrafted players
    res.status(200).json(res.locals.players);
  });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

//global error handler
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });