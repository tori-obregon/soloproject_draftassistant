const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const controller = require('./controller.js');

// app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.use('/', (req,res) => {
  console.log('root requested');
  res.status(200).sendFile(path.join( __dirname, '../dist/index.html' ))
});

app.use('/bundle.js', (req, res) => {
  console.log('Request for bundle.js received')
  res.sendFile(path.join(__dirname, '../dist/bundle.js'), {
  });
});




app.get('/api/data', controller.getUndraftedPlayers, (req, res) => {
    // TODO: respond with the data from the undrafted players
    res.json({ message: 'Hello from Express!' });
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });