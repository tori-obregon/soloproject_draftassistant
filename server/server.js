const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', controller.getUndraftedPlayers, (req, res) => {
    // TODO: respond with the data from the undrafted players
    res.json({ message: 'Hello from Express!' });
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });